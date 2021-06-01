(ns deadeye.joe.twilight-imperium.game.pack
  (:require [deadeye.joe.pack.interface :as pack]))

(defn exhaust [card]
  (assoc card :property/exhausted true))

(defn exhausted? [card]
  (:property/exhausted card))

(defn ready [card]
  (dissoc card :property/exhausted))

(defn ready-all [cards]
  (map ready cards))

(defn move-card [state source destination card-selector]
  (let [source-pack (get-in state source)
        [chosen-card new-source] (pack/pick source-pack card-selector)]
    (-> state
        (assoc-in source new-source)
        (update-in destination pack/add chosen-card))))

