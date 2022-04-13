(ns conclave.worker
  (:require [conclave.worker.instance :as worker]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.optimization :as opt]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp optimize [{:keys [map seed] :as request}]
  (let [swaps (map/generate-swap-list map seed)]
    {:map (first (opt/optimize map swaps))}))

(defnp generate [{:keys [seed] :as request}]
  (let [galaxy-map (map.build/create seed)
        swaps (map/generate-swap-list galaxy-map seed)]
    {:map (first (opt/optimize galaxy-map swaps))}))

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn handler [{:keys [profile action] :as request}]
  (let [action-handler #(case action
                          :optimize (optimize request)
                          :generate (generate request))]
    (if profile
      (profile-request action-handler)
      (action-handler))))

(defn main []
  (worker/bootstrap handler))
