(ns deadeye.joe.twilight-imperium.table
  (:require [deadeye.joe.table.interface :as table]
            [deadeye.joe.twilight-imperium.websocket :as ws]))

(defonce tables (atom {}))
(defonce user->tables (atom {}))

(defmethod ws/handle-ws-message :create-table [message]
  (let [{:keys [:table/name]} message]))

(defmethod ws/handle-ws-message :join-table [message])

(defmethod ws/handle-ws-message :leave-table [message])