(ns deadeye.joe.choice.core
  (:require [deadeye.joe.action.interface :as action]))

(defn build [type opts]
  (merge {:choice/type type}))

;; GENERATE

(defn resolve [action _]  (:choice/name action))

(defmulti generate-choice #'resolve)

(defmethod generate-choice :default [action _]
  (println action)
  (throw (IllegalArgumentException. "Unrecognized option")))

(defmethod action/apply :choice-point [action state]
  (let [choice (or (:action/choice action)
                   (generate-choice action state))]
    (assoc state :state/choice choice)))

(defmethod action/apply :confirm [_ state] state)

;; VALIDATE

(defn resolve-from-state [chosen-action state] (get-in state [:state/choice :choice/name]))

(defmulti validate-choice #'resolve-from-state)

(defn match-option? [from-player from-state]
  (every? (fn [[k v]] (= (from-player k) v)) from-state))

(comment
  (match-option? {:id 1 :name "Blah"} {:id 1 :name "Blah"})
  (match-option? {:id 1 :name "Blah"} {:id 2 :name "Blah"})
  (match-option? {:id 1 :name "Blah"} {:id 1 :name "Bleh"}))

(defmethod validate-choice :default [chosen-action state]
  (let [options (get-in state [:state/choice :choice/options])
        match (partial match-option? chosen-action)]
    (when (not-any? match options)
      "Chosen action does not match the options")))
