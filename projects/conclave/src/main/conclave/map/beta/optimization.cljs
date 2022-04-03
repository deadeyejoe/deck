(ns conclave.map.beta.optimization
  (:require [conclave.map.beta.build :as build]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.score :as score]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.utils.score :as score-util]
            [conclave.tiles.core :as tile]
            [clojure.math.combinatorics :as combi]
            [taoensso.tufte :as tufte :refer-macros (defnp profiled)]))

(defnp step [galaxy-map current-variance current-constraint swap]
  (let [new-galaxy (apply core/swap-tiles galaxy-map swap)
        new-variance (score/compute-variance new-galaxy)]
    (or (when (< new-variance current-variance)
          (let [new-constraint (constraint/score new-galaxy)]
            (when (<= new-constraint current-constraint)
              [new-galaxy new-variance new-constraint])))
        [galaxy-map current-variance current-constraint])))

(defn optimize [galaxy-map swaps]
  (let [current-variance (score/compute-variance galaxy-map)
        current-constraint (constraint/score galaxy-map)]
    (reduce (fn [state swap] (apply step (conj state swap)))
            [galaxy-map current-variance current-constraint]
            swaps)))
