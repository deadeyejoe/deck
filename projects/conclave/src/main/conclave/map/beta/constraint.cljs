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
                                    :min-distance-allowed 3}
                  :wormhole-beta   {:tiles tile/wormholes-beta
                                    :min-distance-allowed 3}
                  :legendaries     {:tiles tile/legendaries
                                    :min-distance-allowed 3}
                  :supernovae      {:tiles tile/supernovae
                                    :min-distance-allowed 3}
                  :nebulae         {:tiles tile/nebulae
                                    :min-distance-allowed 3}
                  :gravity-rifts   {:tiles tile/gravity-rifts
                                    :min-distance-allowed 3}})

(defn evaluate-constraint [galaxy-map
                           [constraint-name {:keys [tiles min-distance-allowed]}]]
  (let [{:keys [:mutual-distances]
         :as coordinate-data} (coordinate-dispersion-data galaxy-map tiles)
        distance-violations (->> mutual-distances
                                 (filter #(< % min-distance-allowed))
                                 (count))]
    (when (pos? distance-violations)
      (assoc coordinate-data
             :violations distance-violations
             :type constraint-name))))

(defn evaluate-constraints [galaxy-map]
  (keep (partial evaluate-constraint galaxy-map) constraints))

(defn score [galaxy-map]
  (->> galaxy-map
       (evaluate-constraints)
       (map :violations)
       (apply +)))
