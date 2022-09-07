(ns deck.interceptor.interface
  (:require [deck.interceptor.core :as core]))

(defn executions [context interceptors]
  (core/executions context interceptors))

(defn execute [context interceptors]
  (core/execute context interceptors))
