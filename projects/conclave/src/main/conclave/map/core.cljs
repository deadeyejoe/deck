(ns conclave.map.core
  (:require [conclave.utils.random :as rand]
            [conclave.tiles.core :as tile]
            [conclave.map.layout :as layout]
            [conclave.utils.hex :as hex]
            [clojure.math.combinatorics :as comb]
            [clojure.spec.alpha :as s]))

(s/def ::layout ::layout/instance)
(s/def ::tiles (s/map-of ::layout/coordinate ::layout/tile))
(s/def ::tiles-reverse (s/map-of ::tile/key ::layout/coordinate))

(s/def ::galaxy (s/keys :req-un [::layout
                                 ::tiles
                                 ::tiles-reverse]))

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

(defn sample-tiles [seed amount]
  (let [fixed-tiles (concat tile/wormholes-alpha tile/wormholes-beta)
        sampleable-tiles (remove (set fixed-tiles) tile/default-set)]
    (->> (rand/sample sampleable-tiles
                      (- amount
                         (count fixed-tiles))
                      seed)
         (into fixed-tiles)
         (rand/seed-shuffle seed))))

(defn populate [galaxy-map seed]
  (let [free-spaces (free-spaces galaxy-map)
        sampled-tiles (sample-tiles seed (count free-spaces))]
    (import-coordinate-map galaxy-map (zipmap free-spaces sampled-tiles))))

(defn coordinates [galaxy-map]
  (-> galaxy-map :tiles keys))

(defn home-coordinates [galaxy-map]
  (-> galaxy-map :layout :home-tiles keys))

(defn coordinate->tile [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate]))

(defn coordinate->tile-key [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate :key]))

(defn tile->coordinate [galaxy-map tile]
  (get-in galaxy-map [:tiles-reverse (or (:key tile) tile)]))

(defn origin-distance-map [galaxy-map]
  (-> galaxy-map :distances (get hex/origin)))

(defn distance-to-origin [galaxy-map coordinate]
  (get-in galaxy-map [:distances hex/origin coordinate]))

(defn in-bounds? [galaxy-map]
  (fn [coordinate]
    (contains? (:tiles galaxy-map) coordinate)))

(defn neighbouring [galaxy-map coordinate]
  (filter (in-bounds? galaxy-map) (hex/neighbours coordinate)))

;; TODO retire these notions of 'adjacent'

(defn adjacent-wormholes [galaxy-map coordinate]
  (->> coordinate
       (coordinate->tile galaxy-map)
       (tile/matching-wormholes)
       (map :key)
       (map (partial tile->coordinate galaxy-map))
       (remove #(or (nil? %) (= coordinate %)))))

(defn adjacent [galaxy-map coordinate]
  (let [neighbours (hex/neighbours coordinate)
        wormhole-neighbours (adjacent-wormholes galaxy-map coordinate)]
    (distinct (concat
               (filter (in-bounds? galaxy-map) neighbours) ;; remove out-of-bounds
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

(def sample-map (-> (build layout/eight-player)
                    (populate "ABCDE")))
