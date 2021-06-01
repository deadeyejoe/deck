(ns deadeye.joe.table.interface
  (:require [deadeye.joe.table.core :as core]))

(defn build [name] (core/build name))
(defn join [table user] (core/join table user))
(defn user-ids [table] (core/user-ids table))