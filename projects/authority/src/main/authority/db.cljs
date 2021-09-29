(ns authority.db
  (:require [authority.timer.db :as timer-db]))

;; UTIL ========================================================

(defn event [state now action]
  (merge
   (select-keys state [:game/state :round/phase :round/number])
   {:time now
    :action action}))

(defn player-event [state now action]
  (let [current-player (:action/current-player state)]
    (merge
     (select-keys state [:game/state :round/phase :round/number])
     {:time now
      :player (:name current-player)
      :position (:position current-player)
      :action action})))

(defn push-event [state event]
  (update state :stream conj event))

(defn push-round-event [state time action]
  (update state :round/stream conj (event state time action)))

(defn push-player-event [state time action]
  (update state :round/stream conj (player-event state time action)))

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
             :stream (list (event state now :start))
             :positions (-> state :players keys sort))
      (timer-db/create now {:id :game :label "Game"})))

(defn start-round [state now]
  (-> state
      (assoc :round/start now
             :round/stream '())
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
      (timer-db/create now {:id :phase :label "Phase"})))

;; STRATEGY ========================================================

(defn reset-initiative [players]
  (transform-values players #(dissoc % :initiative)))

(defn start-strategy [state now]
  (-> state
      (start-phase :strategy-phase now)
      (push-round-event now :start)
      (update :players reset-initiative)))

(defn set-strategy [state position initiative]
  (assoc-in state [:players position :initiative] initiative))

(defn unset-strategy [state position]
  (update-in state [:players position] dissoc :initiative))

(defn end-strategy [state now]
  (push-round-event state now :end))

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
      (assoc :round/initiative-order (-> state :players in-initiative-order))
      (push-round-event now :start)))

(defn first-action [state now]
  (let [current (-> state :round/initiative-order first)]
    (-> state
        (assoc :action/current-player current)
        (push-player-event now :start))))

(defn next-turn [state now]
  (let [current-player (:action/current-player state)
        next-player (next-player state current-player)]
    (-> state
        (push-player-event now :end)
        (assoc :action/current-player next-player)
        (push-player-event now :start))))

(defn pause-turn [state now]
  (push-player-event state now :pause))

(defn resume-turn [state now]
  (push-player-event state now :resume))

(defn end-action [state now]
  (-> state
      (push-round-event now :end)
      (dissoc :action/current-player)))

;;  STATUS

(defn start-status [state now]
  (-> state
      (start-phase :status-phase now)
      (push-round-event now :start)))

(defn end-status [state now]
  (-> state
      (dissoc :round/initiative-order)
      (push-round-event now :end)))

;;  AGENDA

(defn start-agenda [state now]
  (-> state
      (start-phase :agenda-phase now)
      (push-round-event now :start)))

(defn end-agenda [state now]
  (push-round-event state now :end))