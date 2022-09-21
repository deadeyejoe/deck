(ns conclave.layout.core
  (:require [clojure.math.combinatorics :as combi]))

(def fixed-coordinates (comp set keys :fixed-tiles))
(def hyperlane-coordinates (comp set keys :hyperlane-tiles))
(def home-coordinates (comp set keys :home-tiles))

(defn mutual-distances [{:keys [distances] :as _layout} coordinates]
  (->> (combi/combinations coordinates 2)
       (keep (partial get-in distances))))

(defn player-keys [layout]
  (->> layout
       :home-tiles
       vals
       (map :key)
       sort))

(defn player-count [layout]
  (-> layout :home-tiles count))

(def bounded-coordinates
  "Coordinates that are part of the map"
  :bounded-coordinates)

(def active-coordinates
  "Coordinates that are navigable by players"
  :active-coordinates)

(def static-coordinates
  "Active coordinates that aren't subject to balancing"
  :static-coordinates)

(def free-coordinates
  "Active coordinates that are subject to balancing"
  :free-coordinates)

(defn neighbours
  "A map from coordinates to coordinates immediately beside them on the map. 
   Includes active coordinates only"
  [{:keys [neighbours] :as _layout} coordinate]
  (get neighbours coordinate))

(defn adjacents
  "A map from coordinates to coordinates adjacent to them (e.g. via hyperlane).
   Includes active coordinates only"
  [{:keys [adjacents] :as _layout} coordinate]
  (get adjacents coordinate))
