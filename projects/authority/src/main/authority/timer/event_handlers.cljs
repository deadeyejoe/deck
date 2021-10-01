(ns authority.timer.event-handlers
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :timer/start-heartbeat
 (fn [_]
   {:interval {:action :start
               :id :heartbeat
               :frequency 1000
               :event [:timer/heartbeat]}}))

(rf/reg-event-fx
 :timer/stop-heartbeat
 (fn [_]
   {:interval {:action :stop
               :id :heartbeat}}))

(rf/reg-event-fx
 :timer/heartbeat
 [(rf/inject-cofx :now)]
 (fn [{:keys [db now]} _]
   {:db (assoc db :heartbeat now)}))