(ns conclave.map.beta.build
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.stake :as stake]
            [conclave.utils.random :as rand]
            [medley.core :as medley]
            [clojure.set :as set]))

(defn build [layout]
  (-> {:layout layout}
      (core/import-coordinate-map (:fixed-tiles layout))
      (core/import-coordinate-map (:home-tiles layout))))

(defn sample-tiles [seed amount]
  (let [fixed-tile-set (set/union (set tile/wormholes-alpha) (set tile/wormholes-beta))
        sampleable-tiles (remove fixed-tile-set tile/default-set)]
    (->> (rand/sample sampleable-tiles
                      (- amount
                         (count fixed-tile-set))
                      seed)
         (into fixed-tile-set)
         (seq)
         (rand/seed-shuffle seed))))

(defn populate [galaxy-map seed]
  (let [free-spaces (core/free-spaces galaxy-map)
        sampled-tiles (sample-tiles seed (count free-spaces))]
    (core/import-coordinate-map galaxy-map (zipmap free-spaces sampled-tiles))))

(defn slice-for [stakes home-system-coordinate]
  (->> stakes
       (medley/filter-vals #(= 1 (get % home-system-coordinate)))
       (keys)))

(defn slices [galaxy-map stakes]
  (let [home-system-coordinates (core/home-coordinates galaxy-map)]
    (->> home-system-coordinates
         (map (juxt identity (partial slice-for stakes)))
         (into {}))))

(defn enrich [galaxy-map]
  (let [distances (distance/coordinate->distances galaxy-map)
        stakes (stake/stakes-for-map galaxy-map distances)
        slices (slices galaxy-map stakes)]
    (assoc galaxy-map
           :distances distances
           :stakes stakes
           :slices slices)))

(defn create [seed]
  (-> (build layout/eight-player)
      (populate seed)
      (enrich)))

(comment
  (create "ABCDE"))
