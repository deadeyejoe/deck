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

(defn naive-score [tile]
  (+ (:total/resources tile)
     (* (:total/influence tile) 0.667)
     (when (:specialty tile) 1)))

(defn stake? [tile]
  (and (not (core/home? tile))
       (not (core/mecatol? tile))
       (seq (:planets tile))))