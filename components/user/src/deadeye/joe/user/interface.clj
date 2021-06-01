(ns deadeye.joe.user.interface
  (:require [deadeye.joe.user.core :as core]))

(defn build
  ([identifier] (core/build identifier))
  ([identifier name] (core/build identifier name)))

(defn join-table [user table]
  (core/join-table user table))

(defn random-name [] (core/random-name))
