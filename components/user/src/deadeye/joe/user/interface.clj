(ns deadeye.joe.user.interface
  (:require [deadeye.joe.user.core :as core]))

(defn build
  ([identifier] (core/build identifier))
  ([identifier name] (core/build identifier name)))

(defn random-name [] (core/random-name))
