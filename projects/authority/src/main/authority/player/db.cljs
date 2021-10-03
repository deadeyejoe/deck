(ns authority.player.db
  (:require [authority.player.core :as core]
            [authority.utils :as utils]))

(defn update-name [db position name]
  (if (empty? name)
    (update db :players dissoc position)
    (assoc-in db [:players position] (core/build {:position position :name name}))))

(defn all [db]
  (-> db :players vals))

(defn find-by [db position]
  (get-in db [:players position]))

(defn update-at [db position f]
  (update-in db [:players position] f))

(defn update-all [db f]
  (update db :players #(utils/transform-values % f)))

(defn order-by [f db]
  (->> db :players vals (sort-by f)))

(defn filter-by [f db]
  (->> db :players vals (filter f)))

(defn lock-positions [db]
  (let [positions (->> db (order-by core/position) (map core/position))]
    (assoc db :players/position-order positions)))

(defn position-order
  "Returns the positions of all players in the game in order.
   The order of players is static for a game so we don't want to sort the players for the 
   purpose of iteration (e.g. for generating a list of the players) "
  [db]
  (get db :players/position-order))

(defn lock-initiative [db]
  (let [positions (->> db (order-by core/initiative) (map core/position))]
    (assoc db :players/initiative-order positions)))

(defn initiative-order
  "Returns the positions of all players in the game ordered by initiative.
   The initiative order of players is static for a round so we don't want to sort the 
   players for the purpose of iteration (e.g. for generating a list of the players) "
  [db]
  (get db :players/initiative-order))

(defn first-player [db]
  (->> db
       (order-by core/initiative)
       first))

(defn next-player [db current-player]
  (let [order (order-by core/initiative db)]
    (loop [[head & rest] (concat order order)]
      (if (and (some? head) (core/eq head current-player))
        (->> rest
             (filter core/ready?)
             first)
        (recur rest)))))

(comment
  (def ex {:players
           {7 {:position 7, :name "Sl", :initiative 2}
            1 {:position 1, :name "Joe", :initiative 8}
            4 {:position 4, :name "And", :initiative 5}
            6 {:position 6, :name "St", :initiative 3}
            3 {:position 3, :name "Maz", :initiative 6}
            2 {:position 2, :name "Mark", :initiative 7}
            5 {:position 5, :name "Al", :initiative 4}
            8 {:position 8, :name "Ro", :initiative 1}}})

  (lock-positions ex)
  (lock-initiative ex)
  (first (order-by core/initiative ex))
  (def one-ready
    (-> ex
        (update-at 1 core/pass)
        (update-at 2 core/pass)
        (update-at 3 core/pass)
        (update-at 5 core/pass)
        (update-at 6 core/pass)
        (update-at 7 core/pass)
        (update-at 8 core/pass)))
  (-> one-ready
      (next-player {:position 4})))