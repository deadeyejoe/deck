(ns conclave.generate.balance
  (:require [conclave.tiles.set :as tile-set]))

(defn within? [epsilon x y]
  (<= (Math/abs (- x y))
      epsilon))

(defn balanced-tile-set-pred [type-counts available-tiles]
  (let [{res-epsilon :epsilon} (tile-set/bounds-for-quantity type-counts :optimal-resources available-tiles)
        {inf-epsilon :epsilon} (tile-set/bounds-for-quantity type-counts :optimal-influence available-tiles)
        effective-epsilon (max res-epsilon inf-epsilon)]
    (fn [{:keys [optimal-resources optimal-influence]}]
      (within? effective-epsilon optimal-resources optimal-influence))))

(defn favour-tile-set-pred [quantity-kw type-counts available-tiles]
  (let [{:keys [midpoint epsilon increment]} (tile-set/bounds-for-quantity type-counts quantity-kw available-tiles)
        lower (+ midpoint epsilon)
        upper (+ lower increment)]
    (fn [tile-set]
      (< lower
         (tile-set/sum-quantity quantity-kw tile-set)
         upper))))

(defn extreme-tile-set-pred [quantity-kw type-counts available-tiles]
  (let [{:keys [midpoint epsilon increment]} (tile-set/bounds-for-quantity type-counts quantity-kw available-tiles)
        lower (+ midpoint epsilon increment)]
    (fn [tile-set]
      (<= lower
          (tile-set/sum-quantity quantity-kw tile-set)))))

(defn tile-set-pred [option type-counts available-tiles]
  ((case option
     :extreme-resource (partial extreme-tile-set-pred :optimal-resources)
     :favour-resource (partial favour-tile-set-pred :optimal-resources)
     :balanced balanced-tile-set-pred
     :favour-influence (partial favour-tile-set-pred :optimal-influence)
     :extreme-influence (partial extreme-tile-set-pred :optimal-influence)
     balanced-tile-set-pred)
   type-counts available-tiles))
