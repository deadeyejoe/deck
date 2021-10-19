(ns conclave.map.core
  (:require [clojure.math.combinatorics :as comb]
            [conclave.random :as rand]
            [conclave.tiles.core :as tile]
            [conclave.map.layout :as layout]
            [conclave.hex :as hex]))

(defn set-coordinate [galaxy-map coordinate tile]
  (-> galaxy-map
      (assoc-in [:tiles coordinate] tile)
      (assoc-in [:tiles-reverse (:key tile)] coordinate)))

(defn import-coordinate-map [galaxy-map coordinates]
  (reduce-kv set-coordinate
             galaxy-map
             coordinates))

(defn build [layout]
  (-> {:layout layout}
      (import-coordinate-map (:fixed-tiles layout))
      (import-coordinate-map (:home-tiles layout))))

(comment (build layout/eight-player))

(defn free-spaces [galaxy-map]
  (layout/free-spaces (:layout galaxy-map)))

(defn populate [galaxy-map seed tileset]
  (let [free-spaces   (free-spaces galaxy-map)
        sampled-tiles (rand/sample tileset (count free-spaces) seed)]
    (import-coordinate-map galaxy-map (zipmap free-spaces sampled-tiles))))

(defn coordinate->tile [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate]))

(defn tile->coordinate [galaxy-map tile]
  (get-in galaxy-map [:tiles-reverse (or (:key tile) tile)]))

(defn adjacent-wormholes [galaxy-map coordinate]
  (->> coordinate
       (coordinate->tile galaxy-map)
       (tile/matching-wormholes)
       (map (partial tile->coordinate galaxy-map))
       (remove #(or (nil? %) (= coordinate %)))))

(defn adjacent [galaxy-map coordinate]
  (let [neighbours (hex/neighbours coordinate)
        wormhole-neighbours (adjacent-wormholes galaxy-map coordinate)]
    (distinct (concat
               (filter (partial coordinate->tile galaxy-map) neighbours) ;; remove out-of-bounds
               wormhole-neighbours))))

(defn select-by-tile [galaxy-map f]
  (->> galaxy-map
       :tiles
       (filter (comp f second))
       (map first)))

(defn swap-tiles [galaxy-map c1 c2]
  (let [t1 (coordinate->tile galaxy-map c1)
        t2 (coordinate->tile galaxy-map c2)]
    (-> galaxy-map
        (set-coordinate c1 t2)
        (set-coordinate c2 t1))))

(defn generate-swap-list [galaxy-map seed]
  (rand/seed-shuffle seed
                     (-> (free-spaces galaxy-map)
                         (comb/combinations 2))))



