(ns dev.ti
  (:require [deadeye.joe.player.interface :as player]
            [deadeye.joe.deck.interface :as deck]
            [dev.crux-node :as cn :refer [node]]
            [crux.api :as crux]))

(def game [:determine-speaker
           :choose-races
           :choose-colour
           :create-game-board
           :choose-secret-objectives
           :game-round
           :game-end])

(def game-round [:strategy-phase
                 :action-phase
                 :status-phase
                 :agenda-phase])

(def strategy-cards [{:card/id 1 :card/name "Leadership"}
                     {:card/id 2 :card/name "Diplomacy"}
                     {:card/id 3 :card/name "Politics"}
                     {:card/id 4 :card/name "Construction"}
                     {:card/id 5 :card/name "Trade"}
                     {:card/id 6 :card/name "Warfare"}
                     {:card/id 7 :card/name "Technology"}
                     {:card/id 8 :card/name "Imperial"}])

(def strategy-deck
  (let [order (fn [coll] (sort-by :card/id coll))]
    (deck/create :strategy-deck strategy-cards :ordering-fn order)))

(def roster
  [(assoc-in (player/create "Joe") [:player/tokens :speaker] 1)
   (player/create "mark")])

(def state
  {:state/players roster
   :state/decks {:strategy-deck strategy-deck}})

(defn starting-at [pred players]
  (let [[before and-after] (split-with (complement pred) players)]
    (reduce into [] [and-after before])))

(defn speaker? [player] (contains? (:player/tokens player) :speaker))

(comment
  (split-with (complement #{3}) [1 2 3 4 5])
  ;; => [(1 2) (3 4 5)]
  (reduce into [] ['(3 4 5) '(1 2)])
  ;; => [3 4 5 1 2]
  (starting-at odd? [1 2 3 4 5])
  (starting-at speaker? roster))


(def strategy-phase

  {:phase/id :strategy
   :phase/cycle false
   :phase/first (fn [state]
                  (->> state
                       (:state/players)
                       (filter speaker?)
                       (first)))
   :phase/next  (fn [state last-player]
                  (->> state
                       (:state/players)
                       (starting-at speaker?)
                       (drop-while #(not= last-player %))
                       (fnext)))
   :phase/choice (fn [player]
                   {:choice/player (:player/id player)
                    :choice/options [{:type :pick-one
                                      :target/type :deck
                                      :target/id :strategy}]})})

(comment
  (fnext (drop-while #(not= 3 %) [1 2 3 4 5]))
  (:state/players state)
  (->>
   ((:phase/first strategy-phase) state)
   ((:phase/next strategy-phase) state)
   ((:phase/next strategy-phase) state))
  ((:phase/choice strategy-phase) (first roster)))


(def action-phase
  {:phase/id :action
   :phase/cycle true
   :phase/end? (fn [] false)
   :phase/choice (fn [player]
                   {:choice/player (:player/id player)
                    :choice/options [{:type :strategic-action}
                                     {:type :done}
                                     {:type :pass}]})})



(defn init-phase [state]
  (let [phase strategy-phase
        first-player (())]))

(defn advance [state params]
  (let []))

(defn end-phase [state])

(defn next
  ([state action] (next state action {}))
  ([state action params]
   (case action
     :start  (init-phase state)
     :decide (advance state params)
     :done (end-phase state))))


(comment
  (state)
  (-> (state)
      (next :start)
      (next :decide {:player/id "Joe" :card/id 1}))
  (assoc {:key 1} :key nil))
