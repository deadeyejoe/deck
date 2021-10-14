(ns conclave.map.layout
  (:require [conclave.tiles.core :as tiles]
            [conclave.hex :as hex]))

(def eight-player {:name "8 Player"
                   :radius 4
                   :fixed-tiles {[0 0 0] tiles/mecatol}
                   :home-coordinates [[0   4 -4]
                                      [3   1 -4]
                                      [4  -2 -2]
                                      [3  -4  1]
                                      [0  -4  4]
                                      [-3 -1  4]
                                      [-4  2  2]
                                      [-3  4 -1]]})

(defn fixed-set [layout]
  (->> layout
       ((juxt (comp keys :fixed-tiles)
              :home-coordinates))
       (apply concat)
       (into #{})))

(comment (fixed-set eight-player))

(defn free-spaces [layout]
  (let [all-coordinates (-> layout :radius hex/map-coordinates)
        fixed-set (fixed-set layout)]
    (remove fixed-set all-coordinates)))

(comment
  (count (free-spaces eight-player)))