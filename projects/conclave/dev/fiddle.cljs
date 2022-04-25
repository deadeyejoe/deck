(ns conclave.fiddle
  (:require [conclave.map.beta.build :as map.build]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.optimization :as optimization]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.stake :as stake]
            [conclave.map.beta.starter :as starter]
            [conclave.map.summary :as summary]
            [conclave.utils.hex :as hex]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.utils.score :as util-score]
            [conclave.tiles.core :as tile]
            [clojure.math.combinatorics :as combo]
            [clojure.spec.alpha :as s]
            [re-frame.db :as rfdb]
            [medley.core :as medley]
            [taoensso.tufte :as tufte :refer-macros (profiled)]))

(def current-map (:map @rfdb/app-db))

(let [home-c (core/tile->coordinate current-map :p6)
      slice (get-in current-map [:slices home-c])
      tiles (map (partial core/coordinate->tile current-map) slice)]
  (map :wormhole tiles))
(summary/player-summary current-map :p6)

(def sample-map (map.build/create "ABCDE"))
(def swaps (core/generate-swap-list sample-map "ABCDE"))
(first swaps)

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

(let [tile (-> (core/coordinate->tile sample-map [0 1 -1])
               (:total)
               (select-keys (keys score/default-weights)))]
  (merge-with *
              (select-keys score/default-weights (keys tile))
              tile))
(score/weighted-tile (core/coordinate->tile sample-map [0 1 -1]))
(score/tile-score (core/coordinate->tile sample-map [0 1 -1]))

(->> (score/tile-scores sample-map)
     (score/player-scores sample-map))

(core/coordinate->tile sample-map [-1 1 0])
(-> (apply core/swap-tiles sample-map (first swaps))
    (core/coordinate->tile [0 -1 1]))

(summary/player-summary sample-map :p1)

(core/origin-distance-map sample-map)

(map.build/slice-for (:stakes sample-map) [0 4 -4])

(->> (starter/starter-data-for-player current-map [0 4 -4])
     (starter/problems-with-start))
(starter/satisfactory? current-map [0 4 -4])
