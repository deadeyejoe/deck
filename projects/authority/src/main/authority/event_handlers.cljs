(ns authority.event-handlers
  (:require [re-frame.core :as rf]
            [authority.db :as db]))

(rf/reg-event-fx
 :initialize
 (fn [] {:db (db/init)
         :fx [[:dispatch [:timer/start]]]}))

(rf/reg-event-db
 :save-name
 (fn [db [_ position name]]
   (db/update-name db position name)))

(rf/reg-event-fx
 :start-game
 [(rf/inject-cofx :now)]
 (fn [{:keys [db now]} _]
   {:db (-> db
            (db/start-game now))
    :fx [[:dispatch [:round/start]]]}))

(rf/reg-event-fx
 :timer/start
 (fn [_]
   {:interval {:action :start
               :id :heartbeat
               :frequency 1000
               :event [:timer/heartbeat]}}))

(rf/reg-event-fx
 :timer/stop
 (fn [_]
   {:interval {:action :stop
               :id :heartbeat}}))

(rf/reg-event-fx
 :timer/heartbeat
 [(rf/inject-cofx :now)]
 (fn [{:keys [db now]} _]
   {:db (assoc db :timer/heartbeat now)}))

(rf/reg-event-fx
 :round/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (-> db
            (db/start-round now)
            (db/start-strategy now))}))

(rf/reg-event-db
 :strategy/set
 (fn [db [_ position initiative]]
   (db/set-strategy db position initiative)))

(rf/reg-event-db
 :strategy/unset
 (fn [db [_ position]]
   (db/unset-strategy db position)))

(rf/reg-event-fx
 :action/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db
    (-> db
        (db/end-strategy now)
        (db/start-action now)
        (db/first-action now))}))

(rf/reg-event-fx
 :action/next-turn
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/next-turn db now)}))

(rf/reg-event-fx
 :action/pause-turn
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/pause-turn db now)}))


(rf/reg-event-fx
 :action/resume-turn
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/resume-turn db now)}))

(rf/reg-event-fx
 :status/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (-> db
            (db/end-action now)
            (db/start-status now))}))

(rf/reg-event-fx
 :agenda/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (-> db
            (db/end-status now)
            (db/start-agenda now))}))

(rf/reg-event-fx
 :round/end
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (-> db
            (db/end-agenda now)
            (db/end-round))}))




