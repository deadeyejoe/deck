(ns conclave.layout.core
  (:require [conclave.data.layouts :as layout-data]
            [conclave.tiles.core :as tiles]
            [conclave.utils.hex :as hex]
            [clojure.set :as set]
            [medley.core :as medley]))

(defn ->fixed-tile [{:keys [coordinate key] :as proto-tile}]
  [coordinate (tiles/key->tile key)])

(defn ->hyperlane-tile [{:keys [coordinate key] :as proto-tile}]
  [coordinate (tiles/hyperlane-tile proto-tile)])

(defn ->home-tile [{:keys [coordinate key] :as proto-tile}]
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

(defn compute-tts-fingerprint [{:keys [radius blank-coordinates home-tiles] :as layout}]
  (let [coordinate-spiral (drop 1 (hex/map-coordinates radius))
        blank-coordinates (into (set blank-coordinates) (keys home-tiles))]
    (->> coordinate-spiral
         (map (fn [c] (if (blank-coordinates c) "0" "1")))
         (apply str))))

(defn assoc-tts-fingerprint [layout]
  (assoc layout :tts-fingerprint (compute-tts-fingerprint layout)))

(defn enrich-layout [layout]
  (-> layout
      (process-proto-tiles)
      (assoc-tts-fingerprint)))

(def layouts (mapv enrich-layout [layout-data/eight-player
                                  layout-data/eight-player-warp
                                  layout-data/seven-player
                                  layout-data/seven-player-warp
                                  layout-data/six-player
                                  layout-data/five-player-warp
                                  layout-data/four-player
                                  layout-data/three-player]))
(def default-layout (first layouts))
(def code->layout (medley/index-by :code layouts))
(def tts-fingerprint->layout (medley/index-by :tts-fingerprint layouts))

(def fixed-coordinates (comp set keys :fixed-tiles))
(def hyperlane-coordinates (comp set keys :hyperlane-tiles))
(def home-coordinates (comp set keys :home-tiles))

(defn bounded-coordinates
  "Coordinates that are part of the map"
  [{:keys [radius blank-coordinates] :as _layout}]
  (set/difference (set (hex/map-coordinates radius))
                  blank-coordinates))

(defn active-coordinates
  "Coordinates that are navigable by players"
  [layout]
  (set/difference (bounded-coordinates layout)
                  (hyperlane-coordinates layout)))

(defn static-coordinates
  "Active coordinates that aren't subject to balancing"
  [layout]
  (->> ((juxt fixed-coordinates
              hyperlane-coordinates
              home-coordinates) layout)
       (apply set/union)))

(defn free-coordinates
  "Active coordinates that are subject to balancing"
  [layout]
  (set/difference (active-coordinates layout)
                  (static-coordinates layout)))

(comment
  (count (fixed-coordinates default-layout))
  (count (hyperlane-coordinates default-layout))
  (count (home-coordinates default-layout))
  (count (bounded-coordinates default-layout))
  (count (active-coordinates default-layout))
  (count (static-coordinates default-layout))
  (count (free-coordinates default-layout)))

(defn player-keys [layout]
  (->> (get layout :home-tiles)
       vals
       (map :key)
       sort))
