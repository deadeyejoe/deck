(ns conclave.generate.core
  (:require [conclave.layout.specs :as layout-specs]
            [conclave.generate.arrangement :as arrangement]
            [conclave.generate.balance]
            [conclave.generate.constraints]
            [conclave.generate.slice]
            [conclave.generate.executor :as executor]
            [conclave.generate.options :as options]
            [conclave.generate.optimize :as optimize]
            [conclave.generate.tileset :as tileset]
            [conclave.map.core :as map]
            [clojure.spec.alpha :as s]))

(s/def ::layout ::layout-specs/instance)
(s/def ::galaxy-map ::map/galaxy)
(s/def ::tileset map?)
(s/def ::slices map?)
(s/def ::arrangment map?)
(s/def ::options ::options/instance)
(s/def ::generation-context (s/keys :req-un [::layout
                                             ::options]
                                    :opt-un [::tileset
                                             ::slices
                                             ::arrangment
                                             ::galaxy-map]))

(defonce last-context (atom nil))

(defn init-steps []
  (concat tileset/steps
          optimize/steps
          arrangement/steps))

(defn init-context [layout options]
  {:layout layout
   :options (merge {:pok true
                    :seed (str (random-uuid))}
                   options)})

(defn generate [layout options]
  (executor/execute (init-context layout options)
                    (init-steps)))
