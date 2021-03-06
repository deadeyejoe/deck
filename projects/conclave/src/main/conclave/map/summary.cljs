(ns conclave.map.summary
  (:require [conclave.map.core :as core]
            [conclave.map.beta.starter :as starter]))

(defn collect-nilable [result value]
  (if value
    (conj result value)
    result))

(defn collect [result {:keys [total] :as tile}]
  (-> result
      (update :resources + (:resources total))
      (update :optimal-resources + (:optimal-resources total))
      (update :influence + (:influence total))
      (update :optimal-influence + (:optimal-influence total))
      (update :traits    into (:traits total))
      (update :specialties into (:specialties total))
      (update :wormholes collect-nilable (:wormhole tile))
      (update :legendaries + (:legendary total))))

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
        (update :wormholes (comp vec sort set))
        (assoc :problems problems
               :valid valid?))))
