(ns conclave.generate.slice
  (:require [conclave.map.core :as map]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [conclave.utils.score :as stats]
            [conclave.utils.vector :as vector-util]
            [deck.random.interface :as random]
            [clojure.math.combinatorics :as combi]
            [conclave.generate.balance :as balance]))

(defn player-slices [slices]
  (vals (dissoc slices :equidistant)))

(defn with-equidistant-first [{:keys [equidistant] :as slices}]
  (into [equidistant] (player-slices slices)))

(def favoured-weight (/ 1 2))
(def unfavoured-weight (/ 3 2))

(def invert-balance
  {:balanced :balanced
   :resource :influence
   :influence :resource})

(defn weights [key equidistant-balance]
  (let [balance (if (= :equidistant key)
                  equidistant-balance
                  (invert-balance equidistant-balance))]
    {:optimal-resources (case balance
                          :resource favoured-weight
                          :influence unfavoured-weight
                          1)
     :optimal-influence (case balance
                          :resource unfavoured-weight
                          :influence favoured-weight
                          1)
     :legendary 2
     :tech 2}))

(defn init-slice-array [slices {:keys [equidistant-balance] :as _options}]
  (loop [[{:keys [size key] :as next-slice} & rest] (with-equidistant-first slices)
         slices []
         index 0]
    (if (nil? next-slice)
      slices
      (recur rest
             (conj slices (assoc next-slice
                                 :range [index (+ index size)]
                                 :weights (weights key equidistant-balance)))
             (+ index size)))))

(defn move-to-front
  "Be careful when chaining this: Is the second pred a subset of the first?"
  [pred tile-array]
  (let [{pass true fail false} (group-by (comp boolean pred) tile-array)]
    (-> []
        (into pass)
        (into fail))))

(defn init-tile-array [[equidistant & _rest :as _slice-array]
                       {:keys [seed legendaries-in-equidistants planets-in-equidistants] :as _options}
                       tileset]
  (let [reordered (cond->> (random/seed-shuffle seed tileset)
                    planets-in-equidistants (move-to-front tiles/has-planets?)
                    legendaries-in-equidistants (move-to-front tiles/legendary?))
        [equidistant players] (split-at (:size equidistant) reordered)]
    (-> []
        (into (random/seed-shuffle seed equidistant))
        (into (random/seed-shuffle seed players)))))

(defn owner-mask [slice-array]
  (vec (mapcat (fn [{:keys [key size]}]
                 (repeat size key))
               slice-array)))

(defn constraint-mask [slice-array
                       {:keys [legendaries-in-equidistants planets-in-equidistants] :as _options}]
  (let [default (constantly true)
        no-legendaries (complement tiles/legendary?)]
    (vec (mapcat (fn [{:keys [key size]}]
                   (repeat size
                           (or (if (= :equidistant key)
                                 (when planets-in-equidistants tiles/has-planets?)
                                 (when legendaries-in-equidistants no-legendaries))
                               default)))
                 slice-array))))

(defn swaps [owner-mask]
  (let [parts (->> owner-mask
                   (map-indexed vector)
                   (partition-by second)
                   (map (partial map first)))]
    (->> (combi/combinations parts 2)
         (mapcat (partial apply combi/cartesian-product)))))

(defn compute-balance-goal [{:keys [equidistant] :as slices} tileset]
  (let [player-slices (player-slices slices)
        total-tiles (count tileset)
        player-tiles (apply + (map :size player-slices))
        player-count (count player-slices)
        per-slice (fn [n]
                    (/ (* n player-tiles)
                       total-tiles player-count))
        res-per-slice (-> (tile-set/sum-quantity :optimal-resources tileset)
                          (per-slice))
        inf-per-slice (-> (tile-set/sum-quantity :optimal-influence tileset)
                          (per-slice))]
    (assert (= total-tiles (+ player-tiles (:size equidistant)))
            (str "Slice totals (" (+ player-tiles (:size equidistant)) ") should sum to number of tiles (" total-tiles ")!"))
    {:balance-goal (- res-per-slice inf-per-slice)
     :resources-per-slice res-per-slice
     :influence-per-slice inf-per-slice}))

(defn init-slice-context [{{:keys [slices]} :layout
                           :keys [options tileset]
                           :as context}]
  (let [slice-array (init-slice-array slices options)
        tile-array (init-tile-array slice-array options tileset)
        owner-mask (owner-mask slice-array)
        constraint-mask (constraint-mask slice-array options)]
    (assoc context :slices (merge {:slice-array slice-array
                                   :tile-array tile-array
                                   :owner-mask owner-mask
                                   :constraint-mask constraint-mask
                                   :swaps (swaps owner-mask)}
                                  (compute-balance-goal slices tileset)))))

