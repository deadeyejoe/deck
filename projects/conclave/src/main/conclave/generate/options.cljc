(ns conclave.generate.options
  (:require [conclave.layout.directory :as directory]
            [clojure.spec.alpha :as s]))

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
(s/def ::legendaries-in-equidistants boolean?)
(def equidistant-balance-options [:resource
                                  :balanced
                                  :influence])
(s/def ::equidistant-balance (set equidistant-balance-options))

(s/def ::instance (s/keys :req-un [::selected-layout
                                   ::pok]
                          :opt-un [::include-wormholes
                                   ::include-legendaries
                                   ::map-balance
                                   ::planets-in-equidistants
                                   ::legendaries-in-equidistants
                                   ::equidistant-balance]))

(defn init-db []
  {:selected-layout (:code directory/default-layout)
   :pok true})
