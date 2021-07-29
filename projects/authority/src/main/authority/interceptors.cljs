(ns authority.interceptors
  (:require [re-frame.core :as rf]))

(def persist-db
  (rf/->interceptor
   :id :persist-db
   :after (fn [context]
            (let [[event-name & _] (rf/get-coeffect context :event)]
              (if-not (#{:timer/heartbeat :initialize} event-name)
                (if-let [db-effect (rf/get-effect context :db)]
                  (rf/assoc-effect context :persist-local db-effect)
                  context)
                context)))))

(rf/reg-global-interceptor persist-db)