(ns conclave.map.distance
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.tiles.score :as tile-score]
            [conclave.utils :refer [transform-values]]
            [conclave.score :as util-score]))

(defn to-other-tiles [galaxy-map start-coordinate]
  (loop [result {}
         [current-visit & rest-visit] [[0 start-coordinate]]]
    (if current-visit
      (let [[distance current-coordinate] current-visit
            previous-distance (get result current-coordinate)]
        (if (or (nil? previous-distance) (< distance previous-distance))
          (let [neighbours (core/adjacent galaxy-map current-coordinate)
                move-cost  (->> current-coordinate
                                (core/coordinate->tile galaxy-map)
                                (tile-score/move-cost))]
            (recur (assoc result current-coordinate distance)
                   (concat rest-visit (map (partial list (+ distance move-cost)) neighbours))))
          (recur result
                 rest-visit)))
      result)))