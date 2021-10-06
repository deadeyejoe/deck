(ns authority.event-handlers
  (:require [re-frame.core :as rf]
            [re-pressed.core :as rp]
            [day8.re-frame.undo :refer [undoable]]
            [authority.db :as db]
            [authority.shortcuts :as short]))

;; UTIL ====================================================================

(rf/reg-event-fx
 :refresh-shortcuts
 (fn [{db :db} _event]
   {:fx (short/update-hotkeys db)}))

;; INIT ====================================================================

(rf/reg-event-fx
 :initialize
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]} _event]
   (if local-store
     {:db (merge (db/init) {:game/state :restore})
      :fx [[:dispatch [::rp/add-keyboard-event-listener "keyup"]]]}
     {:fx [[:dispatch [:new-game]]
           [:dispatch [::rp/add-keyboard-event-listener "keyup"]]]})))

(rf/reg-event-fx
 :new-game
 (fn [_context _event]
   {:db (db/init)
    :persist-local nil
    :fx [[:dispatch [:refresh-shortcuts]]]}))

(rf/reg-event-fx
 :restore-game
 [(rf/inject-cofx :local-store)]
 (fn [{:keys [:local-store]} _event]
   {:db local-store
    :fx [[:dispatch [:refresh-shortcuts]]]}))


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

;; TIMERS ====================================================================

(rf/reg-event-fx
 :timer/toggle-all
 (fn [{:keys [:db]} _]
   (if (db/all-paused? db)
     {:fx [[:dispatch [:timer/resume-all]]]}
     {:fx [[:dispatch [:timer/pause-all]]]})))

(rf/reg-event-fx
 :timer/pause-all
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/pause-turn db now)}))

(rf/reg-event-fx
 :timer/resume-all
 [(rf/inject-cofx :now)]
 (fn [{:keys [:db :now]} _]
   {:db (db/resume-turn db now)}))

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
 [(rf/inject-cofx :now) (undoable "End Round")]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-agenda now)
                    (db/end-round))]
     {:db new-db
      :fx (short/update-hotkeys new-db)})))

;; STRATEGY ====================================================================

(rf/reg-event-db
 :strategy/set
 [(undoable "Pick Strategy")]
 (fn [db [_ position initiative]]
   (db/set-strategy db position initiative)))

(rf/reg-event-db
 :strategy/unset
 [(undoable "Unpick Strategy")]
 (fn [db [_ position]]
   (db/unset-strategy db position)))

;; ACTION ====================================================================

(rf/reg-event-fx
 :action/start
 [(rf/inject-cofx :now) (undoable "Start Action Phase")]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-strategy now)
                    (db/start-action now))]
     {:db new-db
      :fx (short/update-hotkeys new-db)})))

(defn next-turn-handler [{:keys [:db :now]} _]
  {:db (db/next-turn db now)})

(rf/reg-event-fx
 :action/next-turn
 [(rf/inject-cofx :now) (undoable "Next Turn")]
 next-turn-handler)

(rf/reg-event-fx
 :action/next-turn-suppress
 [(rf/inject-cofx :now)]
 next-turn-handler)

(rf/reg-event-fx
 :action/pass
 [(rf/inject-cofx :now) (undoable "Pass")]
 (fn [{:keys [:db :now]} _]
   (let [new-db (db/pass db now)
         current-player (db/current-player new-db)
         next-player (db/next-player new-db current-player)]
     (if (some? next-player)
       {:db new-db
        :fx [[:dispatch [:action/next-turn-suppress]]]}
       {:db new-db
        :fx [[:dispatch [:status/start-suppress]]]}))))

;; STATUS ====================================================================

(defn status-start-handler [{:keys [:db :now]} _]
  (let [new-db (-> db
                   (db/end-action now)
                   (db/start-status now))]
    {:db new-db
     :fx (short/update-hotkeys new-db)}))

(rf/reg-event-fx
 :status/start
 [(rf/inject-cofx :now) (undoable "Start Status")]
 status-start-handler)

(rf/reg-event-fx
 :status/start-suppress
 [(rf/inject-cofx :now)]
 status-start-handler)

;; AGENDA ====================================================================

(rf/reg-event-fx
 :agenda/start
 [(rf/inject-cofx :now) (undoable "Start Agenda")]
 (fn [{:keys [:db :now]} _]
   (let [new-db (-> db
                    (db/end-status now)
                    (db/start-agenda now))]
     (merge
      {:db new-db
       :fx (short/update-hotkeys new-db)}))))




