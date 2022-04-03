(ns conclave.map.beta.distance
  (:require [taoensso.tufte :as tufte :refer-macros (defnp)]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [clojure.math.combinatorics :as combi]))

(defn neighbour-map [galaxy-map]
  (let [get-adjacent (partial core/neighbouring galaxy-map)]
    (->> galaxy-map
         (core/coordinates)
         (reduce (fn [r c] (assoc r c (get-adjacent c)))
                 {}))))

(defnp distances-from
  ([neighbour-map start-coordinate]
   (loop [result {}
          visit-queue #queue [[0 start-coordinate (get neighbour-map start-coordinate)]]]
     (let [[distance coordinate neighbours :as current-visit] (peek visit-queue)]
       (if (nil? current-visit)
         result
         (if (< distance (get result coordinate ##Inf))
           (let [updated-distance (inc  distance)]
             (recur (assoc result coordinate distance)
                    (reduce (fn [q coord] (conj q [updated-distance coord (get neighbour-map coord)]))
                            (pop visit-queue)
                            neighbours)))
           (recur result
                  (pop visit-queue))))))))

(defnp hs->distances [galaxy-map]
  (let [home-coordinates (-> galaxy-map :layout :home-tiles keys)
        neighbour-map (neighbour-map galaxy-map)]
    (->> home-coordinates
         (map (juxt identity (partial distances-from neighbour-map)))
         (into {}))))

(defnp coordinate->distances [galaxy-map]
  (let [neighbour-map (neighbour-map galaxy-map)]
    (->> galaxy-map
         (core/coordinates)
         (map (juxt identity (partial distances-from neighbour-map)))
         (into {}))))

(defn mutual-distances [coordinate->coordinate->distance coordinates]
  (->> (combi/combinations coordinates 2)
       (keep (partial get-in coordinate->coordinate->distance))))

(comment
  (def sample-map (-> (core/build layout/eight-player)
                      (core/populate "ABCDE")))
  (count (hs->distances sample-map)))
