(ns conclave.map.score
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.tiles.score :as tile-score]
            [conclave.utils :refer [transform-values]]
            [conclave.score :as util-score]))


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

(defn compute-stakeable [galaxy-map f]
  (let [stakeable-coordinates (core/select-by-tile galaxy-map tile-score/stake?)]
    (zipmap stakeable-coordinates
            (map f stakeable-coordinates))))

(defn compute-stake [galaxy-map stake-fn]
  (let [hs->coordinate->distance (hs-distances galaxy-map)]
    (fn [stakeable]
      (-> hs->coordinate->distance
          (restrict-to-target stakeable)
          (stake-fn)
          (normalize-stakes)))))

(defn stakes [galaxy-map stake-fn]
  (compute-stakeable galaxy-map (compute-stake galaxy-map stake-fn)))

(defn multiply-key [key tile]
  (partial * (key tile)))

(defn exist-key [key tile]
  (if (key tile)
    identity
    (constantly {})))

(defn tile-share [hs->stake tile]
  {:share/resource (transform-values hs->stake (multiply-key :total/resources tile))
   :share/influence (transform-values hs->stake (multiply-key :total/influence tile))
   :share/tech (if (seq (:total/specialty tile))
                 hs->stake
                 {})
   :share/cultural (transform-values hs->stake (multiply-key :total/cultural tile))
   :share/industrial (transform-values hs->stake (multiply-key :total/industrial tile))
   :share/hazardous (transform-values hs->stake (multiply-key :total/hazardous tile))
   :share/legendary (if (:legendary tile)
                      hs->stake
                      {})})

(defn compute-share [galaxy-map stake-fn]
  (let [hs->coordinate->distance (hs-distances galaxy-map)]
    (fn [stakeable]
      (let [tile (core/coordinate->tile galaxy-map stakeable)]
        (-> hs->coordinate->distance
            (restrict-to-target stakeable)
            stake-fn
            normalize-stakes
            (tile-share tile))))))

(defn shares [galaxy-map stake-fn]
  (->>
   (compute-stakeable galaxy-map (compute-share galaxy-map stake-fn))
   vals
   (apply merge-with (partial merge-with +))))

(defn variances [share-map]
  (transform-values share-map (fn [m] (-> m
                                          vals
                                          util-score/variation))))

(comment
  (def sample-map (-> (core/build layout/eight-player)
                      (core/populate "ABCDE" tile/default-set)))
  (hs-distances sample-map)
  (stakes sample-map continuous-stakes)
  (shares sample-map discrete-stakes)
  (shares sample-map continuous-stakes)
  (variances (shares sample-map continuous-stakes)))
