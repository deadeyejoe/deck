(ns conclave.tiles.score
  (:require [conclave.tiles.core :as core]))

(defn move-cost [tile]
  (case (:anomaly tile)
    :asteroid-field 1.5
    :empty 1.2
    :gravity-rift 1
    :nebula 2
    :supernova 9000.1
    1))