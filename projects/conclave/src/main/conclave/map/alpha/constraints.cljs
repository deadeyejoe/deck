(ns conclave.map.alpha.constraints
  (:require [conclave.map.core :as core]
            [conclave.utils.hex :as hex]
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
        (map :key)
        (map (partial core/tile->coordinate galaxy-map))
        (remove nil?)
        (count-adjacent))))

(defn adjacent-wormholes? [galaxy-map]
  (< 0 (count-adjacent-wormholes galaxy-map)))
