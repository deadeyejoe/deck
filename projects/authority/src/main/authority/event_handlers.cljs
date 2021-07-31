(ns authority.event-handlers
  (:require [re-frame.core :as rf]
            [re-pressed.core :as rp]
            [authority.db :as db]
            [authority.shortcuts :as short]))

(rf/reg-event-fx
 :initialize
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]}]
   (if local-store
     {:db (assoc (db/init) :state :restore)
      :fx [[:dispatch [::rp/add-keyboard-event-listener "keyup"]]]}
     {:fx [[:dispatch [:new-game]]
           [:dispatch [::rp/add-keyboard-event-listener "keyup"]]]})))

(rf/reg-event-fx
 :new-game
 [(rf/inject-cofx :local-store)]
 (fn []
   {:db (db/init)
    :persist-local nil
    :fx [[:dispatch [:timer/start]]
         [:dispatch [:refresh-shortcuts]]]}))

(rf/reg-event-fx
 :restore-game
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]}]
   {:db local-store
    :fx [[:dispatch [:timer/start]]
         [:dispatch [:refresh-shortcuts]]]}))

(rf/reg-event-fx
 :refresh-shortcuts
 (fn [{db :db}]
   {:fx (short/rp-dispatch-based-on-db db)}))

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
   (let [new-db (-> db
                    (db/start-round now)
                    (db/start-strategy now))]
     {:db new-db
      :fx (short/rp-dispatch-based-on-db new-db)})))

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
   (let [new-db (-> db
                    (db/end-strategy now)
                    (db/start-action now)
                    (db/first-action now))]
     {:db new-db
      :fx (short/rp-dispatch-based-on-db new-db)})))

(rf/reg-event-fx
 :action/next-turn
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/next-turn db now)}))

(defn paused? [db]
  (= :pause (-> db :round/stream first :action)))

(rf/reg-event-fx
 :action/toggle-turn
 (fn [{:keys [:db]} _]
   (if (paused? db)
     {:fx [[:dispatch [:action/resume-turn]]]}
     {:fx [[:dispatch [:action/pause-turn]]]})))

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
   (let [new-db (-> db
                    (db/end-action now)
                    (db/start-status now))]
     (merge
      {:db new-db
       :fx (short/rp-dispatch-based-on-db new-db)}))))

(rf/reg-event-fx
 :agenda/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-action now)
                    (db/start-agenda now))]
     (merge
      {:db new-db
       :fx (short/rp-dispatch-based-on-db new-db)}))))

(rf/reg-event-fx
 :round/end
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-agenda now)
                    (db/end-round))]
     {:db new-db
      :fx (short/rp-dispatch-based-on-db new-db)})))




