(ns deadeye.joe.deck.interface
  (:require [deadeye.joe.deck.core :as core]))

(defn create
  ([id cards] (core/create id cards))
  ([id cards & opts]
   (apply core/create id cards opts)))

(defn remaining [deck] (core/remaining deck))
(defn reshuffle [deck] (core/reshuffle deck))
(defn draw
  ([deck] (core/draw deck))
  ([deck n] (core/draw deck n)))

(defn refresh [deck] (core/refresh deck))
(defn draw-refresh [deck n] (core/draw-refresh deck n))
