(ns authority.event-handlers
  (:require [re-frame.core :as rf]
            [re-pressed.core :as rp]
            [authority.db :as db]
            [authority.timer.db :as timer-db]
            [authority.shortcuts :as short]
            [authority.timer.event-handlers]))

;; UTIL ====================================================================

(rf/reg-event-fx
 :refresh-shortcuts
 (fn [{db :db}]
   {:fx (short/update-hotkeys db)}))

;; INIT ====================================================================

(rf/reg-event-fx
 :initialize
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]}]
   (if local-store
     {:db (merge (db/init) {:game/state :restore})
      :fx [[:dispatch [::rp/add-keyboard-event-listener "keyup"]]]}
     {:fx [[:dispatch [:new-game]]
           [:dispatch [::rp/add-keyboard-event-listener "keyup"]]]})))

(rf/reg-event-fx
 :new-game
 (fn []
   {:db (db/init)
    :persist-local nil
    :fx [[:dispatch [:timer/start-heartbeat]]
         [:dispatch [:refresh-shortcuts]]]}))

(rf/reg-event-fx
 :restore-game
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]}]
   {:db local-store
    :fx [[:dispatch [:timer/start-heartbeat]]
         [:dispatch [:refresh-shortcuts]]]}))


;; PLAYER SELECT ====================================================================

(rf/reg-event-db
 :save-name
 (fn [db [_ position name]]
   (db/update-name db position name)))

;; GAME ====================================================================

(rf/reg-event-fx
 :start-game
 [(rf/inject-cofx :now)]
 (fn [{:keys [db now]} _]
   {:db (-> db
            (db/start-game now))
    :fx [[:dispatch [:round/start]]]}))


;; ROUND ====================================================================

(rf/reg-event-fx
 :round/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/start-round now)
                    (db/start-strategy now))]
     {:db new-db
      :fx (short/update-hotkeys new-db)})))


(rf/reg-event-fx
 :round/end
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-agenda now)
                    (db/end-round))]
     {:db new-db
      :fx (short/update-hotkeys new-db)})))

;; STRATEGY ====================================================================

(rf/reg-event-db
 :strategy/set
 (fn [db [_ position initiative]]
   (db/set-strategy db position initiative)))

(rf/reg-event-db
 :strategy/unset
 (fn [db [_ position]]
   (db/unset-strategy db position)))

;; ACTION ====================================================================

(rf/reg-event-fx
 :action/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-strategy now)
                    (db/start-action now))]
     {:db new-db
      :fx (short/update-hotkeys new-db)})))

(rf/reg-event-fx
 :action/next-turn
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/next-turn db now)}))

(rf/reg-event-fx
 :action/toggle-turn
 (fn [{:keys [:db]} _]
   (if (db/all-paused? db)
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

;; STATUS ====================================================================

(rf/reg-event-fx
 :status/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-action now)
                    (db/start-status now))]
     (merge
      {:db new-db
       :fx (short/update-hotkeys new-db)}))))

;; AGENDA ====================================================================

(rf/reg-event-fx
 :agenda/start
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-status now)
                    (db/start-agenda now))]
     (merge
      {:db new-db
       :fx (short/update-hotkeys new-db)}))))




