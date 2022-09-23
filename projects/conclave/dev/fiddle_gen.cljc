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
      options {:pok true
               :selected-layout "8p"
               :include-wormholes true
               :include-legendaries true
               :map-balance :balanced
               :planets-in-equidistants false
               :legendaries-in-equidistants false
               :equidistant-balance :balanced
               :max-swaps 1000}
      context (core/init-context layout options)
      optimized (executor/execute context (concat tileset/steps
                                                  #_slice/steps
                                                  #_arrangement/steps))]
  [#_(slice/compute-balance-goal (:slices layout) (:tileset optimized))
   (count (:tileset optimized))
   (->> optimized
        :slices
        (slice/sum-slices)
        (map (juxt :score :balance :summary)))
   (count (:tiles (:map optimized)))])

(let [layout directory/default-layout
      options {:pok true :include-wormholes true :max-swaps 50
               :debug true :slice true}]
  (:galaxy-map (core/generate layout options)))

(tile-set/collect-totals (first (tile-set/samples {:red 18 :blue 34}
                                                  tile-set/pok-standard)))
(tile-set/collect-totals [:optimal-influence :traits]
                         (first (tile-set/samples {:red 18 :blue 34}
                                                  tile-set/pok-standard)))
