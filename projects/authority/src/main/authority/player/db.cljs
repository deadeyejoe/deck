(ns authority.player.db
  (:require [authority.player.core :as core]
            [authority.utils :as utils]))

(defn update-name [db position name]
  (if (empty? name)
    (update db :players dissoc position)
    (assoc-in db [:players position] (core/build {:position position :name name}))))

(defn lock-positions [db]
  (let [positions (->> db :players (map :position) (sort))]
    (assoc-in db [:players :position-order] positions)))

(defn lock-initiative [db]
  (let [positions (->> db :players (sort-by core/initiative) (map core/position))]
    (assoc-in db [:players :initiative-order] positions)))

(defn all [db]
  (-> db :players vals))

(defn find-by [db position]
  (get-in db [:players position]))

(defn ready [db]
  (->> db :players (filter core/ready?)))

(defn passed [db]
  (->> db :players (filter core/passed?)))

(defn position-order [db]
  (->> db :players (sort-by :position)))

(defn initiative-order [db]
  (->> db :players (sort-by :initiative)))

(defn update-at [db position f]
  (update-in db [:players position] f))

(defn update-all [db f]
  (update db :players #(utils/transform-values % f)))