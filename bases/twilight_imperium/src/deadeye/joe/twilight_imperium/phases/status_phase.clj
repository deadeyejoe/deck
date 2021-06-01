(ns deadeye.joe.twilight-imperium.phases.status-phase
  (:require [deadeye.joe.action.interface :as action]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.pack.interface :as pack]
            [deadeye.joe.twilight-imperium.game.state :as ti.state]
            [deadeye.joe.twilight-imperium.game.player :as ti.player]

            [deadeye.joe.twilight-imperium.game.pack :as ti.pack]))

(def status-phase (phase/build :status-phase "Status Phase"))

(def confirm-steps [:status-phase/score-objectives
                    :status-phase/reveal-objectives
                    :status-phase/draw-action-cards
                    :status-phase/remove-command-tokens
                    :status-phase/gain-command-tokens
                    :status-phase/ready-cards
                    :status-phase/repair-units])

(defn confirm-choice [step]
  {:action/name :choice-point
   :action/choice {:choice/type :confirm
                   :choice/name step
                   :choice/options [{:action/name step}]}})

(defmethod action/apply :status-phase/setup [_ state]
  (-> state
      (state/push-phase status-phase)
      (state/push-action (map confirm-choice confirm-steps)
                         {:action/name :status-phase/return-strategy-cards}
                         {:action/name :pop-phase})))

(defmethod action/apply :status-phase/score-objectives [action state] state)
(defmethod action/apply :status-phase/reveal-objectives [action state] state)
(defmethod action/apply :status-phase/draw-action-cards [action state] state)
(defmethod action/apply :status-phase/remove-command-tokens [action state] state)
(defmethod action/apply :status-phase/gain-command-tokens [action state] state)
(defmethod action/apply :status-phase/ready-cards [action state] state)
(defmethod action/apply :status-phase/repair-units [action state] state)

(defmethod action/apply :status-phase/return-strategy-cards [_ state]
  (let [returned-cards (->> state
                            (ti.state/player-spaces)
                            (map #(get-in % [:strategy :hand :pack/cards]))
                            (flatten)
                            (ti.pack/ready-all))
        empty-hand #(assoc-in % [:strategy :hand :pack/cards] [])]
    (-> state
        (ti.state/update-players empty-hand)
        (update-in [:common :strategy :panel] (fn [pack] (->> (reduce pack/add pack returned-cards)
                                                              (pack/sort :property/initiative)))))))



