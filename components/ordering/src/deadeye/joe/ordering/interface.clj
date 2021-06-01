(ns deadeye.joe.ordering.interface
  (:require [deadeye.joe.ordering.core :as core]))

(defn build
  ([name items] (core/build name items))
  ([name items options] (core/build name items options)))

(defn ping-pong [ordering] (core/ping-pong ordering))

(defn next [ordering] (core/next ordering))

(defn done? [ordering] (core/done? ordering))


