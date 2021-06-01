(ns deadeye.joe.utility.interface
  (:require [deadeye.joe.utility.core :as core]
            [deadeye.joe.utility.words :as words]))

(defn uuid [] (core/uuid))

(def random-name core/random-name)

(def kv-match core/kv-match)

(def words words/list)