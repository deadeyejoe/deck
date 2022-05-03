(ns conclave.map.core
  (:require [conclave.tiles.core :as tile]
            [conclave.map.layout :as layout]
            [conclave.utils.hex :as hex]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))


(s/def ::tiles (s/map-of ::layout/coordinate ::layout/tile))
(s/def ::tiles-reverse (s/map-of ::tile/key ::layout/coordinate))

(s/def ::galaxy (s/keys :req-un [::tiles
                                 ::tiles-reverse]))

(defn set-coordinate [galaxy-map coordinate tile]
  (-> galaxy-map
      (assoc-in [:tiles coordinate] tile)
      (assoc-in [:tiles-reverse (:key tile)] coordinate)))

(defn import-coordinate-map [galaxy-map coordinates]
  (reduce-kv set-coordinate
             galaxy-map
             coordinates))

(defn coordinates [galaxy-map]
  (-> galaxy-map :tiles keys))

(defn coordinates-by-tile [tile-pred {:keys [tiles] :as galaxy-map}]
  (keys (medley/filter-vals tile-pred tiles)))

(def home-coordinates (partial coordinates-by-tile tile/home?))
(def stakeable-coordinates (partial coordinates-by-tile tile/stakeable?))

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

(defn neighbour-set [galaxy-map coordinate]
  (set (neighbouring galaxy-map coordinate)))

(defn neighbour-map [galaxy-map coordinate]
  (let [neighbour-coordinates (neighbouring galaxy-map coordinate)]
    (zipmap neighbour-coordinates
            (map (partial coordinate->tile galaxy-map) neighbour-coordinates))))

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

(defn player-keys [{:keys [tiles] :as galaxy-map}]
  (->> tiles
       (vals)
       (filter tile/home?)
       (map :key)
       (sort)))

(defn swap-tiles [galaxy-map c1 c2]
  (let [t1 (coordinate->tile galaxy-map c1)
        t2 (coordinate->tile galaxy-map c2)]
    (-> galaxy-map
        (set-coordinate c1 t2)
        (set-coordinate c2 t1))))
