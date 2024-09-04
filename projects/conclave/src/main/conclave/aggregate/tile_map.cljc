(ns conclave.aggregate.tile-map
  "Just coordinates and tiles. Assumes - but doesn't verify - tiles are unique"
  (:require [clojure.set :as set]
            [clojure.spec.alpha :as s]
            [conclave.specs :as shared-specs]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [conclave.utils.vector :as vect]
            [medley.core :as medley])
  (:refer-clojure :exclude [filter]))

(s/def ::coordinate-map (s/map-of ::shared-specs/coordinate ::tile/instance))
(s/def ::key-map (s/map-of ::tile/key ::shared-specs/coordinate))
(s/def ::instance (s/keys :req-un [::coordinate-map
                                   ::key-map]))

(defn coordinates [tile-map]
  (-> tile-map :coordinate-map keys))

(defn tile-keys [tile-map]
  (-> tile-map :key-map keys))

(defn coordinate->tile [tile-map coordinate]
  (get-in tile-map [:tiles coordinate]))

(defn coordinate->tile-key [tile-map coordinate]
  (get-in tile-map [:tiles coordinate :key]))

(defn tile->coordinate [tile-map tile]
  (get-in tile-map [:tiles-reverse (or (:key tile) tile)]))

(defn set-coordinate [tile-map coordinate tile]
  (-> tile-map
      (assoc-in [:coordinate-map coordinate] tile)
      (assoc-in [:key-map (:key tile)] coordinate)))

(defn swap-tiles [tile-map c1 c2]
  (let [t1 (coordinate->tile tile-map c1)
        t2 (coordinate->tile tile-map c2)]
    (-> tile-map
        (set-coordinate c1 t2)
        (set-coordinate c2 t1))))

(defn add-coordinate-map [tile-map coordinate-map]
  (reduce-kv set-coordinate
             tile-map
             coordinate-map))

(defn combine [tile-map {other-coordinate-map :coordinate-map :as _other}]
  (add-coordinate-map tile-map other-coordinate-map))

(defn- recalculate-key-map [{:keys [coordinate-map] :as tile-map}]
  (assoc tile-map :key-map (->> coordinate-map
                                (medley/map-vals tile/tile-key)
                                (set/map-invert))))

(defn- update-coordinate-map [f tile-map]
  (-> tile-map
      (update :coordinate-map f)
      (recalculate-key-map)))

(defn filter [tile-pred tile-map]
  (update-coordinate-map (partial medley/filter-vals tile-pred) tile-map))

(defn rotate-clockwise
  "Accepts a number and rotates the tile map clockwise around the origin that many times"
  [rotation-factor tile-map]
  (let [rotate-fn #(hex/rotate-clockwise % rotation-factor)]
    (update-coordinate-map (partial medley/map-keys rotate-fn) tile-map)))

(defn translate
  "Accepts a coordinate and treats it as a vector from the origin to translate the coordinates"
  [coordinate tile-map]
  (let [translate-fn (partial vect/add coordinate)]
    (update-coordinate-map (partial medley/map-keys translate-fn) tile-map)))
