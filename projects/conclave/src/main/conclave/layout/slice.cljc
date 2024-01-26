(ns conclave.layout.slice
  (:require [conclave.layout.core :as core]
            [conclave.specs :as specs]
            [medley.core :as medley]
            [clojure.spec.alpha :as s]))

(s/def ::key keyword?)
(s/def ::size pos-int?)
(s/def ::instance (s/keys :opt-un [::key
                             ::specs/coordinates
                             ::size]))

(defn pare-distances [distances {:keys [free-coordinates] :as layout}]
  (let [home-coordinates (core/home-coordinates layout)]
    (->> (select-keys distances free-coordinates)
         (medley/map-vals #(select-keys % home-coordinates)))))

(defn closest-home-coordinates [home-coordinate->distance]
  (let [[_c min-distance] (apply min-key second home-coordinate->distance)]
    (keep (fn [[home-coordinate distance]]
            (when (= distance min-distance)
              home-coordinate))
          home-coordinate->distance)))

(defn slice? [closest-home-coordinates]
  (= 1 (count closest-home-coordinates)))

(def equidistant? (complement slice?))

(defn group-slice-coordinates [home-tiles coordinate->closest-home-coordinates]
  (let [collect-as-set (fnil conj #{})]
    (reduce (fn [acc [coordinate closest-home-coordinates]]
              (let [slice-key (if (equidistant? closest-home-coordinates)
                                :equidistant
                                (-> closest-home-coordinates
                                    (first)
                                    (home-tiles)
                                    (:key)))]
                (update acc slice-key collect-as-set coordinate)))
            {}
            coordinate->closest-home-coordinates)))

(defn paths-to-mecatol [{:keys [adjacents] :as layout} home-coordinate]
  ;; breadth first search of adjacency graph, stop when mecatol is found, return shortest path(s)
  )

(defn slices [{:keys [distances home-tiles] :as layout}]
  (let [coordinate->home-coordinate->distance (pare-distances distances layout)
        coordinate->closest-home-coordinates (medley/map-vals closest-home-coordinates
                                                              coordinate->home-coordinate->distance)
        slice-key->slice-coordinates (group-slice-coordinates home-tiles coordinate->closest-home-coordinates)]
    (medley/map-kv-vals (fn [key coordinates]
                          {:key key 
                           :coordinates coordinates
                           :size (count coordinates)})
                        slice-key->slice-coordinates)))

(defn player-slices [slices]
  (vals (dissoc slices :equidistant)))

(defn with-equidistant-first [{:keys [equidistant] :as slices}]
  (into [equidistant] (player-slices slices)))
