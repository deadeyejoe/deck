(ns conclave.fiddle
  (:require [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.hex :as hex]
            [clojure.math.combinatorics :as combo]))

(comment
  (-> (layout/free-spaces layout/eight-player)
      (combo/combinations 2)
      count)

  (let [rings (map hex/ring-coordinates (range 1 5))
        combos (combo/combinations rings 2)
        swaps (combo/combinations (apply concat rings) 2)
        inter-ring (mapcat (partial apply combo/cartesian-product) combos)
        intra-ring (mapcat #(combo/combinations % 2) rings)]
    [(count swaps)
     (count inter-ring)
     (count intra-ring)]))