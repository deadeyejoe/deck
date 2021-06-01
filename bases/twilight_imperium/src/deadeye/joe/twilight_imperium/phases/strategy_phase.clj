(ns deadeye.joe.twilight-imperium.phases.strategy-phase
  (:require [deadeye.joe.action.interface :as action]
            [deadeye.joe.choice.interface :as choice]
            [deadeye.joe.pack.interface :as pack]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.twilight-imperium.game.state :as ti.state]
            [deadeye.joe.twilight-imperium.game.pack :as ti.pack]))

(def strategy-phase (phase/build :strategy-phase "Strategy Phase"))

(defn strategy-choices [state]
  (let [speaker (ti.state/speaker state)
        speaker-order (ti.state/order-from-position state speaker)
        player-spaces (ti.state/player-spaces state speaker-order)]
    (mapv (fn [player-space] {:action/name :choice-point
                              :choice/name :choose-strategy
                              :parameter/player (:player/id player-space)})
          player-spaces)))

(defmethod action/apply :strategy-phase/setup [_ state]
  (-> state
      (state/push-phase strategy-phase)
      (state/push-action {:action/name :strategy-phase/check-finished})
      (state/push-action (strategy-choices state))))

(defn strategy-option [player-id card]
  {:action/name :pick-strategy
   :parameter/player player-id
   :parameter/card card})

(defmethod choice/generate :choose-strategy [choice state]
  (let [player-id (:parameter/player choice)
        cards (get-in state [:common :strategy :panel :pack/cards])]
    {:choice/name :choose-strategy
     :choice/type :pick-one
     :choice/options (mapv (partial strategy-option player-id) cards)}))

(defmethod action/apply :pick-strategy [action state]
  (let [{player :parameter/player
         chosen-card :parameter/card} action]
    (ti.pack/move-card state
                       [:common :strategy :panel]
                       [player :strategy :hand]
                       #{chosen-card})))

(defmethod action/apply :strategy-phase/check-finished [_ state]
  (let [player-count (-> state (:state/players) (count))
        round (-> state (state/current-phase) (:phase/round))]
    (if (or (< 4 player-count) round)
      (state/pop-phase state)
      (-> state
          (state/update-phase phase/increment-round)
          (state/push-action {:action/name :strategy-phase/check-finished})
          (state/push-action (strategy-choices state))))))
