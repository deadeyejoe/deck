(ns conclave.worker
  (:require [conclave.generate.core :as generate]
            [conclave.worker.instance :as worker]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defnp new-generate [{:keys [options layout] :as _request}]
  (.log js/console (str "Worker Started with options " options))
  (let [{:keys [galaxy-map options] :as _generated} (generate/generate layout options)]
    {:options options
     :map galaxy-map
     :layout-code (:code layout)}))

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
