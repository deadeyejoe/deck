(ns conclave.db
  (:require [clojure.spec.alpha :as s]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.specs :as map.specs]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]))

(s/def ::map ::map.specs/instance)
(s/def ::seed (s/and string?
                     not-empty))
(def overlay-modes [:none
                    :tile-number
                    :coordinates
                    :res-inf
                    :wormhole
                    :distance-score
                    :highest-stake])
(s/def ::overlay-mode (set overlay-modes))

(def highlight-modes [:single
                      :adjacent])
(s/def ::highlight-mode (set highlight-modes))
(s/def ::hovered ::layout/coordinate)
(s/def ::selected ::layout/coordinate)

(s/def ::processing boolean?)
(s/def ::constraint-score number?)
(s/def ::variance-score number?)

(s/def ::db [:req-un [::seed
                      ::map
                      ::overlay-mode
                      ::highlight-mode
                      ::hovered
                      ::selected
                      ::constraint-score
                      ::variance-score
                      ::processing]])

(defn initialize [seed]
  {:seed seed
   :map (map.build/create seed)
   :overlay-mode :none
   :highlight-mode :single})

(defn set-map [db new-map]
  (assoc db
         :map new-map
         :variance-score (score/compute-variance new-map)
         :constraint-score (constraint/compute-score new-map)))
