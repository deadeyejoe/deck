(ns deadeye.joe.twilight-imperium.phases.action-phase
  (:require [deadeye.joe.action.interface :as action]
            [deadeye.joe.choice.interface :as choice]
            [deadeye.joe.phase.interface :as phase]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.twilight-imperium.game.state :as ti.state]
            [deadeye.joe.twilight-imperium.game.player :as ti.player]
            [deadeye.joe.twilight-imperium.game.pack :as ti.pack]))

(def action-phase (phase/build :action-phase "Action Phase" {:phase/round 1}))

(defn active-player-ids [state]
  (->> (ti.state/player-spaces state ti.player/initiative)
       (remove :property/passed)
       (map :player/id)))

(defn generate-round [state]
  (map (fn [player-id] {:action/name :choice-point
                        :choice/name :choose-action
                        :parameter/player player-id})
       (active-player-ids state)))

(defmethod action/apply :action-phase/setup [_ state]
  (-> state
      (state/push-phase action-phase)
      (state/push-action (concat
                          (generate-round state)
                          [{:action/name :action-phase/check-finished}
                           {:action/name :action-phase/cleanup}]))))

(defn strategize-action [card]
  {:action/name :action-phase/strategize :parameter/card card})

(defn action-choices [player-id state]
  (let [player-space (state player-id)
        active-cards (->> player-space
                          (ti.player/strategy-cards)
                          (remove :property/exhausted))
        actions [{:action/name :action-phase/act}
                 (map strategize-action active-cards)
                 (when (empty? active-cards) {:action/name :action-phase/pass})]]
    (->> actions
         (flatten)
         (remove nil?)
         (map #(merge % {:parameter/player player-id})))))

(defmethod choice/generate :choose-action [action state]
  (let [player-id (:parameter/player action)]
    {:choice-name :choose-action
     :choice/type :pick-one
     :choice/options (action-choices player-id state)
     :parameter/player player-id}))

(defmethod action/apply :action-phase/act [_ state] state)

(defn same-card? [card other]
  (let [coerce (fn [card] (or (:card/name card) card))]
    (= (coerce card) (coerce other))))

(defmethod action/apply :action-phase/strategize [action state]
  (let [{player-id :parameter/player
         chosen-card :parameter/card} action
        exhaust-card (fn [card] (if (same-card? chosen-card card)
                                  (ti.pack/exhaust card)
                                  card))]
    (update-in state [player-id :strategy :hand :pack/cards]
               (fn [cards] (map exhaust-card cards)))))

(defmethod action/apply :action-phase/pass [action state]
  (let [player-id (:parameter/player action)]
    (update state player-id ti.player/pass)))

(defmethod action/apply :action-phase/check-finished [_ state]
  (let [all-passed? (every? (fn [pspace] (ti.player/passed? pspace))
                            (ti.state/player-spaces state))]
    (if all-passed?
      state
      (state/push-action state (concat
                                (generate-round state)
                                [{:action/name :action-phase/check-finished}])))))

(defmethod action/apply :action-phase/cleanup [_ state]
  (-> (reduce (fn [state player-id] (update state player-id ti.player/unset-pass))
              state
              (state/player-ids state))
      (state/pop-phase)))
