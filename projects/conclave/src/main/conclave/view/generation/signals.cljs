(ns conclave.view.generation.signals
  (:require [conclave.components.signal :as signal]))

(def help ::help)
(def open ::open)
(def suppress-text ::suppress)

(defn show-help []
  (signal/>flash! suppress-text true 100)
  (signal/>toggle! help))

(defn hide-help []
  (signal/>flash! suppress-text true 100)
  (signal/>toggle! help))

(defn close-pane []
  (signal/>toggle! open)
  (signal/>unset! help))
