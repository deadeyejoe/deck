(ns conclave.map.beta.optimization
  (:require [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.starter :as starter]
            [conclave.map.core :as core]
            [taoensso.tufte :as tufte :refer [defnp] :refer-macros [defnp]]))


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

(defnp step [galaxy-map current-variance current-constraint current-start swap]
  (let [new-galaxy (apply core/swap-tiles galaxy-map swap)
        new-variance (score/compute-variance new-galaxy)
        new-constraint (constraint/compute-score new-galaxy)
        new-start (starter/score new-galaxy)]
    (if (and (variance-tolerated? new-variance current-variance)
             (constraint-tolerated? new-constraint current-constraint)
             (start-tolerated? new-start current-start))
      [new-galaxy new-variance new-constraint new-start]
      [galaxy-map current-variance current-constraint current-start])))

(defn optimize [galaxy-map swaps]
  (let [current-variance (score/compute-variance galaxy-map)
        current-constraint (constraint/compute-score galaxy-map)
        current-start (starter/score galaxy-map)]
    (reduce (fn [state swap] (apply step (conj state swap)))
            [galaxy-map current-variance current-constraint current-start]
            swaps)))
