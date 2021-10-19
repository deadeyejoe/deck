(ns conclave.map.summary
  (:require [clojure.set :as set]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.map.score :as score]
            [conclave.map.constraints :as constraints]))

(defn collect-vector [result vector]
  (into (or result []) vector))

(defn collect [result tile]
  (-> result
      (update :total/resources + (:total/resources tile))
      (update :total/influence + (:total/influence tile))
      (update :total/traits    collect-vector (:total/traits tile))
      (update :total/specialty collect-vector (:total/specialty tile))))

(defn player-summary [galaxy-map player-key]
  (let [home-c (core/tile->coordinate galaxy-map player-key)
        neighbours (core/adjacent galaxy-map home-c)]
    (-> (->> neighbours
             (map (partial core/coordinate->tile galaxy-map))
             (reduce collect {}))
        (update :total/traits sort)
        (update :total/specialty sort))))