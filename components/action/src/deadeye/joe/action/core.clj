(ns deadeye.joe.action.core)

(defn resolve-action [action _]
  (:action/name action))

(defmulti apply-action #'resolve-action)

(defmethod apply-action :default [action state]
  (println (str "Unknown action name: " action))
  state)