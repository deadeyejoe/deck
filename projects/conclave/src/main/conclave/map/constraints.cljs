(ns conclave.map.constraints
  (:require [clojure.set :as set]
            [conclave.map.core :as core]
            [conclave.hex :as hex]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]))

(defn count-adjacent [coordinates]
  (let [coordinate-set (into #{} coordinates)]
    (->> coordinate-set
         (map (comp (partial into #{})
                    hex/neighbours))
         (remove (fn [s]
                   (empty? (set/intersection s coordinate-set))))
         count)))

(defn count-adjacent-anomalies [galaxy-map]
  (-> galaxy-map
      (core/select-by-tile tile/anomaly?)
      (count-adjacent)))

(defn adjacent-anomalies? [galaxy-map]
  (< 0 (count-adjacent-anomalies galaxy-map)))

(defn count-adjacent-wormholes [galaxy-map type]
  (-> galaxy-map
      (core/select-by-tile (case type
                             :alpha tile/alpha-wormhole?
                             :beta tile/beta-wormhole?))
      count-adjacent))

(defn adjacent-wormholes? [galaxy-map]
  (or
   (< 0 (count-adjacent-wormholes galaxy-map :alpha))
   (< 0 (count-adjacent-wormholes galaxy-map :beta))))

(defn zero-adjacent-planets? [galaxy-map coords]
  (->> coords
       (map (partial core/coordinate->tile galaxy-map))
       (not-any? tile/has-planets?)))

(defn count-zero-starts [galaxy-map]
  (let [home-tiles (core/select-by-tile galaxy-map tile/home?)]
    (->> home-tiles
         (map (partial core/adjacent galaxy-map))
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