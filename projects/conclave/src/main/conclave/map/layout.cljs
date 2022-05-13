(ns conclave.map.layout
  (:require [conclave.data.layouts :as layout-data]
            [conclave.tiles.core :as tiles]
            [conclave.utils.hex :as hex]
            [conclave.utils.random :as random]
            [clojure.math.combinatorics :as comb]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(s/def ::name (s/and string?
                     not-empty))
(s/def ::code (s/and string?
                     not-empty))
(s/def ::radius pos-int?)

(s/def ::coordinate (s/coll-of int? :kind vector? :count 3))
(s/def ::tile-map (s/map-of ::coordinate ::tiles/instance))

(s/def ::fixed-tiles ::tile-map)
(s/def ::hyperlane-tiles ::tile-map)
(s/def ::home-tiles ::tile-map)

(s/def ::type-counts (s/map-of ::tiles/type pos-int?))
(s/def ::wormhole-pairs pos-int?)

(s/def ::blank-tiles (s/coll-of ::coordinate))
(s/def ::instance (s/keys :req-un [::name
                                   ::radius
                                   ::fixed-tiles
                                   ::home-tiles
                                   ::type-counts]
                          :opt-un [::code
                                   ::blank-tiles
                                   ::wormhole-pairs]))

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

(defn compute-tts-fingerprint [{:keys [radius blank-tiles home-tiles] :as layout}]
  (let [coordinate-spiral (drop 1 (hex/map-coordinates radius))
        blank-coordinates (into (set blank-tiles) (keys home-tiles))]
    (->> coordinate-spiral
         (map (fn [c] (if (blank-coordinates c) "0" "1")))
         (apply str))))

(defn enrich-layout [layout]
  (let [processed-layout (process-proto-tiles layout)]
    (assoc processed-layout
           :tts-fingerprint (compute-tts-fingerprint processed-layout))))

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

(defn fixed-set [layout]
  (->> layout
       ((juxt (comp keys :fixed-tiles)
              (comp keys :home-tiles)
              (comp keys :hyperlane-tiles)
              :blank-tiles))
       (apply concat)
       (into #{})))

(comment (fixed-set default-layout))

(defn free-spaces [{:keys [radius] :as layout}]
  (let [all-coordinates (hex/map-coordinates radius)
        fixed-set (fixed-set layout)]
    (remove fixed-set all-coordinates)))

(comment
  (count (free-spaces default-layout)))

(defn player-keys [layout]
  (->> (get layout :home-tiles)
       vals
       (map :key)
       sort))

(defn generate-tileset
  ([seed] (generate-tileset seed default-layout))
  ([seed {{:keys [red blue]} :type-counts :as _layout}]
   (let [non-wormhole-reds (->> tiles/reds (remove :wormhole) (filter tiles/default?))
         non-wormhole-blues (->> tiles/blues (remove :wormhole) (filter tiles/default?))]
     (->> (concat tiles/wormholes-alpha
                  tiles/wormholes-beta
                  (random/sample non-wormhole-reds (- red 3) seed)
                  (random/sample non-wormhole-blues (- blue 3) seed))))))

(defn generate-coordinate-map
  ([seed] (generate-coordinate-map seed default-layout))
  ([seed layout]
   (merge (zipmap (random/seed-shuffle seed (free-spaces layout))
                  (random/seed-shuffle seed (generate-tileset seed layout)))
          (:fixed-tiles layout)
          (:home-tiles layout)
          (:hyperlane-tiles layout))))

(comment
  (count (generate-tileset "ABCDE"))
  (generate-coordinate-map "ABCDE"))

(defn generate-swap-list
  ([seed] (generate-swap-list seed default-layout))
  ([seed layout]
   (random/seed-shuffle seed
                        (-> (free-spaces layout)
                            (comb/combinations 2)))))
