(ns authority.shortcuts
  (:require [re-frame.core :as rf]
            [re-pressed.core :as rp]
            [authority.utils :as util]))

(def enter {:code {:keyCode 13}
            :keyname "Enter"})
(def space {:code {:keyCode 32}
            :keyname "Space"})
(def p     {:code {:keyCode 80}
            :keyname "P"})

(def clear-keys (mapv (comp vector :code) [enter
                                           space
                                           p]))
(def always-listen-keys (mapv :code [enter space]))

(def phase->shortcuts {:player-select [(merge enter {:label "Start Game"
                                                     :event [:start-game]})]
                       :strategy-phase [(merge enter {:label "End Phase"
                                                      :event [:action/start]})]
                       :action-phase [(merge space {:label "Next"
                                                    :event [:action/next-turn]})
                                      (merge p {:label "Pause"
                                                :event [:action/toggle-turn]})
                                      (merge enter {:label "End Phase"
                                                    :event [:status/start]})]
                       :status-phase [(merge enter {:label "End Phase"
                                                    :event [:agenda/start]})]
                       :agenda-phase [(merge enter {:label "End Phase"
                                                    :event [:round/end]})]
                       :round-summary [(merge enter {:label "Start Next Round"
                                                     :event [:round/start]})]})

(defn shortcut->rpdispatch [shortcuts]
  [:dispatch [::rp/set-keyup-rules
              {:event-keys (mapv (fn [{:keys [code event]}] [event [code]]) shortcuts)
              ;;  :clear-keys clear-keys
               :always-listen-keys always-listen-keys}]])

(def phase->re-pressed
  (util/transform-values phase->shortcuts shortcut->rpdispatch))

(defn update-hotkeys [{:keys [:game/state :round/phase]}]
  (let [key [state phase]]
    (case key
      [:player-select nil] [(phase->re-pressed :player-select)]
      [:game-round :strategy-phase]  [(phase->re-pressed :strategy-phase)]
      [:game-round :action-phase]  [(phase->re-pressed :action-phase)]
      [:game-round :status-phase]  [(phase->re-pressed :status-phase)]
      [:game-round :agenda-phase]  [(phase->re-pressed :agenda-phase)]
      [:game-round :round-summary]  [(phase->re-pressed :round-summary)]
      [:dispatch [::rp/set-keyup-rules {}]])))