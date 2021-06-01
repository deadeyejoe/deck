(ns deadeye.joe.twilight-imperium.game.state
  (:require [deadeye.joe.state.interface :as state]
            [deadeye.joe.pack.interface :as pack]
            [deadeye.joe.twilight-imperium.decks :as decks]
            [deadeye.joe.twilight-imperium.game.player :as ti.player]))

;; GET

(defn player-count [state]
  (count (state/player-ids state)))

(defn player-spaces
  ([state] (player-spaces state :player/position))
  ([state ordering]
   (let [player-ids (state/player-ids state)
         space-map (select-keys state player-ids)]
     (->> space-map
          (vals)
          (sort-by ordering)))))

(defn order-from-position [state player-id]
  (let [player-spaces (player-spaces state :player/position)
        split-fn (complement (ti.player/select-player player-id))
        [_ after] (->> player-spaces
                       (cycle)
                       (split-with split-fn))]
    (comp
     (zipmap (map ti.player/coerce-to-id (take (player-count state) after))
             (range))
     ti.player/coerce-to-id)))

(defn speaker [state]
  (->> state
       (player-spaces)
       (some ti.player/is-speaker?)))

;; UPDATE

(defn update-players
  ([state update-fn]
   (update-players state (constantly true) update-fn))
  ([state select-fn update-fn]
   (let [players (->> state
                      (player-spaces)
                      (filter select-fn)
                      (map :player/id))]
     (reduce (fn [state player-id] (update state player-id update-fn))
             state
             players))))

;; BUILD

(defn common-state []
  {:common {:strategy {:panel decks/strategy}}})

(defn player-state [index player]
  (let [{id :player/id} player]
    [id (merge player
               {:player/position index
                :strategy {:hand (pack/hand id
                                            {:category :strategy
                                             :pack/visiblity :public})}})]))

(defn player-space [players]
  (->> players
       (map-indexed player-state)
       (apply concat)
       (apply hash-map)))

(defn build [players]
  (merge (state/build players)
         (common-state)
         (player-space players)))

(comment
  (def players [{:player/id 1 :player/name "Joe"}
                {:player/id 2 :player/name "Mark"}
                {:player/id 3 :player/name "Andrew"}
                {:player/id 4 :player/name "Steven"}
                {:player/id 5 :player/name "Slick"}
                {:player/id 6 :player/name "Owen"}])
  (def state (build players))
  (update-players state #(= (% :player/name) "Joe") #(assoc % :updated true)))