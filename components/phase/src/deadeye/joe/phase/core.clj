(ns deadeye.joe.phase.core
  (:require [deadeye.joe.player.interface :as player]))

(def sample
  {:crux.db/id :s1
   :phase/type :strategy
   :phase/name "Strategy Turn 1"
   :phase/children []
   :phase/parent :s0})

(defn state []
  {:phase/stack []
   :phase/active nil
   :playspace {:decks []}
   :players (vec (map player/create ["joe" "mark"]))})

(defn create [name next-fn]
  {:phase/name name
   :phase/next next-fn
   :phase/active nil
   :phase/done false
   :phase/stack []})

(defn start-phase [state new-phase]
  (let [{stack :phase/stack
         active :phase/active} state]
    (merge state {:phase/stack (conj stack  active)
                  :phase/active new-phase})))


(defn end-phase [state]
  (let [{stack :phase/stack} state]
    (merge state {:phase/stack (pop stack)
                  :phase/active (peek stack)})))

(defn choice-pick-one [phase player options]
  {:choice/name "pick one"
   :choice/phase (:phase/name phase)
   :choice/player player
   :choice/options options})


(defn strategy-phase [state]
  (let [next-fn (fn [state])])
  (create "strategy-phase"))


(defn advance [state,action])





