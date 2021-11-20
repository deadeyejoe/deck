(ns conclave.tiles.quality
  (:require [conclave.utils :refer [transform-values]]))

(def default-weights
  {:share/resource 8
   :share/influence 6
   :share/tech 4
   :share/cultural 2
   :share/industrial 2
   :share/hazardous 2
   :share/legendary 1})