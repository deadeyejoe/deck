(ns authority.views.game-round.action
  (:require [re-frame.core :as rf]
            [authority.utils :as utils :refer [listen]]
            [authority.constants :as const]))

(defn player-order [position]
  (let [name (listen [:player/name position])
        initiative (listen [:player/initiative position])
        current? (listen [:action/is-current position])]
    [:div {:key position
           :class (into ["flex" "flex-row"  "p-2" "mb-1"]
                        (if current?
                          ["text-5xl"]
                          ["text-xl"]))}
     (when current? [:div ">"])
     [:div {:class ["mr-10"]} initiative]
     [:div name]]))

(defn initiative-order []
  (let [ordering (rf/subscribe [:initiative-order])]
    [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-center"
                   "w-1/6" "h-screen"]}
     [:div {:class ["bg-gray-800" "w-full" "border-gray-700" "py-20"
                    "border-r-2" "border-t-2" "border-b-2" "rounded-r-xl"
                    "flex" "flex-col" "justify-center" "items-start"]}
      (doall
       (map (comp player-order :position) @ordering))]]))

(defn timer-control []
  (let [status (listen [:action/current-status])
        classes (into utils/primary-button
                      ["text-5xl" "mt-10"])]
    [:div
     (if (not= status :pause)
       [:input {:type "button"
                :value "Pause"
                :on-click #(rf/dispatch [:action/pause-turn])
                :class classes}]
       [:input {:type "button"
                :value "Resume"
                :on-click #(rf/dispatch [:action/resume-turn])
                :class classes}])]))

(defn time-display []
  (let [elapsed (listen [:action/current-time-elapsed])
        display (listen [:action/current-time-display])
        warning? (listen [:action/current-elapsed-in-range 90 120])
        danger? (listen [:action/current-elapsed-in-range 120])]
    [:div {:class (into ["text-hueg" "mb-10" "transition-colors" "duration-1000" "ease-in"]
                        (cond warning? ["text-yellow-500"]
                              (and danger? (even? elapsed)) ["text-red-600"]
                              (and danger? (odd? elapsed)) ["text-red-900"]))}
     display]))

(defn big-timer []
  (let [current-player (listen [:action/current-player])]
    [:div {:class ["flex" "flex-col" "h-1/2" "justify-between" "items-center"]}
     [:div {:class ["text-7xl"]}
      (:name current-player)]
     [:div {:class ["text-5xl" "mb-20"]}
      (-> current-player :initiative const/strategy->title)]
     [time-display]
     [timer-control]]))

(defn turn-controls []
  [:div
   [:input {:type "button"
            :value "Next Turn"
            :on-click #(rf/dispatch [:action/next-turn])
            :class utils/primary-button}]
   [:input {:type "button"
            :value "End Action Phase"
            :on-click #(rf/dispatch [:status/start])
            :class utils/primary-button}]])

(defn component []
  [:div {:class ["w-screen" "h-full" "flex" "flex-col" "justify-around" "items-center"]}
   [initiative-order]
   [big-timer]
   [turn-controls]])