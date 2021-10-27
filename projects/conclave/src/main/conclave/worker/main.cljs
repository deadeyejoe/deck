(ns conclave.worker.main
  (:require [conclave.worker.instance :as worker]))

(defn main []
  (worker/register :generate (fn [arguments] arguments))
  (worker/bootstrap))