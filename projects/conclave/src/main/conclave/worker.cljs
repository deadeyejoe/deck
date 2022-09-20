(ns conclave.worker
  (:require [conclave.generate.core :as generate]
            [conclave.layout.directory :as directory]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.optimization :as opt]
            [conclave.map.layout :as layout]
            [conclave.worker.instance :as worker]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp optimize [{:keys [map seed] :as request}]
  (let [swaps (layout/generate-swap-list seed)]
    {:map (first (opt/optimize map swaps))}))

(defnp generate [{:keys [seed layout] :as request}]
  (let [galaxy-map (if layout
                     (map.build/from-layout seed layout)
                     (map.build/from-layout seed))
        swaps (if layout
                (layout/generate-swap-list seed layout)
                (layout/generate-swap-list seed))]
    {:map (first (opt/optimize galaxy-map swaps))}))

(defnp new-generate [{:keys [options layout] :as request}]
  {:map (:galaxy-map (generate/generate layout options))})

(comment (generate {:seed "ABCDE" :layout (layout/code->layout "7pw")}))

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn handler [{:keys [profile action] :as request}]
  (let [action-handler #(case action
                          :optimize (optimize request)
                          :generate (generate request)
                          :new-generate (new-generate request))]
    (if profile
      (profile-request action-handler)
      (action-handler))))

(defn main []
  (worker/bootstrap handler))
