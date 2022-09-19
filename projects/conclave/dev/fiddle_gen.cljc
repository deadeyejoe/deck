(ns fiddle-gen
  (:require [conclave.generate.balance :as balance]
            [conclave.generate.arrangement :as arrangement]
            [conclave.generate.core :as core]
            [conclave.generate.executor :as executor]
            [conclave.generate.slice :as slice]
            [conclave.generate.tileset :as tileset]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [conclave.layout.directory :as directory]
            [deck.random.interface :as random]))

(let [layout directory/default-layout
      options {:pok true :include-wormholes true :max-swaps 50
               :debug true :slice true}
      context (core/init-context layout options)
      optimized (executor/execute context (concat tileset/steps
                                                  slice/steps
                                                  arrangement/steps))]
  [(slice/compute-balance-goal (:slices layout) (:tileset optimized))
   (->> optimized
        :slices
        (slice/sum-slices)
        (map (juxt :score :balance :summary)))
   (count (:tiles (:map optimized)))])

(->> (:slices directory/default-layout)
     (slice/player-slices))

(slice/compute-balance-goal (:slices directory/default-layout)
                            (first (tile-set/samples {:red 18 :blue 34}
                                                     tile-set/pok-standard)))
