(ns authority.views.game-round.action
  (:require [re-frame.core :as rf]
            [authority.utils :as utils :refer [listen]]
            [authority.views.common :as common]
            [authority.constants :as const]))

(defn player-order [position]
  (let [name (listen [:player/name position])
        initiative (listen [:player/initiative position])
        ready? (listen [:player/ready? position])
        strategized? (listen [:player/strategized? position])
        current? (listen [:action/is-current position])]
    [:div {:key position
           :class (concat ["flex" "flex-row" "justify-between" "items-center" "p-1" "ml-2" "w-11/12"])}
     [:div {:class (concat (if current?
                             ["text-6xl"]
                             ["text-3xl"])
                           (when-not ready? ["text-gray-700" "line-through"]))} name]
     (common/initiative-badge {:initiative initiative
                               :state (if current?
                                        (if strategized? :disabled :selected)
                                        (if strategized? :exhausted :unselected))
                               :content initiative})]))

(defn initiative-order []
  (let [ordering (rf/subscribe [:player/initiative-order])]
    [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-center"
                   "w-1/6" "h-screen"]}
     [:div {:class ["bg-gray-800" "w-full" "border-gray-700" "py-5"
                    "border-r-2" "border-t-2" "border-b-2" "rounded-r-xl"
                    "flex" "flex-col" "justify-center" "items-start"]}
      (doall
       (map player-order @ordering))]]))

(defn timer-control []
  (let [paused? (listen [:timer/paused])
        classes (into utils/primary-button
                      ["text-5xl" "mt-10"])]
    [:div
     (if-not paused?
       [:input {:type "button"
                :value "Pause"
                :on-click #(rf/dispatch [:timer/pause-all])
                :class classes}]
       [:input {:type "button"
                :value "Resume"
                :on-click #(rf/dispatch [:timer/resume-all])
                :class classes}])]))

(defn time-display []
  (let [elapsed (listen [:timer/elapsed :player])
        display (listen [:timer/display :player])
        warning? (listen [:timer/elapsed-in-range :player 90 120])
        danger? (listen [:timer/elapsed-in-range :player 120])]
    [:div {:class (into ["text-hueg" "mb-10" "transition-colors" "duration-1000" "ease-in"]
                        (cond warning? ["text-yellow-500"]
                              (and danger? (even? elapsed)) ["text-red-600"]
                              (and danger? (odd? elapsed)) ["text-red-900"]))}
     display]))

(defn strategy-name [initiative strategizing?]
  [:div {:class ["text-5xl" "mb-20" (when-not strategizing? (const/strategy->text initiative))]}
   [common/poly-badge {:poly-outer (utils/polygon-px 10)
                       :border-padding "p-1"
                       :border (when strategizing? (const/strategy->border initiative :bg))
                       :fill   (when strategizing? (const/strategy->bg initiative))
                       :content [:div {:class ["p-2"]} (const/strategy->title initiative)]}]])

(defn big-timer []
  (let [name (listen [:player/name :current])
        initiative (listen [:player/initiative :current])
        strategizing? (listen [:action/strategizing?])]
    [:div {:class ["flex" "flex-col" "h-1/2" "justify-between" "items-center"]}
     [:div {:class ["text-7xl"]} name]
     [strategy-name initiative strategizing?]
     [time-display]
     [timer-control]]))

(defn turn-controls []
  (let [strategized? (listen [:player/strategized? :current])
        strategizing? (listen [:action/strategizing?])]
    [:div
     [:input {:type "button"
              :value "Next Turn"
              :on-click #(rf/dispatch [:action/next-turn])
              :class utils/primary-button}]
     (when-not strategizing?
       (if strategized?
         [:input {:type "button"
                  :value "Pass"
                  :on-click #(rf/dispatch [:action/pass])
                  :class utils/primary-button}]
         [:input {:type "button"
                  :value "Strategize"
                  :on-click #(rf/dispatch [:action/strategize])
                  :class utils/primary-button}]))
     [:input {:type "button"
              :value "End Action Phase"
              :on-click #(rf/dispatch [:status/start])
              :class utils/primary-button}]]))

(defn component []
  [:div {:class ["w-screen" "h-full" "flex" "flex-col" "justify-around" "items-center"]}
   [initiative-order]
   [big-timer]
   [turn-controls]])