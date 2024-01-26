(ns conclave.generate.arrangement
  "Fiddles tiles around within slices to try and improve relative distance between e.g. techs, anomalies etc."
  (:require [conclave.map.core :as map]
            [conclave.map.constraint :as constraint]
            [deck.random.interface :as random]
            [clojure.math.combinatorics :as combi]))

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

(defn generate-swaps [{:keys [slice-array] :as _slices}]
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

(defn optimize [{{:keys [swaps] :as _arrangement-context} :arrangement
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

(def steps
  [{:name ::generate-map
    :exec generate-map}
   {:name ::prepare-arrangement
    :exec init-arrangement-context}
   {:name ::log-constraint-score-before
    :when #{:debug}
    :exec (fn [c]
            (tap> [:constraint-score-before (-> c :galaxy-map constraint/compute-score)])
            c)}
   {:name ::optimize
    :exec optimize}
   {:name ::log-constraint-score-after
    :when #{:debug}
    :exec (fn [c]
            (tap> [:constraint-score-after (-> c :galaxy-map constraint/compute-score)])
            c)}])
