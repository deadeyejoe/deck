(ns fiddle-worker
  (:require [conclave.layout.directory :as directory]
            [conclave.map.serialization :as serialize]
            [conclave.handlers :as handlers]
            [conclave.worker.client :as worker]
            [re-frame.core :as rf]))

(def generated (atom nil))

(serialize/serialize @generated)

(let [layout directory/default-layout
      options {:pok true :include-wormholes true}]
  (worker/spawn {:action :new-generate :options options :layout layout}
                {:on-result #(do
                               (reset! generated %)
                               (rf/dispatch [handlers/map-generated %]))
                 :on-error #(tap> [:error!])}))
