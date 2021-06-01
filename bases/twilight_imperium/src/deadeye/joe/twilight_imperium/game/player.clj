(ns deadeye.joe.twilight-imperium.game.player
  (:require [deadeye.joe.role.interface :as role]))


(def is-speaker? (role/has-role? :speaker))
(def add-speaker (role/add-role :speaker))
(def remove-speaker (role/remove-role :speaker))

(defn coerce-to-id [player]
  (or (:player/id player) player))

(defn select-player [player]
  (fn [other]
    (when (= (coerce-to-id player) (coerce-to-id other))
      other)))

(defn strategy-cards [player-space]
  (get-in player-space [:strategy :hand :pack/cards]))

(defn initiative [player-space]
  (->> player-space
       (strategy-cards)
       (map :property/initiative)
       (apply min)))

(defn pass [player-space]
  (assoc player-space :property/passed true))

(defn passed? [player-space]
  (player-space :property/passed))

(defn unset-pass [player-space]
  (dissoc player-space :property/passed))

