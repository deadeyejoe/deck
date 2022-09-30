(ns conclave.layout.directory
  (:require [conclave.data.layouts :as layout-data]
            [conclave.layout.core :as core]
            [conclave.layout.distance :as distance]
            [conclave.layout.hyperlane :as hyperlane]
            [conclave.layout.slice :as slice]
            [conclave.tiles.core :as tiles]
            [conclave.utils.hex :as hex]
            [clojure.set :as set]
            [medley.core :as medley]))

(defn ->fixed-tile [{:keys [coordinate key] :as _proto-tile}]
  [coordinate (tiles/key->tile key)])

(defn ->hyperlane-tile [{:keys [coordinate] :as proto-tile}]
  [coordinate (tiles/hyperlane-tile proto-tile)])

(defn ->home-tile [{:keys [coordinate key] :as _proto-tile}]
  [coordinate (tiles/blank-home-tile key)])

(defn process-proto-tiles [layout]
  (letfn [(process-tile-list [tiles create-fn]
            (->> tiles
                 (map create-fn)
                 (into {})))]
    (-> layout
        (update :fixed-tiles process-tile-list ->fixed-tile)
        (update :hyperlane-tiles process-tile-list ->hyperlane-tile)
        (update :home-tiles process-tile-list ->home-tile))))

(def memoized-coordinates
  (memoize hex/map-coordinates))

(defn compute-tts-fingerprint [{:keys [radius blank-coordinates home-tiles] :as _layout}]
  (let [coordinate-spiral (drop 1 (memoized-coordinates radius))
        blank-coordinates (into (set blank-coordinates) (keys home-tiles))]
    (->> coordinate-spiral
         (map (fn [c] (if (blank-coordinates c) "0" "1")))
         (apply str))))

(defn bounded-coordinates
  "Coordinates that are part of the map"
  [{:keys [radius blank-coordinates] :as _layout}]
  (set/difference (set (memoized-coordinates radius))
                  blank-coordinates))

(defn active-coordinates
  "Coordinates that are navigable by players"
  [layout]
  (set/difference (bounded-coordinates layout)
                  (core/hyperlane-coordinates layout)))

(defn static-coordinates
  "Active coordinates that aren't subject to balancing"
  [layout]
  (->> ((juxt core/fixed-coordinates
              core/hyperlane-coordinates
              core/home-coordinates) layout)
       (apply set/union)))

(defn free-coordinates
  "Active coordinates that are subject to balancing"
  [layout]
  (set/difference (active-coordinates layout)
                  (static-coordinates layout)))

(defn neighbours
  "A map from coordinates to coordinates immediately beside them on the map. 
   Includes active coordinates only"
  [{:keys [active-coordinates] :as _layout}]
  (reduce (fn [acc coordinate]
            (assoc acc coordinate (->> coordinate
                                       (hex/neighbours)
                                       (filter active-coordinates)
                                       (set))))
          {}
          active-coordinates))

(defn adjacents
  "A map from coordinates to coordinates adjacent to them (e.g. via hyperlane).
   Includes active coordinates only"
  [{:keys [neighbours hyperlane-tiles] :as _layout}]
  (merge-with into
              neighbours
              (hyperlane/hyperlane-adjacency-map hyperlane-tiles)))

(defn add-to-layout [layout key gen-fn]
  (assoc layout key (gen-fn layout)))

(defn enrich-layout [layout]
  (-> layout
      (process-proto-tiles)
      (add-to-layout :tts-fingerprint compute-tts-fingerprint)
      (add-to-layout :bounded-coordinates bounded-coordinates)
      (add-to-layout :active-coordinates active-coordinates)
      (add-to-layout :static-coordinates static-coordinates)
      (add-to-layout :free-coordinates free-coordinates)
      (add-to-layout :neighbours neighbours)
      (add-to-layout :adjacents adjacents)
      (add-to-layout :distances distance/all-distances)
      (add-to-layout :slices slice/slices)))

(def layouts (mapv enrich-layout [layout-data/eight-player
                                  layout-data/eight-player-warp
                                  layout-data/seven-player
                                  layout-data/seven-player-warp
                                  layout-data/six-player
                                  layout-data/five-player-warp
                                  layout-data/four-player
                                  layout-data/three-player]))
(def base-layouts (remove :pok layouts))

(def code->layout (medley/index-by :code layouts))
(def default-layout-code "6p")
(def default-layout (code->layout default-layout-code))

(def tts-fingerprint->layout (medley/index-by :tts-fingerprint layouts))
