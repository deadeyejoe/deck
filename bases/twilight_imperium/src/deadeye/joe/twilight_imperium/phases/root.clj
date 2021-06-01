(ns deadeye.joe.twilight-imperium.phases.root
  (:require [deadeye.joe.action.interface :as action]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.choice.interface :as choice]))

(def root-phase (phase/build :root))

(defmethod action/apply :root/setup [_ state]
  (-> state
      (state/push-phase root-phase)
      (state/push-action {:action/name :choice-point :choice/name :choose-positions}
                         {:action/name :choice-point :choice/name :choose-speaker}
                         {:action/name :game-round/setup}
                         {:action/name :end-game})))

(defmethod choice/generate :choose-positions [_ state]
  {:choice/type :order
   :choice/name :choose-positions
   :choice/options [{:action/name :set-positions
                     :parameter/ordering (state/player-ids state)}]})

(defmethod choice/validate :choose-positions [action state]
  (let [player-set (into #{} (state/player-ids state))]
    (when (not-every? player-set (:parameter/ordering action))
      "Some players are missing from ordering")))

(defmethod action/apply :set-positions [action state]
  (let [ordering (vec (:parameter/ordering action))
        set-position (fn [state position player-id]
                       (assoc-in state [player-id :player/position] position))]
    (reduce-kv set-position state ordering)))

(defmethod action/apply :end-game [_ state]
  (assoc state :state/action-stack '()))