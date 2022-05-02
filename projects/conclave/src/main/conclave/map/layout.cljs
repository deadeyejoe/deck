(ns conclave.map.layout
  (:require [conclave.tiles.core :as tiles]
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

(defn ->hyperlane-map [& hyperlane-tiles]
  (medley/index-by :coordinate hyperlane-tiles))

(def eight-player {:name "8 Player"
                   :code "8p"
                   :radius 4
                   :type-counts {:blue (+ 2 (* 8 4))
                                 :red  (+ 2 (* 8 2))}
                   :fixed-tiles {[0 0 0] tiles/mecatol}
                   :home-tiles {[0   4 -4] (tiles/blank-home-tile :p1)
                                [3   1 -4] (tiles/blank-home-tile :p2)
                                [4  -2 -2] (tiles/blank-home-tile :p3)
                                [3  -4  1] (tiles/blank-home-tile :p4)
                                [0  -4  4] (tiles/blank-home-tile :p5)
                                [-3 -1  4] (tiles/blank-home-tile :p6)
                                [-4  2  2] (tiles/blank-home-tile :p7)
                                [-3  4 -1] (tiles/blank-home-tile :p8)}})

(def seven-player {:name "7 Player"
                   :code "7p"
                   :radius 4
                   :type-counts {:blue (+ 3 (* 7 4))
                                 :red (+ 2 (* 7 2))}
                   :fixed-tiles {[0 0 0]   tiles/mecatol}
                   :hyperlane-tiles (->hyperlane-map (tiles/hyperlane-tile :86A [0 -2 2]  0)
                                                     (tiles/hyperlane-tile :88A [1 -3 2]  0)
                                                     (tiles/hyperlane-tile :83A [1 -4 3]  0)
                                                     (tiles/hyperlane-tile :85A [0 -4 4]  0)
                                                     (tiles/hyperlane-tile :84A [-1 -3 4] 0)
                                                     (tiles/hyperlane-tile :87A [-1 -2 3] 0))
                   :home-tiles {[0   4 -4] (tiles/blank-home-tile :p1)
                                [3   1 -4] (tiles/blank-home-tile :p2)
                                [4  -2 -2] (tiles/blank-home-tile :p3)
                                [3  -4  1] (tiles/blank-home-tile :p4)
                                [-3 -1  4] (tiles/blank-home-tile :p5)
                                [-4  2  2] (tiles/blank-home-tile :p6)
                                [-3  4 -1] (tiles/blank-home-tile :p7)}})

(def seven-player-warp {:name "7 Player Warp"
                        :code "7pw"
                        :radius 4
                        :type-counts {:blue 21
                                      :red 14}
                        :fixed-tiles {[0 0 0]   tiles/mecatol}
                        :blank-tiles [[2 2 -4] [3 1 -4] [4 0 -4] [4 -1 -3] [4 -2 -2]
                                      [4 -3 -1] [4 -4 0] [3 -4 1] [2 -4 2] [-4 0 4]
                                      [-4 1 3] [-4 4 0]]
                        :hyperlane-tiles (->hyperlane-map (tiles/hyperlane-tile :88B [1 2 -3] 0)
                                                          (tiles/hyperlane-tile :85B [0 1 -1] 0)
                                                          (tiles/hyperlane-tile :83B [-3 2 1] 2)
                                                          (tiles/hyperlane-tile :90B [-1 0 1] 0)
                                                          (tiles/hyperlane-tile :84B [0 -1 1] 0)
                                                          (tiles/hyperlane-tile :86B [1 -3 2] 0))
                        :home-tiles {[0 4 -4] (tiles/blank-home-tile :p1)
                                     [3 0 -3] (tiles/blank-home-tile :p2)
                                     [3 -3 0] (tiles/blank-home-tile :p3)
                                     [0 -4 4] (tiles/blank-home-tile :p4)
                                     [-3 -1 4] (tiles/blank-home-tile :p5)
                                     [-4 2 2] (tiles/blank-home-tile :p6)
                                     [-3 4 -1] (tiles/blank-home-tile :p7)}})

(def layouts [eight-player seven-player seven-player-warp])
(def default-layout seven-player-warp)
(def code->layout (medley/index-by :code layouts))

(defn fixed-set [layout]
  (->> layout
       ((juxt (comp keys :fixed-tiles)
              (comp keys :home-tiles)
              (comp keys :hyperlane-tiles)
              :blank-tiles))
       (apply concat)
       (into #{})))

(comment (fixed-set eight-player))

(defn free-spaces [{:keys [radius] :as layout}]
  (let [all-coordinates (hex/map-coordinates radius)
        fixed-set (fixed-set layout)]
    (remove fixed-set all-coordinates)))

(comment
  (count (free-spaces eight-player)))

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
