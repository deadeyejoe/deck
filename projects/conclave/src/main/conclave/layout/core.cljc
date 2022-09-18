(ns conclave.layout.core
  (:require [clojure.math.combinatorics :as combi]))

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
