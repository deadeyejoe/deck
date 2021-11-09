(ns conclave.worker.main
  (:require [conclave.worker.instance :as worker]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.map.optimization :as opt]
            [conclave.tiles.core :as tile]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp generate [{:keys [seed]}]
  (let [galaxy-map (-> (map/build layout/eight-player)
                       (map/populate seed tile/default-set))
        swaps (map/generate-swap-list galaxy-map seed)
        [optimized & _] (opt/go galaxy-map swaps)]
    {:map optimized}))

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn handler [{:keys [profile] :as request}]
  (if profile
    (profile-request #(generate request))
    (generate request)))

(defn main []
  (worker/bootstrap handler))