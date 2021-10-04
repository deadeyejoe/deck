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
(def x     {:code {:keyCode 88}
            :keyname "X"})
(def u     {:code {:keyCode 85}
            :keyname "U"})
(def r     {:code {:keyCode 82}
            :keyname "R"})

(def undo (merge u {:label "Undo"
                    :event [:undo]}))

(def redo (merge r {:label "Redo"
                    :event [:redo]}))

(def phase->shortcuts {:player-select  [(merge enter   {:label "Start Game"
                                                        :event [:start-game]})]
                       :strategy-phase [(merge enter   {:label "End Phase"
                                                        :event [:action/start]})]
                       :action-phase   [(merge space   {:label "Next"
                                                        :event [:action/next-turn]})
                                        (merge p       {:label "Pause/Resume"
                                                        :event [:action/toggle-turn]})
                                        (merge enter   {:label "End Phase"
                                                        :event [:status/start]})
                                        (merge x       {:label "Pass"
                                                        :event [:action/pass]})
                                        undo
                                        redo]
                       :status-phase   [(merge enter   {:label "End Phase"
                                                        :event [:agenda/start]})
                                        undo
                                        redo]
                       :agenda-phase   [(merge enter   {:label "End Phase"
                                                        :event [:round/end]})
                                        undo
                                        redo]
                       :round-summary  [(merge enter   {:label "Start Next Round"
                                                        :event [:round/start]})
                                        undo
                                        redo]})

(defn shortcut->rp-event-key
  "Takes a shortcut descriptor and returns a vector for configuring re-pressed.
   
   The first element of the vector is a dispatch vector for the generic handle event registered below.
   This is done as a workaround: re-pressed always conj'es details of the keypress to event vectors, which
   interferes with parametrized events. The second element is the representation of the key that triggers
   the shortcut
   
   When the generic event is handled, it ignores the keypress information, and dispatches the provided event."
  [{:keys [code event]}]
  [[::handle event]
   [code]])

(def always-listen-keys (mapv :code [enter space]))

(defn shortcuts->rp-dispatch [shortcuts]
  [:dispatch [::rp/set-keyup-rules
              {:event-keys (mapv shortcut->rp-event-key shortcuts)
               :always-listen-keys always-listen-keys}]])

(def phase->re-pressed
  (util/transform-values phase->shortcuts shortcuts->rp-dispatch))

(defn update-hotkeys [{:keys [:game/state :round/phase]}]
  (let [key [state phase]]
    (case key
      [:player-select nil]           [(phase->re-pressed :player-select)]
      [:game-round :strategy-phase]  [(phase->re-pressed :strategy-phase)]
      [:game-round :action-phase]    [(phase->re-pressed :action-phase)]
      [:game-round :status-phase]    [(phase->re-pressed :status-phase)]
      [:game-round :agenda-phase]    [(phase->re-pressed :agenda-phase)]
      [:game-round :round-summary]   [(phase->re-pressed :round-summary)]
      [:dispatch [::rp/set-keyup-rules {}]])))

(rf/reg-event-fx
 ::handle
 (fn [_context [_event-name to-handle _rp-junk]]
   {:fx [[:dispatch to-handle]]}))