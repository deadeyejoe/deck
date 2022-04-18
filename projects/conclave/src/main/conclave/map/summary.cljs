(ns conclave.map.summary
  (:require [conclave.map.core :as core]
            [conclave.map.beta.starter :as starter]))

(defn collect-vector [result vector]
  (into (or result []) vector))

(defn collect [result {:keys [total] :as tile}]
  (-> result
      (update :resources + (:resources total))
      (update :optimal-resources + (:optimal-resources total))
      (update :influence + (:influence total))
      (update :optimal-influence + (:optimal-influence total))
      (update :traits    collect-vector (:traits total))
      (update :specialties collect-vector (:specialties total))))

(defn player-summary [galaxy-map player-key]
  (let [home-c (core/tile->coordinate galaxy-map player-key)
        slice (get-in galaxy-map [:slices home-c])
        problems (starter/problems-with-start galaxy-map home-c)
        valid? (empty? problems)]
    (-> (->> slice
             (map (partial core/coordinate->tile galaxy-map))
             (reduce collect {}))
        (update :traits (comp vec sort))
        (update :specialties (comp vec sort))
        (assoc :problems problems
               :valid valid?))))
