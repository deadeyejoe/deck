(ns authority.db)

;; UTIL ========================================================

(defn event [state now action]
  (merge
   (select-keys state [:state :round/phase :round/number])
   {:time now
    :action action}))

(defn player-event [state now action]
  (let [current-player (:action/current-player state)]
    (merge
     (select-keys state [:state :round/phase :round/number])
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
  {:state :player-select
   :players {}})

(defn update-name [state position name]
  (if (empty? name)
    (update state :players dissoc position)
    (assoc-in state [:players position] {:position position
                                         :name name})))

(defn start-game [state now]
  (assoc state
         :state :game-round
         :game/start now
         :stream (list (event state now :start))
         :positions (-> state :players keys sort)))

(defn start-round [state now]
  (-> state
      (assoc :round/start now
             :round/stream '())
      (update :round/number inc)))

(defn end-round [state]
  (-> state
      (update :stream conj (:round/stream state))
      (assoc :round/phase :round-summary)))

;; STRATEGY ========================================================

(defn reset-initiative [players]
  (transform-values players #(dissoc % :initiative)))

(defn start-strategy [state now]
  (-> state
      (assoc :round/phase :strategy-phase
             :phase/start now)
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
      (assoc :round/phase :action-phase
             :round/initiative-order (-> state :players in-initiative-order)
             :phase/start now)
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
      (assoc :round/phase :status-phase
             :phase/start now)
      (push-round-event now :start)))

(defn end-status [state now]
  (-> state
      (dissoc :round/initiative-order)
      (push-round-event now :end)))

;;  AGENDA

(defn start-agenda [state now]
  (-> state
      (assoc :round/phase :agenda-phase
             :phase/start now)
      (push-round-event now :start)))

(defn end-agenda [state now]
  (push-round-event state now :end))