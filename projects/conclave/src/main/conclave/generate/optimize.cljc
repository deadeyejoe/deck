(ns conclave.generate.optimize
  (:require [conclave.generate.constraints :as constraints]
            [conclave.generate.slice :as slice]
            [conclave.tiles.core :as tiles]
            [conclave.utils.vector :as vector-util]
            [deck.random.interface :as random]
            [clojure.math.combinatorics :as combi]))

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

(defn swaps [owner-mask]
  (let [parts (->> owner-mask
                   (map-indexed vector)
                   (partition-by second)
                   (map (partial map first)))]
    (->> (combi/combinations parts 2)
         (mapcat (partial apply combi/cartesian-product)))))

(defn init-slice-context [{{:keys [slices]} :layout
                           :keys [options tileset]
                           :as context}]
  (let [slice-array (slice/init-slice-array slices options)
        tile-array (init-tile-array slice-array options tileset)
        owner-mask (owner-mask slice-array)
        constraint-mask (slice/constraint-mask slice-array options)
        balance-goals (constraints/compute-balance-goal options slice-array tileset)]
    (assoc context :slices (merge {:slice-array slice-array
                                   :tile-array tile-array
                                   :owner-mask owner-mask
                                   :constraint-mask constraint-mask
                                   :swaps (swaps owner-mask)
                                   :balance-goals balance-goals}
                                  balance-goals))))

(defn compute-scores [{:keys [balance-goals] :as slice-context}]
  (let [slices-with-summary (slice/add-summary-to-slices slice-context)]
    [(constraints/variance-score balance-goals slices-with-summary)
     (constraints/balance-score balance-goals slices-with-summary)]))

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
       (towards-bounds 8 16 balance-before balance-after)))

(defn optimize-step [[current-score slice-context] swap]
  (if (apply-swap? slice-context swap)
    (let [new-context (apply-swap! slice-context swap)
          next-score (compute-scores new-context)]
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
                [_current-score current-context :as current] [(compute-scores slice-context) slice-context]]
           (if (nil? next-swap)
             current-context
             (recur rest-swaps (optimize-step current next-swap))))))

(defn debug-summary [label]
  {:when #{:debug}
   :exec (fn [context]
           (tap> [label (->> (map (juxt :score :balance :summary)
                                  (compute-scores context)))])
           context)})

(def steps
  [{:exec init-slice-context}
   (debug-summary ::before-optimization)
   {:exec optimize}
   (debug-summary ::after-pass-1)
   {:exec optimize}
   (debug-summary ::after-pass-2)
   {:exec optimize}
   (debug-summary ::after-pass-3)])
