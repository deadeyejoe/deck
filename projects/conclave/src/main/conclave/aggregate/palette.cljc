(ns conclave.aggregate.palette
  "A data structure to support managing selecting from a set of available tiles"
  (:require [conclave.tiles.core :as tile]
            [conclave.aggregate.tile-list :as tile-list]
            [deck.random.interface :as random]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(defn ->instance [tiles]
  {:available (medley/index-by tile/tile-key tiles)
   :red []
   :blue []})

(defn selected? [{:keys [red blue] :as _palette} tile-or-key]
  (let [key (tile/coerce-to-key tile-or-key)]
    (or (some (comp #{key} tile/tile-key) red)
        (some (comp #{key} tile/tile-key) blue))))

(defn available? [{:keys [available] :as _palette} tile-or-key]
  (contains? available (tile/coerce-to-key tile-or-key)))

(defn contained? [palette tile-or-key]
  (or (selected? palette tile-or-key)
      (available? palette tile-or-key)))

(defn- select-tiles
  "No-op for tiles not included in available"
  [{:keys [available] :as palette} tiles]
  (let [available-to-select (filter (comp available tile/tile-key) tiles)
        {:keys [red blue]} (group-by tile/type-kw available-to-select)]
    (-> palette
        (update :red into red)
        (update :blue into blue)
        (update :available dissoc (tile-list/->key-set available-to-select)))))

(defn select-key [palette key]
  (select-tiles palette [(tile/key->tile key)]))

(defn select-tile [palette tile]
  (select-tiles palette [tile]))

(defn select-by
  "Given a palette and a tile predicate, select available tiles that match the predicate"
  [{:keys [available] :as palette} pred]
  (select-tiles palette (filter pred (vals available))))

(defn ^:lazy sample-remaining [seed existing available target-number]
  (map
   (partial into existing)
   (random/sample-generator (- target-number
                               (count existing))
                            seed
                            available)))

(defn ^:lazy sample-tilesets
  "Selects a number of tiles of each type from the available tiles
   
   Assumes that the type counts are not already exceeded"
  [seed
   {target-red :red target-blue :blue :as _type-counts}
   {:keys [available red blue] :as _palette}]
  (let [{available-red :red available-blue :blue} (->> (vals available) (group-by :type))]
    (map concat
         (sample-remaining seed red available-red target-red)
         (sample-remaining seed blue available-blue target-blue))))
