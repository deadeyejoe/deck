(ns conclave.map.distance
  (:require [conclave.map.core :as core]
            [conclave.tiles.core :as tile]
            [conclave.utils :refer [transform-values]]))

(defn move-cost [tile]
  (cond 
    (:anomaly tile)  (case (:anomaly tile)
                      :asteroid-field 1.5
                      :gravity-rift 1
                      :nebula 2
                      :supernova 9000.1)
    (tile/red? tile) 1.2 ;; empty tile
    :else            1))

(defn move-cost-map [galaxy-map]
  (-> galaxy-map
      :tiles
      (transform-values move-cost)))

(defn adjacent-map [galaxy-map]
  (->> galaxy-map
       :tiles
       keys
       (reduce (fn [r c] (assoc r c (core/adjacent galaxy-map c)))
               {})))

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
                                (move-cost))]
            (recur (assoc result current-coordinate distance)
                   (concat rest-visit (map (partial list (+ distance move-cost)) neighbours))))
          (recur result
                 rest-visit)))
      result)))

(defn from
  ([galaxy-map start-coordinate] (from (adjacent-map galaxy-map)
                                       (move-cost-map galaxy-map)
                                       start-coordinate))
  ([neighbours move-costs start-coordinate]
   (loop [result {}
          [current-visit & rest-visit] [[0 start-coordinate]]]
     (if (= (count result) (count neighbours))
       result
       (let [[distance current-coordinate] current-visit
             previous-distance (get result current-coordinate ##Inf)]
         (if (< distance previous-distance)
           (let [neighbours (get neighbours current-coordinate)
                 move-cost  (get move-costs current-coordinate)]
             (recur (assoc result current-coordinate distance)
                    (concat rest-visit (map (partial list (+ distance move-cost)) neighbours))))
           (recur result
                  rest-visit)))))))

(defn from-all [galaxy-map coords]
  (let [neighbours (adjacent-map galaxy-map)
        move-costs (move-cost-map galaxy-map)]
    (reduce (fn [r home-c] (assoc r home-c (from neighbours move-costs home-c)))
            {}
            coords)))