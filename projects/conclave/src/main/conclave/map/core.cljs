(ns conclave.map.core
  (:require [conclave.random :as rand]
            [conclave.map.layout :as layout]
            [conclave.tiles.static :refer [green]]
            [conclave.tiles.core :refer [tiles]]))

(defn set-coordinate [map coordinate tile]
  (update map :tiles assoc coordinate tile))

(defn build [layout]
  (let [home-map (->> layout
                      :home-coordinates
                      (reduce #(assoc %1 %2 green) {}))]
    (reduce-kv set-coordinate
               {:layout layout
                :tiles (:fixed-tiles layout)}
               home-map)))

(comment (build layout/eight-player))

(defn populate [map seed tileset]
  (let [free-spaces   (layout/free-spaces (:layout map))
        sampled-tiles (rand/sample tileset (count free-spaces) seed)]
    (update map :tiles merge (zipmap free-spaces sampled-tiles))))

(comment (-> (build layout/eight-player)
             (populate "ABCD" tiles)))



(defn adjacent [map coordinate])