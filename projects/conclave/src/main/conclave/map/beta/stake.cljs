(ns conclave.map.beta.stake
  (:require [conclave.map.core :as core] [conclave.map.layout :as layout]
            [conclave.map.beta.distance :as distance]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as util-score]
            [taoensso.tufte :as tufte :refer-macros (defnp)]
            [medley.core :as medley]
            [clojure.spec.alpha :as s]))

(defn closest-homesystems [hs->distance]
  (let [[min-distance closest-entries] (->> hs->distance
                                            (group-by val)
                                            (apply min-key key))]
    [min-distance (map key closest-entries)]))

(defnp discrete-stakes [hs->distance]
  (let [[_min-distance closest-hss] (closest-homesystems hs->distance)]
    (select-keys hs->distance closest-hss)))

(defn inverse-square [n]
  (if (= n 0)
    0
    (/ 1.0 (Math/pow n 1))))

(defnp continuous-stakes [hs->distance]
  (medley/map-vals inverse-square hs->distance))

(defnp normalize-stakes [hs->stake]
  (let [total (->> hs->stake vals (apply +))]
    (medley/map-vals #(/ % total) hs->stake)))

(defn stake-for-system [coordinate->coordinate->distance stakeholders coordinate]
  (when-not (some #{coordinate} stakeholders)
    (-> coordinate->coordinate->distance
        (get coordinate)
        (select-keys stakeholders)
        (discrete-stakes)
        (normalize-stakes))))

(defn stakes-for-map [galaxy-map coordinate->coordinate->distance]
  (let [home-system-coordinates (core/home-coordinates galaxy-map)
        free-spaces (core/free-spaces galaxy-map)]
    (zipmap free-spaces
            (map (partial stake-for-system coordinate->coordinate->distance home-system-coordinates) free-spaces))))

(comment
  (let [map (-> (core/build layout/eight-player)
                (core/populate "ABCDE"))
        distances (distance/coordinate->distances map)]
    (stakes-for-map map distances)))
