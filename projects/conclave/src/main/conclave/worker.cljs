(ns conclave.worker
  (:require [conclave.generate.core :as generate]
            [conclave.worker.instance :as worker]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp new-generate [{:keys [options layout] :as request}]
  {:map (:galaxy-map (generate/generate layout options))
   :layout-code (:code layout)})

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn handler [{:keys [profile action] :as request}]
  (let [action-handler #(case action
                          :generate (new-generate request))]
    (if profile
      (profile-request action-handler)
      (action-handler))))

(defn main []
  (worker/bootstrap handler))
