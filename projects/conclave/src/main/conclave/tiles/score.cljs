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

(def default-anomaly-scores
  {:asteroid-field 2
   :gravity-rift 1.5
   :nebula 1.5
   :supernova 5
   :empty 1.2})

(defn anomaly [tile]
  (get default-anomaly-scores
       (cond (:anomaly tile) (:anomaly tile)
             (core/red? tile) :empty)
       0))

(defn tile-share [tile]
  {:share/resource  (:total/resources tile)
   :share/influence  (:total/influence tile)
   :share/tech  (count (:total/specialty tile))
   :share/cultural  (:total/cultural tile)
   :share/industrial  (:total/industrial tile)
   :share/hazardous  (:total/hazardous tile)
   :share/legendary (if (:legendary tile) 1 0)
   :share/anomaly (anomaly tile)})