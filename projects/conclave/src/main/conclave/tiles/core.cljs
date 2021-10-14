(ns conclave.tiles.core
  (:require [conclave.data :as data]))

(defn enrich [key raw-tile]
  (let [planets (:planets raw-tile)]
    (merge raw-tile
           {:key key
            :total/planets   (count planets)
            :total/resources (->> planets
                                  (map :resources)
                                  (apply +))
            :total/influence (->> planets
                                  (map :influence)
                                  (apply +))
            :total/traits    (->> planets
                                  (map :trait)
                                  (remove nil?)
                                  (into []))
            :total/specialty (->> planets
                                  (map :specialty)
                                  (remove nil?)
                                  (into #{}))}
           (when (some :legendary planets)
             {:legendary true}))))

(def tiles (reduce-kv #(assoc %1 %2 (enrich %2 %3))
                      {}
                      data/tiles-raw))

(def mecatol (:18 tiles))
(defn mecatol? [tile] (= tile mecatol))

(def nexus   (:82 tiles))
(defn nexus? [tile] (= tile nexus))

(defn home? [tile] (= (:type tile) :green))

(defn default? [tile]
  (and (-> tile :type #{:blue :red})
       (-> tile :race nil?)
       (not (mecatol? tile))
       (not (nexus? tile))))

(def default-set (->> tiles
                      vals
                      (filter default?)))

(defn image [tile]
  (or (:image tile) (str "ST_" (-> tile :key name) ".png")))

