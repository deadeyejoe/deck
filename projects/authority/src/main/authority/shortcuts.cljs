(ns authority.shortcuts
  (:require [re-frame.core :as rf]
            [re-frame.db :refer [app-db]]
            [authority.utils :as utils]
            [goog.events :as ev]))

(def shortcuts {[:player-select nil] [{:label "Start Game"
                                       :key "Enter"
                                       :dispatch [:start-game]}]
                [:game-round :strategy] [{:label "End Phase"
                                          :key "Enter"
                                          :dispatch [:action/start]}]
                [:game-round :action] [{:label "Next"
                                        :key "n"
                                        :dispatch [:action/next-turn]}
                                       {:label "Pause"
                                        :key " "
                                        :dispatch [:action/pause-turn]}
                                       {:label "End Phase"
                                        :key "Enter"
                                        :dispatch [:status/start]}]})



(defn register-listener []
  (ev/listen js/document "keyup" (fn [e])))

(defn component []
  (let [state (utils/listen [:state])
        phase (utils/listen [:phase])]))