(ns authority.db
  (:require [authority.timer.db :as timer-db]))

;; UTIL ========================================================

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

(defn transform-values [m f]
  (reduce-kv
   (fn [m k v] (assoc m k (f v)))
   {}
   m))

;; SETUP ========================================================

(defn init []
  {:game/state :player-select
   :players {}})

(defn update-name [state position name]
  (if (empty? name)
    (update state :players dissoc position)
    (assoc-in state [:players position] {:position position
                                         :name name})))

(defn start-game [state now]
  (-> state
      (assoc :game/state :game-round
             :game/start now
             :positions (-> state :players keys sort))
      (log-event :start)
      (timer-db/create now {:id :game :label "Game"})))

(defn start-round [state now]
  (-> state
      (assoc :round/start now)
      (timer-db/resume-all now)
      (timer-db/create now {:id :round :label "Round"})
      (update :round/number inc)))

(defn end-round [state]
  (-> state
      (update :stream conj (:round/stream state))
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

(defn reset-initiative [players]
  (transform-values players #(dissoc % :initiative)))

(defn start-strategy [state now]
  (-> state
      (start-phase :strategy-phase now)
      (update :players reset-initiative)))

(defn set-strategy [state position initiative]
  (assoc-in state [:players position :initiative] initiative))

(defn unset-strategy [state position]
  (update-in state [:players position] dissoc :initiative))

(defn end-strategy [state now]
  (log-event state :end))

;; ACTION ========================================================

(defn in-initiative-order [players]
  (->> players
       vals
       (sort-by :initiative)))

(defn player= [player other]
  (= (:position player) (:position other)))

(defn next-player [state current-player]
  (let [order (:round/initiative-order state)]
    (loop [[next & rest] order]
      (if (player= next current-player)
        (or (first rest) (first order))
        (recur rest)))))

(defn start-action [state now]
  (-> state
      (start-phase :action-phase now)
      (assoc :round/initiative-order (-> state :players in-initiative-order))))

(defn start-player-turn [state player now]
  (-> state
      (assoc :action/current-player player)
      (timer-db/resume-all now)
      (timer-db/create now {:id :player})
      (log-event :start)))

(defn first-action [state now]
  (let [current (-> state :round/initiative-order first)]
    (start-player-turn state current now)))

(defn next-turn [state now]
  (let [current-player (:action/current-player state)
        next-player (next-player state current-player)]
    (-> state
        (log-event :end)
        (start-player-turn next-player now))))

(defn pause-turn [state now]
  (-> state
      (timer-db/pause-all now)
      (log-event :pause)))

(defn resume-turn [state now]
  (-> state
      (timer-db/resume-all now)
      (log-event :resume)))

(defn end-action [state now]
  (-> state
      (log-event :end)
      (timer-db/delete :player)
      (dissoc :action/current-player)))

;;  STATUS

(defn start-status [state now]
  (start-phase state :status-phase now))

(defn end-status [state now]
  (-> state
      (dissoc :round/initiative-order)
      (log-event :end)))

;;  AGENDA

(defn start-agenda [state now]
  (start-phase state :agenda-phase now))

(defn end-agenda [state now]
  (log-event state :end))