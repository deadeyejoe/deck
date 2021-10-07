(ns authority.db
  (:require [authority.timer.db :as timer-db]
            [authority.player.db :as player-db]
            [authority.player.core :as player]))

;; LOGGING ========================================================

(defn build-log-event [state action now]
  (let [current-player (:action/current-player state)]
    (merge
     (select-keys state [:game/state :round/phase :round/number])
     {:time now
      :player (:name current-player)
      :position (:position current-player)
      :action action})))

(defn log-event [state action now]
  (update state :stream conj (build-log-event state action now)))

;; SETUP ========================================================

(defn init []
  {:game/state :player-select})

(def update-name player-db/update-name)

(defn start-game [state now]
  (-> state
      (assoc :game/state :game-round
             :game/start now)
      (player-db/lock-positions)
      (timer-db/create now {:id :game :label "Game"})
      (log-event :start now)))

(defn start-round [state now]
  (-> state
      (assoc :round/start now)
      (timer-db/resume-all now)
      (timer-db/create now {:id :round :label "Round"})
      (update :round/number inc)))

(defn end-round [state]
  (-> state
      (assoc :round/phase :round-summary)))

;; PHASE ========================================================

(defn start-phase [state phase now]
  (-> state
      (assoc :round/phase phase
             :phase/start now)
      (log-event :start now)
      (timer-db/resume-all now)
      (timer-db/create now {:id :phase :label "Phase"})))

;; STRATEGY ========================================================

(defn start-strategy [state now]
  (-> state
      (start-phase :strategy-phase now)
      (player-db/update-all player/reset-initiative)))

(defn set-strategy [state position initiative]
  (player-db/update-at state position #(player/update-initiative % initiative)))

(defn unset-strategy [state position]
  (player-db/update-at state position player/reset-initiative))

(defn end-strategy [state now]
  (log-event state :end now))

;; ACTION ========================================================

(defn start-player-turn [state player now]
  (-> state
      (assoc :action/current-player player)
      (timer-db/resume-all now)
      (timer-db/create now {:id :player})
      (log-event :start now)))

(defn end-player-turn [state now]
  (log-event state :end now))

(defn start-action [state now]
  (-> state
      (player-db/lock-initiative)
      (start-phase :action-phase now)
      (start-player-turn (player-db/first-player state) now)))

(defn end-action [state now]
  (-> state
      (player-db/update-all player/ready)
      (dissoc :action/current-player)
      (timer-db/delete :player)
      (log-event :end now)))

(defn current-player [state] (:action/current-player state))
(def next-player player-db/next-player)

(defn next-turn [state now]
  (let [current-player (current-player state)
        next-player (next-player state current-player)]
    (-> state
        (end-player-turn now)
        (dissoc :action/strategizing?)
        (start-player-turn next-player now))))

(defn can-pass? [state]
  (let [{current-position :position} (:action/current-player state)]
    (and (not (:action/strategizing? state))
         (player/strategized? (player-db/find-by state current-position)))))

(defn pass [state now]
  (let [{current-position :position} (:action/current-player state)]
    (if (player/strategized? (player-db/find-by state current-position))
      (-> state
          (player-db/update-at current-position player/pass)
          (log-event :pass now))
      state)))

(defn strategize [state now]
  (let [{current-position :position} (:action/current-player state)]
    (if (or (:action/strategizing? state)
            (-> state (player-db/find-by current-position) player/strategized?))
      state
      (-> state
          (assoc :action/strategizing? true)
          (player-db/update-at current-position player/strategize)
          (log-event :strategize now)))))

(def all-paused? timer-db/all-paused?)

(defn pause-turn [state now]
  (-> state
      (timer-db/pause-all now)
      (log-event :pause now)))

(defn resume-turn [state now]
  (-> state
      (timer-db/resume-all now)
      (log-event :resume now)))

;;  STATUS

(defn start-status [state now]
  (start-phase state :status-phase now))

(defn end-status [state now]
  (log-event state :end now))

;;  AGENDA

(defn start-agenda [state now]
  (start-phase state :agenda-phase now))

(defn end-agenda [state now]
  (log-event state :end now))