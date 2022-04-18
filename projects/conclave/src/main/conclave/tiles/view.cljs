(ns conclave.tiles.view
  (:require [conclave.tiles.core]))

(defn number [tile]
  (:key tile))

(defn res-inf [tile]
  (str (:total/resources tile)
       "/"
       (:total/influence tile)))

(defn wormhole [tile]
  (case (:wormhole tile) :alpha "Alpha" :beta "Beta" nil))

(defn tech [tile]
  (->> (get-in tile [:total :specialties])
       (interpose ",")
       (apply str)))
