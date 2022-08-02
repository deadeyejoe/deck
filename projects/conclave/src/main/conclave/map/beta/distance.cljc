(ns conclave.map.beta.distance
  (:require [conclave.map.adjacent :as adjacent]
            [conclave.map.core :as core]
            [clojure.math.combinatorics :as combi]
            #?(:clj [taoensso.tufte :as tufte :refer [defnp]]
               :cljs [taoensso.tufte :as tufte :refer-macros (defnp)])))

(defn ->queue [element]
  #?(:clj (conj clojure.lang.PersistentQueue/EMPTY element)
     :cljs #queue [element]))

(defnp distances-from
  ([neighbour-map start-coordinate]
   (loop [result {}
          visit-queue (->queue [0 start-coordinate (get neighbour-map start-coordinate)])]
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
  (let [home-coordinates (core/home-coordinates galaxy-map)
        neighbour-map (adjacent/adjacency galaxy-map)]
    (->> home-coordinates
         (map (juxt identity (partial distances-from neighbour-map)))
         (into {}))))

(defnp coordinate->distances [galaxy-map]
  (let [neighbour-map (adjacent/adjacency galaxy-map)]
    (->> galaxy-map
         (core/coordinates)
         (map (juxt identity (partial distances-from neighbour-map)))
         (into {}))))

(defn mutual-distances [coordinate->coordinate->distance coordinates]
  (->> (combi/combinations coordinates 2)
       (keep (partial get-in coordinate->coordinate->distance))))
