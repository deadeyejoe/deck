(ns conclave.map.beta.build
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.stake :as stake]
            [medley.core :as medley]))

(defn slice-for [stakes home-system-coordinate]
  (->> stakes
       (medley/filter-vals #(= 1 (get % home-system-coordinate)))
       (keys)))

(defn slices [galaxy-map stakes]
  (let [home-system-coordinates (core/home-coordinates galaxy-map)]
    (->> home-system-coordinates
         (map (juxt identity (partial slice-for stakes)))
         (into {}))))

(defn from-map [coordinate-map]
  (let [proto-map (core/import-coordinate-map {} coordinate-map)
        distances (distance/coordinate->distances proto-map)
        stakes (stake/stakes-for-map proto-map distances)
        slices (slices proto-map stakes)]
    (assoc proto-map
           :distances distances
           :stakes stakes
           :slices slices)))

(defn from-layout
  ([seed] (from-layout seed layout/default-layout))
  ([seed layout]
   (->> layout
        (layout/generate-coordinate-map seed)
        (from-map))))

(comment
  (from-layout "ABCDE"))
