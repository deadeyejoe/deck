(ns conclave.map.layout
  (:require [conclave.tiles.core :as tiles]
            [conclave.utils.hex :as hex]
            [clojure.spec.alpha :as s]))

(s/def ::name (s/and string?
                     not-empty))
(s/def ::radius pos-int?)

(s/def ::coordinate (s/coll-of int? :kind vector? :count 3))
(s/def ::tile-map (s/map-of ::coordinate ::tiles/instance))

(s/def ::fixed-tiles ::tile-map)
(s/def ::home-tiles ::tile-map)
(s/def ::instance (s/keys :req-un [::name
                                   ::radius
                                   ::fixed-tiles
                                   ::home-tiles]))

(def eight-player {:name "8 Player"
                   :radius 4
                   :fixed-tiles {[0 0 0] tiles/mecatol}
                   :home-tiles {[0   4 -4] (tiles/blank-home-tile :p1)
                                [3   1 -4] (tiles/blank-home-tile :p2)
                                [4  -2 -2] (tiles/blank-home-tile :p3)
                                [3  -4  1] (tiles/blank-home-tile :p4)
                                [0  -4  4] (tiles/blank-home-tile :p5)
                                [-3 -1  4] (tiles/blank-home-tile :p6)
                                [-4  2  2] (tiles/blank-home-tile :p7)
                                [-3  4 -1] (tiles/blank-home-tile :p8)}})

(defn fixed-set [layout]
  (->> layout
       ((juxt (comp keys :fixed-tiles)
              (comp keys :home-tiles)))
       (apply concat)
       (into #{})))

(comment (fixed-set eight-player))

(defn free-spaces [layout]
  (let [all-coordinates (-> layout :radius hex/map-coordinates)
        fixed-set (fixed-set layout)]
    (remove fixed-set all-coordinates)))

(defn player-keys [layout]
  (->> (get layout :home-tiles)
       vals
       (map :key)
       sort))

(comment
  (count (free-spaces eight-player)))

(defn rings [{:keys [radius] :as layout}]
  (let [free-spaces (set (free-spaces layout))]
    (->> (range (inc radius))
         (map (fn [r] (->> r
                           (hex/ring-coordinates)
                           (filter free-spaces))))
         (filter seq))))

(comment
  (map count (rings eight-player)))
