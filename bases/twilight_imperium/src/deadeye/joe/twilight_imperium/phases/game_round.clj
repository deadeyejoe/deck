(ns deadeye.joe.twilight-imperium.phases.game-round
  (:require [deadeye.joe.twilight-imperium.phases.strategy-phase]
            [deadeye.joe.twilight-imperium.phases.action-phase]
            [deadeye.joe.twilight-imperium.phases.status-phase]
            [deadeye.joe.action.interface :as action]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]))

(def game-round (phase/build :game-round "Game Round" {:phase/round 1}))

(def round-actions [{:action/name :strategy-phase/setup}
                    {:action/name :action-phase/setup}
                    {:action/name :status-phase/setup}
                    {:action/name :game-round/check-finished}])

(defmethod action/apply :game-round/setup [_ state]
  (-> state
      (state/push-phase game-round)
      (state/push-action round-actions)))

(defmethod action/apply :game-round/check-finished [_ state]
  (if (-> state (state/current-phase) (:phase/round) (= 10))
    (state/pop-phase state)
    (-> state
        (state/update-phase phase/increment-round)
        (state/push-action round-actions))))
