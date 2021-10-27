(ns conclave.worker.main
  (:require [conclave.worker.instance :as worker]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp generate [{:keys [seed]}]
  (let [map (-> (map/build layout/eight-player)
                (map/populate seed tile/default-set))]
    {:map map}))

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn register [id handler]
  (worker/register
   id
   (fn [{:keys [profile] :as request}]
     (if profile
       (profile-request #(handler request))
       (handler request)))))

(defn main []
  (register :generate generate)
  (worker/bootstrap))