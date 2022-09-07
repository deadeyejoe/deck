(ns conclave.map.gamma.optimization
  (:require [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.starter :as starter]
            [conclave.map.core :as core]
            [conclave.map.specs :as specs]
            [clojure.spec.alpha :as s]
            #?(:clj  [taoensso.tufte :as tufte :refer [defnp]]
               :cljs [taoensso.tufte :as tufte :refer-macros [defnp]])))

(s/def ::galaxy-map ::specs/instance)
(s/def ::weights (s/map-of keyword? int?))
(s/def ::variance float?)
(s/def ::constraint nat-int?)
(s/def ::start nat-int?)
(s/def ::context (s/keys :req-un [::galaxy-map
                                  ::weights]
                         :opt-un []))

(defn context->score [{:keys [galaxy-map] :as context}]
  {:variance (score/compute-variance context galaxy-map)
   :constraint (constraint/compute-score galaxy-map)
   :start (starter/score galaxy-map)})

(defn assoc-score [context]
  (assoc context :score (context->score context)))

(defn ->context [galaxy-map weights]
  (assoc-score {:galaxy-map galaxy-map
                :weights weights
                :swap-report []}))

(defn perform-swap [context swap]
  (-> context
      (update :galaxy-map (partial apply core/swap-tiles) swap)
      (assoc-score)))

(defn difference [x y]
  (Math/abs (- x y)))

(defn variance-tolerated? [new-variance current-variance]
  (or
   (<= new-variance current-variance)
   (<= (/ (difference new-variance current-variance)
          current-variance)
       0.025)))

(defn constraint-tolerated? [new-constraint current-constraint]
  (or (< current-constraint new-constraint)
      (<= (Math/abs (- new-constraint current-constraint)) 1)))

(defn start-tolerated? [new-start current-start]
  (<= new-start current-start))

(defn change-tolerated? [current-score new-score]
  (and (start-tolerated? (:start new-score) (:start current-score))
       (variance-tolerated? (:variance new-score) (:variance current-score))
       (constraint-tolerated? (:constraint new-score) (:constraint current-score))))

(defnp step [{:keys [score] :as context} swap]
  (let [{new-galaxy :galaxy-map new-score :score} (perform-swap context swap)]
    (if (change-tolerated? score new-score)
      (-> context
          (assoc :galaxy-map new-galaxy
                 :score new-score)
          (update :swap-report conj {:swap swap
                                     :score new-score
                                     :accepted true}))
      (update context :swap-report conj {:swap swap
                                         :score score}))))

(defn optimize
  ([galaxy-map swaps] (optimize galaxy-map score/default-weights swaps))
  ([galaxy-map weights swaps]
   (reduce step (->context galaxy-map weights) swaps)))
