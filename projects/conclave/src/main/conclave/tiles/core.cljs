(ns conclave.tiles.core
  (:require [conclave.data :as data]
            [conclave.tiles.static :refer [green-tile]]
            [clojure.spec.alpha :as s]))

(s/def ::key keyword?)
(s/def ::type #{:green :red :blue :hyperlane})
(s/def ::wormhole #{:alpha :beta :gamma :delta})
(s/def ::anomaly #{:asteroid-field :nebula :gravity-rift :supernova})
(s/def ::pok boolean?)

(s/def ::name (s/and string?
                     not-empty))
(s/def ::resources nat-int?)
(s/def ::influence nat-int?)
(s/def ::specialty #{:biotic :cybernetic :propulsion :warfare})
(s/def ::trait #{:cultural :hazardous :industrial})
(s/def ::legendary boolean?)
(s/def ::planet (s/keys :req-un [::name
                                 ::resources
                                 ::influence]
                        :opt-un [::specialty
                                 ::trait
                                 ::legendary]))
(s/def ::planets (s/coll-of ::planet))
(s/def ::instance (s/keys :req-un [::key
                                   ::type]
                          :opt-un [::wormhole
                                   ::anomaly
                                   ::planets
                                   ::pok]))

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
(def homes (filter home? tiles))

(defn blue? [tile] (= (:type tile) :blue))
(def blues (filter blue? tiles))

(defn red? [tile] (= (:type tile) :red))
(def reds (filter red? tiles))

(defn hyperlane? [tile] (= (:type tile) :hyperlane))
(def hyperlanes (filter hyperlane? tiles))

(defn wormhole? [tile] (contains? tile :wormhole))
(defn alpha-wormhole? [tile] (= :alpha (:wormhole tile)))
(defn beta-wormhole? [tile] (= :beta (:wormhole tile)))

(def wormholes (filter wormhole? tiles))
(def wormholes-alpha (filter alpha-wormhole? tiles))
(def wormholes-beta  (filter beta-wormhole? tiles))

(defn anomaly? [tile] (contains? tile :anomaly))
(def anomalies (filter anomaly? tiles))

(def supernova? (every-pred (comp #{:supernova} :anomaly)
                            (complement :race)))
(def supernovae (filter supernova? tiles))

(def nebula? (every-pred (comp #{:nebula} :anomaly)
                         (complement :race)))
(def nebulae (filter nebula? tiles))

(def asteroid-field? (every-pred (comp #{:asteroid-field} :anomaly)
                                 (complement :race)))
(def asteroid-fields (filter asteroid-field? tiles))

(def gravity-rift? (every-pred (comp #{:gravity-rift} :anomaly)
                               (complement :race)))
(def gravity-rifts (filter gravity-rift? tiles))

(defn legendary? [tile] (and (not (nexus? tile))
                             (:legendary tile)))
(def legendaries (filter legendary? tiles))

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

(defn ^:deprecated stakeable? [tile]
  (and (not (home? tile))
       (not (mecatol? tile))
       (seq (:planets tile))))
