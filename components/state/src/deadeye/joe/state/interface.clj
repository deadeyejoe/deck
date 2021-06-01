(ns deadeye.joe.state.interface
  (:require [deadeye.joe.state.core :as core]))

(def build core/build)

(def current-phase core/current-phase)
(def push-phase core/push-phase)
(def pop-phase core/pop-phase)
(def update-phase core/update-phase)

(def current-action core/current-action)
(def push-action core/push-action)
(def pop-action core/pop-action)

(def player-ids core/player-ids)

(def choice-point core/choice-point)

(def advance core/advance)
(def advance-to-choice core/advance-to-choice)