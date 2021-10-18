(ns conclave.map.score
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.tiles.score :as tile-score]
            [conclave.utils :refer [transform-values]]))


(defn distance-to-other-tiles [galaxy-map start-coordinate]
  (loop [result {}
         [current-visit & rest-visit] [[0 start-coordinate]]]
    (if current-visit
      (let [[distance current-coordinate] current-visit
            previous-distance (get result current-coordinate)]
        (if (or (nil? previous-distance) (< distance previous-distance))
          (let [neighbours (core/adjacent galaxy-map current-coordinate)
                move-cost  (->> current-coordinate
                                (core/coordinate->tile galaxy-map)
                                (tile-score/move-cost))]
            (recur (assoc result current-coordinate distance)
                   (concat rest-visit (map (partial list (+ distance move-cost)) neighbours))))
          (recur result
                 rest-visit)))
      result)))

(defn hs-distances [galaxy-map]
  (let [home-coordinates (-> galaxy-map :layout :home-tiles keys)]
    (reduce (fn [result home] (assoc result home (distance-to-other-tiles galaxy-map home)))
            {}
            home-coordinates)))

(defn inverse-square [n]
  (/ 1.0 (Math/pow n 2)))

(defn normalize-stakes [hs->stake]
  (let [total (->> hs->stake vals (apply +))]
    (transform-values hs->stake #(/ % total))))

(defn restrict-to-target [hs->coordinate->distance target]
  (transform-values hs->coordinate->distance #(get % target)))

(defn continuous-stakes [hs->distance]
  (transform-values hs->distance inverse-square))

(defn closest-hs [hs->distance]
  (let [[min-distance closest-entries] (->> hs->distance
                                            (group-by val)
                                            (apply min-key key))]
    [min-distance (map key closest-entries)]))

(defn discrete-stakes [hs->distance]
  (let [[min-distance closest-hss] (closest-hs hs->distance)]
    (if (< min-distance 3)
      (merge (transform-values hs->distance (constantly 0))
             (select-keys hs->distance closest-hss))
      (continuous-stakes hs->distance))))

(defn stakes [galaxy-map stake-fn]
  (let [stakeable-coordinates (core/select-by-tile galaxy-map tile-score/stake?)
        hs->coordinate->distance (hs-distances galaxy-map)]
    (zipmap stakeable-coordinates
            (map (fn [stakeable]
                   (-> hs->coordinate->distance
                       (restrict-to-target stakeable)
                       (stake-fn)
                       (normalize-stakes)))
                 stakeable-coordinates))))

(comment
  (def sample-map (-> (core/build layout/eight-player)
                      (core/populate "ABCDE" tile/default-set)))
  (hs-distances sample-map)
  (stakes sample-map continuous-stakes)
  ((stakes sample-map discrete-stakes) [-2 2 0])
  (->>
   {:a 1 :b 2 :c 3 :d 2 :e 5 :f 1 :g 2}
   (closest-hs)))

