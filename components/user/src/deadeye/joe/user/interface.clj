(ns deadeye.joe.user.interface
  (:require [deadeye.joe.user.core :as core]))

(defn hello [name]
  (core/hello name))