(ns conclave.map.beta.build
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.stake :as stake]
            [conclave.utils.random :as rand]))

(defn build [layout]
  (-> {:layout layout}
      (core/import-coordinate-map (:fixed-tiles layout))
      (core/import-coordinate-map (:home-tiles layout))))

(defn sample-tiles [seed amount]
  (let [fixed-tiles (concat tile/wormholes-alpha tile/wormholes-beta)
        sampleable-tiles (remove (set fixed-tiles) tile/default-set)]
    (->> (rand/sample sampleable-tiles
                      (- amount
                         (count fixed-tiles))
                      seed)
         (into fixed-tiles)
         (rand/seed-shuffle seed))))

(defn populate [galaxy-map seed]
  (let [free-spaces (core/free-spaces galaxy-map)
        sampled-tiles (sample-tiles seed (count free-spaces))]
    (core/import-coordinate-map galaxy-map (zipmap free-spaces sampled-tiles))))

(defn enrich [galaxy-map]
  (let [distances (distance/coordinate->distances galaxy-map)
        stakes (stake/stakes-for-map galaxy-map distances)]
    (assoc galaxy-map
           :distances distances
           :stakes stakes)))

(defn create [seed]
  (-> (build layout/eight-player)
      (populate seed)
      (enrich)))

(comment
  (create "ABCDE"))
