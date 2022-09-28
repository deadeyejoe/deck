(ns fiddle-gen
  (:require [conclave.generate.arrangement :as arrangement]
            [conclave.generate.core :as core]
            [conclave.generate.executor :as executor]
            [conclave.generate.optimize :as optimize]
            [conclave.generate.score :as score]
            [conclave.generate.slice :as slice]
            [conclave.generate.tileset :as tileset]
            [conclave.handlers :as handlers]
            [conclave.layout.directory :as directory]
            [conclave.tiles.set :as tile-set]
            [re-frame.core :as rf]
            [conclave.player :as player]
            [medley.core :as medley]
            [conclave.generate.balance :as balance]
            [deck.random.interface :as random]))

(let [sim (fn [[lower upper] quantity]
           (min (- upper quantity)
                (- quantity lower)))]
  (->> (range 30 45)
       (map (juxt identity (partial sim [35.5 41.5])))))

(compare [[19.5 -13.5] 0]
         [[18.5 -12.5] 0])

(let [layout (directory/code->layout "3p")
      options {:pok true
               :debug true
               :include-wormholes true
:include-legendaries true
:map-balance :balanced
            ;;    :planets-in-equidistants true
              ;;  :legendaries-in-equidistants true
            ;;    :equidistant-balance :favour-resource
               :max-swaps 2000}
      context (core/init-context layout options)
      steps tileset/steps
      optimized (executor/execute context steps)]
  #_(rf/dispatch [handlers/map-generated {:map (:galaxy-map optimized) :layout-code (:code layout)}])
  (reset! core/last-context optimized)
  (keys optimized))

(rf/dispatch [handlers/generate-map])

(let [{:keys [balance-goals slice-array tile-array swaps] :as slice-context} (:slices @core/last-context)
      tile-index-lookup (->> tile-array
                             (map :key)
                             (map-indexed (comp vec
                                                reverse
                                                vector))
                             (into {}))
      slices-before (slice/add-summary-to-slices slice-context)]
  [slice-array])

(let [layout directory/default-layout
      options {:pok true :include-wormholes true :max-swaps 50
               :debug true :slice true}]
  (:galaxy-map (core/generate layout options)))

(tile-set/collect-totals (first (tile-set/samples {:red 18 :blue 34}
                                                  tile-set/pok-standard)))
(tile-set/collect-totals [:optimal-influence :traits]
                         (first (tile-set/samples {:red 18 :blue 34}
                                                  tile-set/pok-standard)))

(let [tileset (first (tile-set/samples {:red 18 :blue 34}
                                       tile-set/pok-standard))]
  [(->> (map #(get-in % [:total :optimal-resources]) tileset)
        (sort >)
        (frequencies))
   (score/balance-cardinality 14 :favour-resource tileset)
   (->> (map #(get-in % [:total :optimal-influence]) tileset)
        (sort >)
        (frequencies))
   (score/balance-cardinality 14 :favour-influence tileset)
   (score/balance-cardinality 14 :balanced tileset)])
