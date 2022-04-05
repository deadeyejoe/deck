(ns conclave.map.beta.constraint
  (:require [conclave.map.core :as core]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as score-util]
            [conclave.map.beta.distance :as distance]
            [clojure.math.combinatorics :as combi]))

(defn coordinate-dispersion-data [{:keys [distances] :as galaxy-map} tiles]
  (let [coordinates (map (comp (partial core/tile->coordinate galaxy-map)
                               :key)
                         tiles)
        mutual-distances (distance/mutual-distances distances coordinates)]
    {:mutual-distances mutual-distances
     :min-distance (apply min mutual-distances)
     :max-distance (apply max mutual-distances)
     :variation (score-util/variation mutual-distances)}))

(def constraints {:anomalies       {:tiles tile/anomalies
                                    :min-distance-allowed 2}
                  :wormhole-alpha  {:tiles tile/wormholes-alpha
                                    :distance-threshold 3
                                    :min-distance-allowed 2}
                  :wormhole-beta   {:tiles tile/wormholes-beta
                                    :distance-threshold 3
                                    :min-distance-allowed 2}
                  :legendaries     {:tiles tile/legendaries
                                    :min-distance-allowed 3}
                  :supernovae      {:tiles tile/supernovae
                                    :distance-threshold 3
                                    :min-distance-allowed 2}})

(defn distance->score [{:keys [distance-threshold min-distance-allowed]
                        :or {distance-threshold 0}
                        :as constraint} distance]
  (cond
    (< distance min-distance-allowed) 100
    (<= min-distance-allowed distance distance-threshold) (inc (- distance-threshold distance))
    (< distance-threshold distance) 0))

(defn evaluate-constraint [galaxy-map
                           [constraint-name
                            {:keys [tiles factor] :as constraint}]]
  (let [{:keys [:mutual-distances]
         :as coordinate-data} (coordinate-dispersion-data galaxy-map tiles)
        distance-violations (->> mutual-distances
                                 (map (partial distance->score constraint))
                                 (filter pos-int?))]
    (when (seq distance-violations)
      (assoc coordinate-data
             :key constraint-name
             :violations (count distance-violations)
             :score (apply + distance-violations)))))

(defn evaluate-constraints [galaxy-map]
  (keep (partial evaluate-constraint galaxy-map) constraints))

(defn score [constraint-violations]
  (->> constraint-violations
       (map :score)
       (apply +)))

(defn compute-score [galaxy-map]
  (->> galaxy-map
       (evaluate-constraints)
       (score)))

(defn summary [violations]
  {:key :total
   :violations (apply + (map :volations violations))
   :score (score violations)})
