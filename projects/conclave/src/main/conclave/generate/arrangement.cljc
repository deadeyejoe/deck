(ns conclave.generate.arrangement
  (:require [conclave.map.core :as map]
            [conclave.map.beta.constraint :as constraint]
            [deck.random.interface :as random]
            [clojure.math.combinatorics :as combi]))

(defn generate-swaps [{:keys [slice-array] :as slices}]
  (->> slice-array
       (map :coordinates)
       (mapcat #(combi/combinations % 2))))

(defn init-arrangement-context [{:keys [slices] :as context}]
  (assoc context :arrangement {:swaps (generate-swaps slices)}))

(defn improved-score? [before after]
  (or (< before after)
      (<= (Math/abs (- after before)) 1)))

(defn optimize-step [[current-score current-map] swap]
  (let [new-map (apply map/swap-tiles current-map swap)
        next-score (constraint/compute-score new-map)]
    (if (improved-score? current-score next-score)
      [next-score new-map]
      [current-score current-map])))

(defn optimize [{{:keys [swaps] :as arrangement-context} :arrangement
                 {:keys [seed max-swaps]} :options
                 :keys [galaxy-map]
                 :as context}]
  (assoc context :galaxy-map
         (loop [[next-swap & rest-swaps] (cond->> (random/seed-shuffle seed swaps)
                                           max-swaps (take max-swaps))
                [_current-score
                 current-map
                 :as current] [(constraint/compute-score galaxy-map)
                               galaxy-map]]
           (if (nil? next-swap)
             current-map
             (recur rest-swaps (optimize-step current next-swap))))))

(defn finalize [{:keys [layout galaxy-map] :as context}]
  (assoc context :galaxy-map
         (-> galaxy-map
             (map/import-coordinate-map (:fixed-tiles layout))
             (map/import-coordinate-map (:home-tiles layout)))))

(def steps
  [{:exec init-arrangement-context}
   {:when #{:debug}
    :exec (fn [c]
            (tap> [:constraint-score-before (-> c :galaxy-map constraint/compute-score)])
            c)}
   {:exec optimize}
   {:when #{:debug}
    :exec (fn [c]
            (tap> [:constraint-score-after (-> c :galaxy-map constraint/compute-score)])
            c)}
   {:exec finalize}])
