(ns conclave.tiles.core
  (:require [conclave.data :as data]
            [conclave.tiles.static :refer [green-tile]]))

(defn enrich [key raw-tile]
  (let [planets (:planets raw-tile)
        all-traits (->> planets
                        (map :trait)
                        (remove nil?)
                        (sort)
                        (vec))]
    (merge raw-tile
           {:key key
            :total/planets    (count planets)
            :total/resources  (->> planets
                                   (map :resources)
                                   (apply +))
            :total/influence  (->> planets
                                   (map :influence)
                                   (apply +))
            :total/traits     all-traits
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
                                   sort
                                   vec)}
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
(defn blue? [tile] (= (:type tile) :blue))
(defn red? [tile] (= (:type tile) :red))

(defn wormhole? [tile] (contains? tile :wormhole))

(defn alpha-wormhole? [tile] (= :alpha (:wormhole tile)))
(defn beta-wormhole? [tile] (= :beta (:wormhole tile)))

(def wormholes (->> tiles
                    (filter wormhole?)
                    (map :key)))
(def wormholes-alpha (->> tiles
                          (filter (comp (partial = :alpha) :wormhole))
                          (map :key)))
(def wormholes-beta (->> tiles
                         (filter (comp (partial = :beta) :wormhole))
                         (map :key)))


(defn anomaly? [tile] (contains? tile :anomaly))

(defn has-planets? [tile] (-> tile :planets seq))
(defn no-planets? [tile] (-> tile :planets empty?))

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

