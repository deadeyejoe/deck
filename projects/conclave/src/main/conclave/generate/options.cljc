(ns conclave.generate.options
  (:require [conclave.layout.directory :as directory]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(s/def ::pok boolean?)
(s/def ::include-wormholes boolean?)
(s/def ::include-legendaries boolean?)
(def map-balance-options [{:name :extreme-resource :label "Extreme Resource"}
                          {:name :favour-resource :label "Favour Resource"}
                          {:name :balanced :label "Balanced"}
                          {:name :favour-influence :label "Favour Influence"}
                          {:name :extreme-influence :label "Extreme Influence"}])
(def name->map-balance-option
  (medley/index-by :name map-balance-options))
(s/def ::map-balance (set (map :name map-balance-options)))
(s/def ::planets-in-equidistants boolean?)
(s/def ::legendaries-in-equidistants boolean?)
(def equidistant-balance-options [{:name :favour-resource :label "Favour Resource"}
                                  {:name :balanced :label "Balanced"}
                                  {:name :favour-influence :label "Favour Influence"}])
(def name->equidistant-balance-option
  (medley/index-by :name equidistant-balance-options))
(s/def ::equidistant-balance (set (map :name equidistant-balance-options)))

(s/def ::instance (s/keys :req-un [::selected-layout
                                   ::pok]
                          :opt-un [::include-wormholes
                                   ::include-legendaries
                                   ::map-balance
                                   ::planets-in-equidistants
                                   ::legendaries-in-equidistants
                                   ::equidistant-balance]))

(defn init-db []
  {:pok true
   :selected-layout (:code directory/default-layout)
   :include-wormholes true
   :include-legendaries false
   :map-balance :balanced
   :planets-in-equidistants false
   :legendaries-in-equidistants false
   :equidistant-balance :balanced})
