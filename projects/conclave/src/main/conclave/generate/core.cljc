(ns conclave.generate.core
  (:require [conclave.layout.specs :as layout-specs]
            [conclave.generate.tileset]
            [conclave.generate.balance]
            [conclave.generate.executor :as executor]
            [conclave.generate.options :as options]
            [conclave.map.core :as map]
            [clojure.spec.alpha :as s]
            [conclave.generate.tileset :as tileset]))

(s/def ::layout ::layout-specs/instance)
(s/def ::map ::map/galaxy)
(s/def ::evaluation map?)
(s/def ::options ::options/instance)
(s/def ::generation-context (s/keys :req-un [::layout
                                             ::map
                                             ::evaluation
                                             ::options]))

(defn generate-tileset [{:keys [include-wormholes]} options])

(defn init-steps []
  tileset/steps)

(defn init-context [layout options]
  {:layout layout
   :options (merge {:pok true
                    :seed (str (random-uuid))}
                   options)})

(defn generate [layout options evaluation]
  (executor/execute (init-context layout options)
                    (init-steps)))
