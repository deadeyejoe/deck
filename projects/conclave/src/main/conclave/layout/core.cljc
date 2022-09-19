(ns conclave.layout.core
  (:require [clojure.math.combinatorics :as combi]))

(def fixed-coordinates (comp set keys :fixed-tiles))
(def hyperlane-coordinates (comp set keys :hyperlane-tiles))
(def home-coordinates (comp set keys :home-tiles))

(defn neighbours [{:keys [neighbours] :as layout} coordinate]
  (get neighbours coordinate))

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
