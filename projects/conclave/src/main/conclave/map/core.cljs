(ns conclave.map.core
  (:require [conclave.random :as rand]
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

(defn populate [galaxy-map seed tileset]
  (let [free-spaces   (layout/free-spaces (:layout galaxy-map))
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

(defn walk [galaxy-map start-coordinate f init]
  (loop [state init
         [current-visit & rest-visit] (adjacent galaxy-map start-coordinate)
         visited #{start-coordinate}]
    (cond
      (nil? current-visit) state
      (visited current-visit) (recur state rest-visit visited)
      :else (let [new-state (f state current-visit (coordinate->tile galaxy-map current-visit))
                  new-visited (conj visited current-visit)
                  unvisited-neighbours (->> current-visit
                                            (adjacent galaxy-map)
                                            (remove new-visited))]
              (recur new-state
                     (concat rest-visit unvisited-neighbours)
                     new-visited)))))

