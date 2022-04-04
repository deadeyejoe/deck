(ns conclave.fiddle
  (:require [conclave.map.beta.build :as map.build]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.optimization :as optimization]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.stake :as stake]
            [conclave.map.beta.summary :as summary]
            [conclave.hex :as hex]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.score :as util-score]
            [conclave.tiles.core :as tile]
            [clojure.math.combinatorics :as combo]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]
            [taoensso.tufte :as tufte :refer-macros (profiled)]))

(def sample-map (map.build/create "ABCDE"))
(def swaps (core/generate-swap-list sample-map "ABCDE"))
(first swaps)

(s/valid? (s/map-of ::layout/coordinate
                    (s/map-of keyword?
                              (s/map-of ::layout/coordinate
                                        number?)))
          (score/shares-for-map sample-map))

(->> (score/combined-shares sample-map)
     (score/invert-share-map)
     (medley/map-vals #(->> %
                            score/apply-weights
                            vals
                            (apply +))))
(comment
  "Demonstrating that you don't need to consider variation for constrained tiles
   (assuming that the min-distance is 3)"
  (->> (combo/selections [1 2 3 4 5] 3)
       (filter (comp (partial = 3)
                     (partial apply min)))
       (map (juxt identity util-score/variation))
       (sort-by second)))

(constraint/evaluate-constraint sample-map (first constraint/constraints))
(constraint/evaluate-constraints sample-map)
(constraint/score sample-map)

(score/combined-shares sample-map)

(core/coordinate->tile sample-map [-1 1 0])
(-> (apply core/swap-tiles sample-map (first swaps))
    (core/coordinate->tile [0 -1 1]))

(drop 1 (optimization/to-triple sample-map))
(drop 1 (optimization/to-triple (apply core/swap-tiles sample-map (second swaps))))
(let [[m v c] (optimization/to-triple sample-map)]
  (drop 1 (optimization/step m v c (second swaps))))

(-> (profiled {} (optimization/optimize sample-map swaps))
    second
    (tufte/format-pstats {:columns [:n-calls :p50 :mean :clock :total]})
    println)

(summary/player-summary sample-map :p1)
