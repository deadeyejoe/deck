(ns conclave.map.distance
  (:require [taoensso.tufte :as tufte :refer-macros (defnp)]
            [conclave.map.core :as core]
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

(defnp from
  ([galaxy-map start-coordinate] (from (adjacent-map galaxy-map)
                                       (move-cost-map galaxy-map)
                                       start-coordinate))
  ([neighbour-map move-cost-map start-coordinate]
   (loop [result {}
          visit-queue #queue [[0 start-coordinate (get neighbour-map start-coordinate)]]]
     (let [[distance coordinate neighbours :as current-visit] (peek visit-queue)]
       (if (nil? current-visit)
         result
         (if (< distance (get result coordinate ##Inf))
           (let [updated-distance (+ (get move-cost-map coordinate) distance)]
               (recur (assoc result coordinate distance)
                      (reduce (fn [q coord] (conj q [updated-distance coord (get neighbour-map coord)]))
                              (pop visit-queue)
                              neighbours)))
           (recur result
                  (pop visit-queue))))))))

(defnp from-all [galaxy-map coords]
  (let [neighbours (adjacent-map galaxy-map)
        move-costs (move-cost-map galaxy-map)]
    (reduce (fn [r home-c] (assoc r home-c (from neighbours move-costs home-c)))
            {}
            coords)))