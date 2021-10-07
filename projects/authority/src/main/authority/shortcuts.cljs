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
(def s     {:code {:keyCode 83}
            :keyname "S"})

(def standard-keys [(merge u {:label "Undo"
                              :event [:undo]})
                    (merge r {:label "Redo"
                              :event [:redo]})
                    (merge p {:label "Pause/Resume"
                              :event [:timer/toggle-all]})])

(def phase->shortcuts {:player-select  [(merge enter   {:label "Start Game"
                                                        :event [:start-game]})]
                       :strategy-phase (into standard-keys
                                             [(merge enter   {:label "Action Phase"
                                                              :event [:action/start]})])
                       :action-phase   (into standard-keys
                                             [(merge space   {:label "Next Turn"
                                                              :event [:action/next-turn]})
                                              (merge s       {:label "Strategize"
                                                              :event [:action/strategize]})
                                              (merge x       {:label "Pass"
                                                              :event [:action/pass]})
                                              (merge enter   {:label "Status Phase"
                                                              :event [:status/start]})])
                       :status-phase   (into standard-keys
                                             [(merge enter   {:label "Agenda Phase"
                                                              :event [:agenda/start]})])
                       :agenda-phase   (into standard-keys
                                             [(merge enter   {:label "End Round"
                                                              :event [:round/end]})])
                       :round-summary  (into standard-keys
                                             [(merge enter   {:label "Next Round"
                                                              :event [:round/start]})])})

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

(defn resolve-phase [key]
  (case key
    [:player-select nil]           :player-select
    [:game-round :strategy-phase]  :strategy-phase
    [:game-round :action-phase]    :action-phase
    [:game-round :status-phase]    :status-phase
    [:game-round :agenda-phase]    :agenda-phase
    [:game-round :round-summary]   :round-summary
    nil))

(defn update-hotkeys [{:keys [:game/state :round/phase]}]
  (if-let [phase (resolve-phase [state phase])]
    [(phase->re-pressed phase)]
    [:dispatch [::rp/set-keyup-rules {}]]))

(rf/reg-event-fx
 ::handle
 (fn [_context [_event-name to-handle _rp-junk]]
   {:fx [[:dispatch to-handle]]}))

(rf/reg-sub
 :shortcuts/active
 :<- [:game/state]
 :<- [:round/phase]
 (fn [key]
   (-> key resolve-phase phase->shortcuts)))