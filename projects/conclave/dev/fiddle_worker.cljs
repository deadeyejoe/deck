(ns fiddle-worker
  (:require [conclave.generate.core :as generate]
            [conclave.generate.slice :as slice]
            [conclave.layout.directory :as directory]
            [conclave.map.serialization :as serialize]
            [conclave.handlers :as handlers]
            [conclave.worker.client :as worker]
            [re-frame.core :as rf]
            [conclave.map.layout :as layout]))

(def generated (atom nil))

(serialize/serialize @generated)

(let [layout directory/default-layout
      options {:pok true
               :include-wormholes true
               :seed "ABCDE"
               :legendaries-in-equidistants true
               :planets-in-equidistants true
               :equidistant-balance :influence}]
  (worker/spawn {:action :new-generate :options options :layout layout}
                {:on-result #(do
                               (rf/dispatch [handlers/map-generated %]))
                 :on-error #(tap> [:error!])}))

(let [layout directory/default-layout
      options {:pok true
               :debug true
               :include-wormholes true
               :seed "ABCDE"
               :legendaries-in-equidistants true
               :planets-in-equidistants true
               :equidistant-balance :influence}
      generated-context (generate/generate layout options)]
  (reset! generate/last-context generated-context))


(comment
  (tap> (->> (:slices @generate/last-context)
             (slice/sum-slices)
             (map :summary))))
