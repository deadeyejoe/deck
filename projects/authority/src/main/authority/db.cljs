(ns authority.db
  (:require [authority.timer.db :as timer-db]
            [authority.player.db :as player-db]
            [authority.player.core :as player]))

;; LOGGING ========================================================

(defn build-log-event [state action]
  (let [current-player (:action/current-player state)]
    (merge
     (select-keys state [:game/state :round/phase :round/number])
     {:time (:heartbeat state)
      :player (:name current-player)
      :position (:position current-player)
      :action action})))

(defn log-event [state action]
  (update state :stream conj (build-log-event state action)))

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
      (log-event :start)))

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
      (log-event :start)
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
  (log-event state :end))

;; ACTION ========================================================

(defn start-player-turn [state player now]
  (-> state
      (assoc :action/current-player player)
      (timer-db/resume-all now)
      (timer-db/create now {:id :player})
      (log-event :start)))

(defn end-player-turn [state]
  (log-event state :end))

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
      (log-event :end)))

(defn current-player [state] (:action/current-player state))
(def next-player player-db/next-player)

(defn next-turn [state now]
  (let [current-player (current-player state)
        next-player (next-player state current-player)]
    (-> state
        (end-player-turn)
        (start-player-turn next-player now))))

(defn pass [state now]
  (let [current-player (:action/current-player state)]
    (-> state
        (player-db/update-at (player/position current-player) player/pass)
        (log-event :pass))))

(def all-paused? timer-db/all-paused?)

(defn pause-turn [state now]
  (-> state
      (timer-db/pause-all now)
      (log-event :pause)))

(defn resume-turn [state now]
  (-> state
      (timer-db/resume-all now)
      (log-event :resume)))

;;  STATUS

(defn start-status [state now]
  (start-phase state :status-phase now))

(defn end-status [state now]
  (log-event state :end))

;;  AGENDA

(defn start-agenda [state now]
  (start-phase state :agenda-phase now))

(defn end-agenda [state now]
  (log-event state :end))