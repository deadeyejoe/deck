(ns conclave.specs
  (:require [clojure.spec.alpha :as s]))

(s/def ::coordinate (s/coll-of int? :kind vector? :count 3))
(s/def ::coordinates (s/coll-of ::coordinate))

(s/def ::type #{:green :red :blue :hyperlane})

(def anomalies [:asteroid-field :nebula :gravity-rift :supernova])
(s/def ::anomaly (set anomalies))

(def specialties [:biotic :cybernetic :propulsion :warfare])
(s/def ::specialty (set specialties))

(def traits [:cultural :hazardous :industrial])
(s/def ::trait (set traits))

(def wormholes [:alpha :beta :gamma :delta])
(s/def ::wormhole (set wormholes))

(def quantities (-> [:planets
                     :resources
                     :influence
                     :optimal-resources
                     :optimal-influence
                     :tech
                     :legendary
                     :anomaly]
                    (into anomalies)
                    (into specialties)
                    (into traits)
                    (into wormholes)))
(s/def ::quantities (set quantities))
