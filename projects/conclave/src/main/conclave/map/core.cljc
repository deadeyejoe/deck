(ns conclave.map.core
  (:require [conclave.layout.core :as layout]
            [conclave.tiles.core :as tile]
            [conclave.specs :as shared-specs]
            [conclave.utils.hex :as hex]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))


(s/def ::tiles (s/map-of ::shared-specs/coordinate ::tile/instance))
(s/def ::tiles-reverse (s/map-of ::tile/key ::shared-specs/coordinate))

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

(defn new [{:keys [home-tiles fixed-tiles hyperlane-tiles] :as layout}]
  (-> {:distances (:distances layout)
       :tiles {}
       :tiles-reverse {}}
      (import-coordinate-map home-tiles)
      (import-coordinate-map fixed-tiles)
      (import-coordinate-map hyperlane-tiles)))

(defn coordinates [galaxy-map]
  (-> galaxy-map :tiles keys))

(defn coordinates-by-tile [tile-pred {:keys [tiles] :as _galaxy-map}]
  (keys (medley/filter-vals tile-pred tiles)))

(defn coordinate->tile [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate]))

(defn coordinate->tile-key [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate :key]))

(defn tile->coordinate [galaxy-map tile]
  (get-in galaxy-map [:tiles-reverse (or (:key tile) tile)]))

(defn distance-to-origin [galaxy-map coordinate]
  (get-in galaxy-map [:distances hex/origin coordinate]))

(defn- adjacent-wormholes [galaxy-map coordinate]
  (some->> (coordinate->tile galaxy-map coordinate)
           (tile/matching-wormholes)
           (map (partial tile->coordinate galaxy-map))
           (remove #{nil coordinate})))

(defn adjacent [layout galaxy-map coordinate]
  (into (layout/adjacents layout coordinate)
        (adjacent-wormholes galaxy-map coordinate)))

(defn radius [galaxy-map]
  (->> galaxy-map
       (coordinates)
       (map (partial hex/ring))
       (apply max)))

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
