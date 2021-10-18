(ns conclave.tiles.core
  (:require [conclave.data :as data]
            [conclave.tiles.static :refer [green-tile]]))

(defn enrich [key raw-tile]
  (let [planets (:planets raw-tile)
        all-traits (->> planets
                        (map :trait)
                        (remove nil?)
                        (into []))]
    (merge raw-tile
           {:key key
            :total/planets    (count planets)
            :total/resources  (->> planets
                                   (map :resources)
                                   (apply +))
            :total/influence  (->> planets
                                   (map :influence)
                                   (apply +))
            :total/cultural   (->> all-traits
                                   (filter #{:cultural})
                                   count)
            :total/industrial (->> all-traits
                                   (filter #{:industrial})
                                   count)
            :total/hazardous  (->> all-traits
                                   (filter #{:hazardous})
                                   count)
            :total/specialty  (->> planets
                                   (map :specialty)
                                   (remove nil?)
                                   (into #{}))}
           (when (some :legendary planets)
             {:legendary true}))))

(def key->tiles (reduce-kv #(assoc %1 %2 (enrich %2 %3))
                           {}
                           data/tiles-raw))

(def tiles (vals key->tiles))

(defn blank-home-tile [player-id]
  (merge green-tile {:key player-id}))

(def mecatol (:18 key->tiles))
(defn mecatol? [tile] (= tile mecatol))

(def nexus   (:82 key->tiles))
(defn nexus? [tile] (= tile nexus))

(defn home? [tile] (= (:type tile) :green))

(def wormholes (->> tiles
                    (filter :wormhole)
                    (map :key)))
(def wormholes-alpha (->> tiles
                          (filter (comp (partial = :alpha) :wormhole))
                          (map :key)))
(def wormholes-beta (->> tiles
                         (filter (comp (partial = :beta) :wormhole))
                         (map :key)))

(defn matching-wormholes [tile]
  (let [wormhole (:wormhole tile)]
    (case wormhole
      :alpha wormholes-alpha
      :beta wormholes-beta
      (list))))

(defn default? [tile]
  (and (-> tile :type #{:blue :red})
       (-> tile :race nil?)
       (not (mecatol? tile))
       (not (nexus? tile))))

(def default-set (filter default? tiles))

(defn image [tile]
  (or (:image tile) (str "ST_" (-> tile :key name) ".png")))

