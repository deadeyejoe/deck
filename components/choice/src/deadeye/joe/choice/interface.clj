(ns deadeye.joe.choice.interface
  (:require [deadeye.joe.choice.core :as core]))

(def generate core/generate-choice)
(def validate core/validate-choice)