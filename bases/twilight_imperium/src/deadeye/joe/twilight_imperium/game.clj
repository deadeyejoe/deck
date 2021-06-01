(ns deadeye.joe.twilight-imperium.game
  (:require [deadeye.joe.twilight-imperium.phases.root :as root]
            [deadeye.joe.twilight-imperium.game.state :as ti.state]
            [deadeye.joe.twilight-imperium.game.player :as ti.player]
            [deadeye.joe.twilight-imperium.game.actions]
            [deadeye.joe.state.interface :as state]
            [deadeye.joe.action.interface :as action]
            [deadeye.joe.state.core :as state.core]

            [clojure.pprint :as pp]))

(def players [{:player/id 1 :player/name "Joe"}
              {:player/id 2 :player/name "Mark"}
              {:player/id 3 :player/name "Andrew"}])
(def game (-> (ti.state/build players)
              (state/push-action {:action/name :root/setup})))

(comment
  (-> game
      (state/advance)
      (state/advance)
      (state.core/process-choice {:action/name :set-positions :parameter/ordering '(3 1 2)})
      (state/advance)
      (state/advance)
      (state.core/process-choice {:action/name :set-speaker :parameter/player 2})
      (state/advance)
      (state/advance)
      (state/advance)
      ((juxt :state/action-stack :state/choice))))

(def action-stream (atom []))
(def state-stream (atom []))

(defn out [action state]
  (swap! state-stream conj state)
  (swap! action-stream conj action))

(def choices [{:action/name :set-positions :parameter/ordering '(3 1 2)}
              {:action/name :set-speaker :parameter/player 2}
              {:action/name :pick-strategy
               :parameter/player 2
               :parameter/card {:category :strategy, :card/name "Leadership", :property/initiative 1}}
              {:action/name :pick-strategy
               :parameter/player 3
               :parameter/card {:category :strategy, :card/name "Technology", :property/initiative 7}}
              {:action/name :pick-strategy
               :parameter/player 1
               :parameter/card {:category :strategy, :card/name "Warfare", :property/initiative 6}}
              {:action/name :pick-strategy
               :parameter/player 2
               :parameter/card {:category :strategy, :card/name "Diplomacy", :property/initiative 2}}
              {:action/name :pick-strategy
               :parameter/player 3
               :parameter/card {:category :strategy, :card/name "Trade", :property/initiative 5}}
              {:action/name :pick-strategy
               :parameter/player 1
               :parameter/card {:category :strategy, :card/name "Politics", :property/initiative 3}}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Diplomacy", :property/initiative 2}
               :parameter/player 2}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Politics", :property/initiative 3}
               :parameter/player 1}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Technology", :property/initiative 7}
               :parameter/player 3}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Leadership", :property/initiative 1}
               :parameter/player 2}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Warfare", :property/initiative 6}
               :parameter/player 1}
              {:action/name :action-phase/strategize
               :parameter/card {:category :strategy, :card/name "Trade", :property/initiative 5}
               :parameter/player 3}
              {:action/name :action-phase/pass, :parameter/player 2}
              {:action/name :action-phase/pass, :parameter/player 1}
              {:action/name :action-phase/pass, :parameter/player 3}
              {:action/name :status-phase/score-objectives}
              {:action/name :status-phase/reveal-objectives}
              {:action/name :status-phase/draw-action-cards}
              {:action/name :status-phase/remove-command-tokens}
              {:action/name :status-phase/gain-command-tokens}
              {:action/name :status-phase/ready-cards}
              {:action/name :status-phase/repair-units}])

(defn gamestate []
  (reset! action-stream [])
  (reset! state-stream [])
  (reduce (fn [game choice]
            (-> game
                (state.core/process-choice choice)
                (state/advance-to-choice out)))
          (state/advance-to-choice game out)
          choices))

(defn nthlast [coll n]
  (let [count (count coll)]
    (nth coll (max (- count n) 0))))

(comment
  (time (gamestate))
  (def gstate (gamestate))
  (-> (nthlast @state-stream 50)
      (state/advance))
  (state/advance (state/advance (last @state-stream)))
  (ti.state/player-spaces gstate ti.player/initiative)
  @action-stream)



