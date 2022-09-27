(ns conclave.generate.optimize
  (:require [conclave.generate.score :as score]
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
        balance-goals (score/compute-balance-goal options slice-array tileset)]
    (assoc context :slices (merge {:slice-array slice-array
                                   :tile-array tile-array
                                   :owner-mask owner-mask
                                   :constraint-mask constraint-mask
                                   :swaps (swaps owner-mask)
                                   :balance-goals balance-goals}
                                  balance-goals))))

(defn compute-scores [score-schema {:keys [balance-goals] :as slice-context}]
  (let [slices-with-summary (slice/add-summary-to-slices slice-context)]
    (score/compute-scores score-schema balance-goals slices-with-summary)))

(defn apply-swap? [{:keys [constraint-mask tile-array] :as _slice-context}
                   [from-index to-index :as _swap]]
  (let [from-tile (get tile-array from-index)
        to-tile (get tile-array to-index)]
    (and ((get constraint-mask to-index) from-tile)
         ((get constraint-mask from-index) to-tile))))

(defn apply-swap! [slice-context swap]
  (update slice-context :tile-array vector-util/swap-indices swap))

(defn optimize-step [{:keys [score-schema]
                      current-context :slice-context
                      current-score :score
                      :as opt-context} swap]
  (if (apply-swap? current-context swap)
    (let [next-context (apply-swap! current-context swap)
          next-score (compute-scores score-schema next-context)]
      (if (score/improved-score? score-schema current-score next-score)
        (-> opt-context
            (assoc :score next-score
                   :slice-context next-context)
            (update :swaps-passed inc))
        (update opt-context :swaps-failed inc)))
    (update opt-context :swaps-constrained inc)))

(defn ->optimize-context [score-schema slice-context]
  {:slice-context slice-context
   :score-schema score-schema
   :score (compute-scores score-schema slice-context)
   :swaps-passed 0
   :swaps-failed 0
   :swaps-constrained 0})

(defn optimize [{{:keys [swaps] :as slice-context} :slices
                 {:keys [seed max-swaps debug]} :options
                 :as context} score-schema]
  (assoc context :slices
         (loop [[next-swap & rest-swaps] (cond->> (random/seed-shuffle seed swaps)
                                           max-swaps (take max-swaps))
                current-context (->optimize-context score-schema slice-context)]
           (if (nil? next-swap)
             (do (when debug
                   (tap> [::optimize-finished (dissoc current-context :slice-context)]))
                 (:slice-context current-context))
             (recur rest-swaps (optimize-step current-context next-swap))))))

(defn debug-summary [label]
  {:name label
   :when #{:debug}
   :exec (fn [{slice-context :slices
               :as context}]
           (tap> [label (->> (compute-scores {:constraint :free
                                              :balance :free
                                              :variance :free} slice-context))])
           context)})

(def free-constraint {:constraint :free})
(def locked-constraint {:constraint :locked :variance :free :balance :free})

(def steps
  [{:name ::init-slice-context
    :exec init-slice-context}
   (debug-summary ::before-optimization)
   {:name ::first-pass
    :exec (fn [context] (optimize context free-constraint))}
   (debug-summary ::after-pass-1)
   {:name ::second-pass
    :exec (fn [context] (optimize context locked-constraint))}
   (debug-summary ::after-pass-2)
   {:name ::third-pass
    :exec (fn [context] (optimize context locked-constraint))}
   (debug-summary ::after-pass-3)])
