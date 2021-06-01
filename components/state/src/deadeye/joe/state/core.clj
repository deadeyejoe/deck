(ns deadeye.joe.state.core
  (:require [deadeye.joe.action.interface :as action]
            [deadeye.joe.choice.interface :as choice]))

(defn build
  ([] {:state/phase-stack '()
       :state/action-stack '()})
  ([players] (merge (build) {:state/players players})))

(defn player-ids [state]
  (map :player/id (:state/players state)))

(defn current-phase [state] (-> state (:state/phase-stack) first))

(defn current-action [state] (-> state (:state/action-stack) first))

(defn push-phase [state phase]
  (update state :state/phase-stack conj phase))

(defn update-phase [state f]
  (let [[current & rest] (:state/phase-stack state)]
    (assoc state :state/phase-stack (conj rest (f current)))))

(defn pop-phase [state]
  (update state :state/phase-stack rest))

(defn push-action
  ([state action]
   (if ((complement map?) action)
     (update state :state/action-stack #(concat action %))
     (update state :state/action-stack conj action)))
  ([state action & actions]
   (push-action state (flatten (cons action actions)))))

(defn pop-action [state]
  (let [[next-action & rest-actions] (:state/action-stack state)]
    [next-action
     (assoc state :state/action-stack rest-actions)]))

(defn choice-point [state] (-> state
                               (contains? :state/choice)))

(defn halt? [state] (empty? (:state/action-stack state)))

(defn advance
  ([state] (advance state (constantly nil)))
  ([state state-log]
   (if (or (choice-point state) (halt? state))
     state
     (let [[action state] (pop-action state)]
       (state-log action state)
       (action/apply action state)))))

(defn advance-to-choice
  ([state] (advance-to-choice state (constantly nil)))
  ([state state-log]
   (loop [current-state state]
     (cond
       (choice-point current-state) current-state
       (halt? current-state) current-state
       :else (recur (advance current-state state-log))))))

(defn process-choice [state chosen-action]
  (let [errors (choice/validate chosen-action state)]
    (if (empty? errors)
      (-> state
          (dissoc :state/choice)
          (push-action chosen-action))
      (assoc-in state [:state/choice :errors] errors))))

(defn state-loop [initial-state push pull state-log]
  (loop [state initial-state]
    (cond
      (choice-point state) (do (push state)
                               (recur (process-choice state (pull))))
      (halt? state) (push state)
      :else (recur (advance-to-choice state state-log)))))