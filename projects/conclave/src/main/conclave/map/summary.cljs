(ns conclave.map.summary
  (:require [conclave.map.core :as core]))

(defn collect-vector [result vector]
  (into (or result []) vector))

(defn collect [result {:keys [total] :as tile}]
  (-> result
      (update :resources + (:resources total))
      (update :influence + (:influence total))
      (update :traits    collect-vector (:traits total))
      (update :specialties collect-vector (:specialties total))))

(defn player-summary [galaxy-map player-key]
  (let [home-c (core/tile->coordinate galaxy-map player-key)
        neighbours (core/adjacent galaxy-map home-c)]
    (-> (->> neighbours
             (map (partial core/coordinate->tile galaxy-map))
             (reduce collect {}))
        (update :traits (comp vec sort))
        (update :specialties (comp vec sort)))))