(def into-vec (fnil into []))

(defn combine [slice tile]
  (let [{:keys [optimal-resources
                optimal-influence
                specialties
                tech
                legendary]} (:total tile)]
    (-> slice
        (update :optimal-resources + optimal-resources)
        (update :optimal-influence + optimal-influence)
        (update :specialties into-vec specialties)
        (update :tech + tech)
        (update :legendary + legendary))))

(defn apply-weight [weight slice-sum]
  (merge-with *
              (select-keys slice-sum (keys weight))
              weight))

(defn slice->score [{:keys [size weights] :as _slice} summary]
  (/ (->> (apply-weight weights summary)
          (vals)
          (apply +))
     size))

(defn sum-slice [tile-array {:keys [range] :as slice}]
  (let [tiles (apply subvec tile-array range)
        {:keys [optimal-resources optimal-influence] :as summary} (reduce combine {} tiles)]
    (merge slice {:tiles tiles
                  :summary summary
                  :balance (- optimal-resources optimal-influence)
                  :score (slice->score slice summary)})))

(defn sum-slices [{:keys [tile-array slice-array] :as _slice-context}]
  (map (partial sum-slice tile-array) slice-array))

(defn compute-scores [{:keys [balance-goal] :as _slice-context} slice-sums]
  [(stats/variation (map :score slice-sums))
   (apply + (->> (rest slice-sums)
                 (map :balance)
                 (map (comp Math/abs (partial - balance-goal)))
                 (map #(Math/pow % 2))))
   #_(->> (rest slice-sums)
          (map :balance)
          (map (comp Math/abs (partial - balance-goal)))
          (filter #(< % 3))
          (count))])

(defn apply-swap? [{:keys [constraint-mask tile-array] :as _slice-context}
                   [from-index to-index :as _swap]]
  (let [from-tile (get tile-array from-index)
        to-tile (get tile-array to-index)]
    (and ((get constraint-mask to-index) from-tile)
         ((get constraint-mask from-index) to-tile))))

(defn apply-swap! [slice-context swap]
  (update slice-context :tile-array vector-util/swap-indices swap))

(defn towards-bounds [low high before after]
  (or
   (< before after low)
   (or (<= low before high)
       (<= low after high))
   (< high after before)))

(defn improved-score? [[score-before balance-before] [score-after balance-after]]
  (and (<= score-after score-before)
       (towards-bounds 8 16 balance-before balance-after)
       #_(<= balance-after balance-before)))

(defn optimize-step [[current-score slice-context] swap]
  (if (apply-swap? slice-context swap)
    (let [new-context (apply-swap! slice-context swap)
          next-score (compute-scores new-context (sum-slices new-context))]
      (if (improved-score? current-score next-score)
        [next-score new-context]
        [current-score slice-context]))
    [current-score slice-context]))

(defn optimize [{{:keys [swaps] :as slice-context} :slices
                 {:keys [seed max-swaps]} :options
                 :as context}]
  (assoc context :slices
         (loop [[next-swap & rest-swaps] (cond->> (random/seed-shuffle seed swaps)
                                           max-swaps (take max-swaps))
                [_current-score
                 current-context
                 :as current] [(compute-scores slice-context (sum-slices slice-context))
                               slice-context]]
           (if (nil? next-swap)
             current-context
             (recur rest-swaps (optimize-step current next-swap))))))

(defn generate-map [{{:keys [tile-array slice-array]} :slices
                     :keys [layout]
                     :as context}]
  (assoc context :galaxy-map
         (->> slice-array
              (mapcat (fn [{:keys [coordinates range]}]
                        (map vector
                             coordinates
                             (apply subvec tile-array range))))
              (reduce (partial apply map/set-coordinate)
                      (map/new layout)))))

(defn debug-summary [label]
  {:when #{:debug}
   :exec (fn [context]
           (tap> [label (->> context
                                       :slices
                                       (sum-slices)
                                       (map (juxt :score :balance :summary)))])
           context)})

(def steps
  [{:exec init-slice-context}
   (debug-summary ::before-optimization)
   {:exec optimize}
   (debug-summary ::after-pass-1)
{:exec optimize}
(debug-summary ::after-pass-2)
{:exec optimize}
(debug-summary ::after-pass-3)
   {:exec generate-map}])
