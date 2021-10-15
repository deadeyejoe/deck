(ns conclave.map.core
  (:require [conclave.random :as rand]
            [conclave.map.layout :as layout]))

(defn set-coordinate [map coordinate tile]
  (-> map
      (assoc-in [:tiles coordinate] tile)
      (assoc-in [:tiles-reverse (:key tile)] coordinate)))

(defn import-coordinate-map [map coordinates]
  (reduce-kv set-coordinate
             map
             coordinates))

(defn build [layout]
  (-> {:layout layout}
      (import-coordinate-map (:fixed-tiles layout))
      (import-coordinate-map (:home-tiles layout))))

(comment (build layout/eight-player))

(defn populate [map seed tileset]
  (let [free-spaces   (layout/free-spaces (:layout map))
        sampled-tiles (rand/sample tileset (count free-spaces) seed)]
    (import-coordinate-map map (zipmap free-spaces sampled-tiles))))

(defn lookup [map coordinate]
  (get-in map [:tiles coordinate]))

