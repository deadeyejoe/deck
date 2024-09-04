(ns conclave.aggregate.tile-group
  "Tiles grouped by type with a bounded size"
  (:require [conclave.tiles.core :as core]
            [clojure.spec.alpha :as s])
  (:refer-clojure :exclude [empty?]))

(s/def ::tiles (s/coll-of ::core/instance))

(s/def ::red ::tiles)
(s/def ::blue ::tiles)
(s/def ::green ::tiles)

(s/def ::capacities (s/map-of ::core/type nat-int?))
(s/def ::instance (s/keys :req-un [::red ::blue]
                          :opt-un [::green ::capacities]))

(def empty-group {:red []
                  :blue []})

(defn- counted-submap [group]
  (select-keys group core/tile-types))

(defn ->finite [group bounds]
  (assoc group :capacities bounds))
(s/fdef ->finite
  :args (s/and (s/cat :group ::instance
                      :capacities ::capacities)
               (fn [{:keys [group bounds]}]
                 (= (-> bounds keys set)
                    (-> group counted-submap keys set))))
  :ret ::instance)

(defn finite? [group]
  (-> group :capacities not-empty))

(def unbounded? (complement finite?))

(defn empty? [group]
  (every? empty? (vals (counted-submap group))))

(defn- check-capacity [{:keys [capacities] :as group} f]
  (every? (fn [[tile-type capacity]]
            (f (count (get group tile-type)) capacity))
          capacities))

(defn incomplete? [group]
  (and (finite? group)
       (check-capacity group <)))

(defn complete? [group]
  (and (finite? group)
       (check-capacity group =)))

(defn exceeded? [group]
  (and (finite? group)
       (check-capacity group >)))

(defn add-tile [group tile]
  (update group (core/type-kw tile) (fnil conj []) tile))
