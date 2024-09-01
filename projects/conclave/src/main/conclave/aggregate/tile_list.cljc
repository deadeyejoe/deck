(ns conclave.aggregate.tile-list
  "Functions for lists of tiles"
  (:require [conclave.tiles.core :as core]
            [clojure.spec.alpha :as s]))

(s/def ::instance (s/coll-of ::core/instance))

(defn ->key-set [tile-list]
  (->> tile-list
       (map :key)
       (set)))

(defn ->scores [score-kw tile-list]
  (map (comp score-kw :total) tile-list))

(defn move-to-front
  "Moves tiles that satisfy pred to the front of the list.
   
   Be careful when chaining this: Is the second pred a subset of the first?"
  [pred tile-list]
  (let [{pass true fail false} (group-by (comp boolean pred) tile-list)]
    (-> []
        (into pass)
        (into fail))))

(defn split-satisfying
  "Finds the first n tiles that satisfy pred, and returns two vectors:
   the first with the tiles that satisfy pred, and the second with the rest."
  [n pred tile-list]
  (let [{satisfying true non-satisfying false} (group-by (comp boolean pred) tile-list)
        [first-n rest] (split-at n satisfying)]
    [(vec first-n) (into (vec rest) non-satisfying)]))

(defn ->breakdown
  ([score-kws tile-list]
   (->breakdown score-kws identity tile-list))
  ([score-kws aggregate-fn tile-list]
   (into {}
         (map (fn [score-kw]
                [score-kw (aggregate-fn (->scores score-kw tile-list))]))
         score-kws)))

(defn sum-optimal-res-inf [tiles]
  (->breakdown [:optimal-resources :optimal-influence] (partial apply +) tiles))

(defn ordered-scores [score-kw tile-list]
  (->> tile-list
       (->scores score-kw)
       (sort >)))

(defn collect-quantity [acc quantity]
  (cond
    (coll? quantity) (into (or acc #{}) quantity)
    (number? quantity) (+ acc quantity)))

(defn collect-total
  ([collect tile] (collect-total nil collect tile))
  ([keys collect {:keys [total] :as _tile}]
   (reduce-kv (fn [acc quantity-kw quantity]
                (update acc quantity-kw collect-quantity quantity))
              collect
              (if keys (select-keys total keys) total))))

(defn collect-totals
  "Takes a list of tiles and combines the attributes in their total together. Numbers are added and
   collections are gathered into sets."
  ([tiles]
   (reduce collect-total {} tiles))
  ([keys tiles]
   (reduce (partial collect-total keys) {} tiles)))

(comment
  (def some-tiles (->> core/default-pok (take 5)))
  (collect-totals some-tiles)
  (collect-totals [:optimal-resources :optimal-influence :legendary :tech] some-tiles))
