(ns conclave.map.constraints
  (:require [conclave.map.core :as core]
            [conclave.hex :as hex]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [clojure.math.combinatorics :as comb]))

(defn count-adjacent [coordinates]
  (let [pairs (comb/combinations coordinates 2)]
    (count (filter (partial apply hex/neighbours?) pairs))))

(defn count-adjacent-anomalies [galaxy-map]
  (->> tile/anomalies
       (map (partial core/tile->coordinate galaxy-map))
       (remove nil?)
       (count-adjacent)))

(defn adjacent-anomalies? [galaxy-map]
  (< 0 (count-adjacent-anomalies galaxy-map)))

(defn count-adjacent-wormholes
  ([galaxy-map] (+ (count-adjacent-wormholes galaxy-map :alpha)
                   (count-adjacent-wormholes galaxy-map :beta)))
  ([galaxy-map type]
   (->> (case type
          :alpha tile/wormholes-alpha
          :beta tile/wormholes-beta)
        (map (partial core/tile->coordinate galaxy-map))
        (remove nil?)
        (count-adjacent))))

(defn adjacent-wormholes? [galaxy-map]
  (< 0 (count-adjacent-wormholes galaxy-map)))

(defn zero-adjacent-planets? [galaxy-map coord]
  (->> coord
       (core/adjacent galaxy-map)
       (map (partial core/coordinate->tile galaxy-map))
       (not-any? tile/has-planets?)))

(defn count-zero-starts [galaxy-map]
  (let [home-tiles (core/select-by-tile galaxy-map tile/home?)]
    (->> home-tiles
         (filter (partial zero-adjacent-planets? galaxy-map))
         count)))

(defn zero-starts? [galaxy-map]
  (->> galaxy-map
       count-zero-starts
       (< 0)))

(comment
  (def sample-map (-> (core/build layout/eight-player)
                      (core/populate "ABCDE" tile/default-set)))
  (count-adjacent-anomalies sample-map)
  (adjacent-wormholes? sample-map)
  (-> sample-map
      (core/swap-tiles [-1 3 -2] [0 2 -2])
      (adjacent-wormholes?))
  (zero-starts? sample-map)
  (-> sample-map
      (core/swap-tiles [1 3 -4] [2 2 -4])
      (zero-starts?)))