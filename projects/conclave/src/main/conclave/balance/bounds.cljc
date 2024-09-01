(ns conclave.balance.bounds
  "Calculate possible bounds of scores given a set of tiles"
  (:require [conclave.aggregate.tile-list :as tile-list]
            [conclave.tiles.core :as tile]))

(def default-quantity-kws [:planets :resources :optimal-resources :influence :optimal-influence])

(defn list->bounds-for-score
  "Takes a score keyword, a desired number of tiles, and a tile set, and returns a map with 
   the lower and upper bounds of the score when choosing the desired number of tiles from the set."
  [score-kw desired-number tile-list]
  (let [total (count tile-list)
        ordered-quantity (tile-list/ordered-scores score-kw tile-list)]
    {:lower (apply + (drop (- total desired-number) ordered-quantity))
     :upper (apply + (take desired-number ordered-quantity))}))

(defn enriched-bounds [{:keys [lower upper] :as basic-bounds}]
  (let [extent (- upper lower)
        increment (Math/floor (* extent 0.15))
        midpoint (+ lower
                    (quot extent 2))
        epsilon (max 1 (quot increment 2))]
    (assoc basic-bounds
           :extent extent
           :midpoint midpoint
           :increment increment
           :balance-range [(- midpoint epsilon) (+ midpoint epsilon)]
           :favour-range [(+ midpoint epsilon) (+ midpoint epsilon increment)]
           :extreme-range [(+ midpoint epsilon increment) upper])))

(defn- list->bounds-score
  [score-kw {number-of-red :red number-of-blue :blue :as _type-counts} tile-list]
  (let [{possible-red :red possible-blue :blue} (group-by tile/type-kw tile-list)]
    (-> (merge-with +
                    (list->bounds-for-score score-kw number-of-red possible-red)
                    (list->bounds-for-score score-kw number-of-blue possible-blue))
        (enriched-bounds)
        (assoc :score score-kw))))

(defn list->bounds [type-counts tile-list]
  (reduce (fn [acc score-kw]
            (assoc acc score-kw (list->bounds-score score-kw type-counts tile-list)))
          {}
          default-quantity-kws))
