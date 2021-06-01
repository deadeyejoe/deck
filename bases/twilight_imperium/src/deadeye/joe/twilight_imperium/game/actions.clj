(ns deadeye.joe.twilight-imperium.game.actions
  (:require [deadeye.joe.player.interface :as player]
            [deadeye.joe.role.interface :as role]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.action.interface :as action]
            [deadeye.joe.choice.interface :as choice]
            [deadeye.joe.twilight-imperium.game.state :as ti.state]
            [deadeye.joe.twilight-imperium.game.player :as ti.player]))

;; COMMON ACTIONS ====================================


(defmethod choice/generate :choose-speaker [_ state]
  (let [is-setup-phase? (-> state (state/current-phase) (:phase/id) (= :setup-phase))
        eligible-players (cond-> (:state/players state)
                           is-setup-phase? (remove ti.player/is-speaker?))
        build-choice (fn [player] {:action/name :set-speaker
                                   :parameter/player (:player/id player)})]
    {:choice/type :pick-one
     :choice/name :choose-speaker
     :choice/options (mapv build-choice eligible-players)}))

(defmethod action/apply :set-speaker [action state]
  (let [new-speaker-id (:parameter/player action)]
    (reduce (fn [state player-id]
              (if (= new-speaker-id player-id)
                (update state player-id ti.player/add-speaker)
                (update state player-id ti.player/remove-speaker)))
            state
            (state/player-ids state))))

(comment
  (action/apply {:action/name :set-speaker :parameter/player 1}
                {:state/players [{:player/id 1} {:player/id 2}]
                 1 {:name "boo"}
                 2 {:role/speaker true}}))

(defmethod action/apply :pop-phase [_ state]
  (state/pop-phase state))