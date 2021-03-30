(ns deadeye.joe.ordering.interface
  (:require (deadeye.joe.ordering.core :as core)))

(defn shuffle [orderable] (core/shuffle orderable))
(defn position [orderable starting] (core/position orderable starting))
