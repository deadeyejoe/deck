(ns conclave.tiles.set
  (:require [conclave.tiles.core :as core]
            [deck.random.interface :as random]))

(def pok-standard core/default-pok)
(def base-standard core/default-base-game)
(def quantity-kws [:planets :resources :optimal-resources :influence :optimal-influence])

(defn- ordered-quantities [tiles quantity]
  (->> tiles
       (map #(get-in % [:total quantity]))
       (sort >)))

(defn- basic-bounds-for [desired-number quantity-kw available-tiles]
  (let [total (count available-tiles)
        ordered-quantity (ordered-quantities available-tiles quantity-kw)]
    {:lower (apply + (drop (- total desired-number) ordered-quantity))
     :upper (apply + (take desired-number ordered-quantity))}))

(defn- enriched-bounds [{:keys [lower upper] :as basic-bounds}]
  (let [extent (- upper lower)
        increment (Math/floor (* extent 0.15))]
    (assoc basic-bounds
           :extent extent
           :midpoint (+ lower
                        (quot extent 2))
           :increment increment
           :epsilon (max 1 (quot increment 2)))))

(defn bounds-for-quantity [{number-of-red :red number-of-blue :blue :as _type-counts}
                           quantity-kw
                           tile-set]
  (let [{possible-red :red possible-blue :blue} (group-by core/type-kw tile-set)]
    (enriched-bounds (merge-with +
                                 (basic-bounds-for number-of-red quantity-kw possible-red)
                                 (basic-bounds-for number-of-blue quantity-kw possible-blue)))))

(defn bounds [type-counts
              tile-set]
  (->> quantity-kws
       (map (fn [quantity-kw]
              [quantity-kw
               (bounds-for-quantity type-counts quantity-kw tile-set)]))
       (into {})))

(defn sum-quantity [quantity-kw tiles]
  (->> tiles
       (map #(get-in % [:total quantity-kw]))
       (apply +)))

(defn sum-optimal-res-inf [tiles]
  {:optimal-resources (sum-quantity :optimal-resources tiles)
   :optimal-influence (sum-quantity :optimal-influence tiles)})

(defn ^:lazy samples [{number-red :red number-blue :blue :as _type-counts} tile-set]
  (let [{possible-red :red possible-blue :blue} (group-by core/type-kw tile-set)]
    (map concat
         (random/sample-generator number-red (random/random-seed) possible-red)
         (random/sample-generator number-blue (random/random-seed) possible-blue))))
