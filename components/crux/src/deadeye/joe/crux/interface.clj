(ns deadeye.joe.crux.interface
  (:require [deadeye.joe.crux.core :as core]))

(def node core/node)

(defn create-node [opts] (core/create-node opts))
(defn destroy-node [node] (core/destroy-node node))

(defn start-node [] (core/start-node))
(defn stop-node [] (core/stop-node))
