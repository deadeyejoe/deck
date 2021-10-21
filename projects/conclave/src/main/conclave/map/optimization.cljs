(ns conclave.map.optimization
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.map.score :as score]
            [conclave.map.constraints :as constraints]
            [taoensso.tufte :as tufte :refer-macros (defnp p profiled profile)]))

(defnp calculate-constraint-score [galaxy-map]
  (let [anomalies (constraints/count-adjacent-anomalies galaxy-map)
        wormholes (constraints/count-adjacent-wormholes galaxy-map)
        zero-start (constraints/count-zero-starts galaxy-map)]
    (+ anomalies
       (* 2 wormholes)
       (* 4 zero-start))))

(defnp calculate-variance-score [galaxy-map]
  (-> galaxy-map
      (score/shares score/discrete-stakes)
      (score/variances)
      (vals)
      ((partial apply +))))

(defnp step
  ([galaxy-map swaps]
   (step galaxy-map swaps (calculate-constraint-score galaxy-map) (calculate-variance-score galaxy-map)))
  ([galaxy-map swaps constraint-score variance-score]
   (loop [current-map galaxy-map
          [current-swap & rest] swaps]
     (if (nil? current-swap)
       [current-map []]
       (let [new-map (apply core/swap-tiles current-map current-swap)
             new-constraint-score (calculate-constraint-score new-map)]
         (if (<= new-constraint-score constraint-score)
           (let [new-variance-score (calculate-variance-score new-map)]
             (if (<= new-variance-score variance-score)
               [new-map rest]
               (recur current-map rest)))
           (recur current-map rest)))))))

(comment
  (def sample-map (-> (core/build layout/eight-player)
                      (core/populate "ABCDE" tile/default-set)))
  (count (prn-str sample-map))
  (def swaps (core/generate-swap-list sample-map "ABCDE"))
  (def cs (calculate-constraint-score sample-map))
  (def vs (calculate-variance-score sample-map))

  (let [sample-map (-> (core/build layout/eight-player)
                       (core/populate "ABCDE" tile/default-set))
        swaps (core/generate-swap-list sample-map "ABCDE")]
    (-> (profiled {} (dotimes [_ 5] (step sample-map swaps)))
        second
        (tufte/format-pstats {:columns [:n-calls :p50 :mean :clock :total]})
        println)))

