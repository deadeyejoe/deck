(ns conclave.generate.options
  (:require [clojure.spec.alpha :as s]))

(s/def ::pok boolean?)
(s/def ::include-wormholes boolean?)
(s/def ::include-legendaries boolean?)
(def map-balance-options [:extreme-resource
                          :favour-resource
                          :balanced
                          :favour-influence
                          :extreme-influence])
(s/def ::map-balance (set map-balance-options))
(s/def ::planets-in-equidistants boolean?)
(def equidistant-balance-options [:resource
                                  :balance
                                  :influence])
(s/def ::equidistant-balance (set equidistant-balance-options))

(s/def ::instance (s/keys :opt-un [::pok
                                   ::include-wormholes
                                   ::include-legendaries
                                   ::map-balance
                                   ::planets-in-equidistants
                                   ::equidistant-balance]))
