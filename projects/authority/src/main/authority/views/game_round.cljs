(ns authority.views.game-round
  (:require [re-frame.core :as rf]
            [authority.constants :as const]
            [authority.views.game-round.strategy :as strategy]
            [authority.views.game-round.action :as action]
            [authority.views.game-round.status :as status]
            [authority.views.game-round.agenda :as agenda]
            [authority.views.game-round.summary :as summary]))

(defn timer
  ([id label]
   (timer id label :relative))
  ([id label mode]
   (let [time (rf/subscribe [:timer/display id mode])]
     [:div {:class ["flex" "flex-row" "space-x-5" "flex-grow-0" "justify-between" "text-3xl"
                    "border" "rounded-lg" "border-gray-700" "py-2" "px-4"]}
      [:div label]
      [:div {:class ["text-gray-400"]} @time]])))

(defn round-number []
  (let [number (rf/subscribe [:round/number])
        phase (rf/subscribe [:round/phase])]
    [:div {:class ["p-3" "ml-3" "mt-3" "absolute" "top-0" "left-0"
                   "rounded-lg" "border-2" "border-gray-700" "w-32" "h-32" "bg-gray-800"]}
     [:div {:class ["flex" "flex-col" "justify-around" "items-center"]}
      [:div {:class ["text-5xl" "mb-5"]} @number]
      [:div {:class ["text-2xl" "w-5/6" "border-t" "pt-2" "border-gray-400" "text-center"]}
       (const/phase-title @phase)]]]))

(defn title-bar []
  [:div {:class ["w-screen" "flex" "flex-row" "flex-shrink-0" "space-x-3" "justify-center" "border-b" "border-gray-700"]}
   [round-number]
   [:div {:class ["flex" "flex-row" "flex-nowrap" "flex-grow-0" "w-2/3" "justify-evenly" "items-center"]}
    [timer :game "Total" :real]
    [timer :game "Game"]
    [timer :round "Round"]
    [timer :phase "Phase"]]])

(defn component []
  (let [phase (rf/subscribe [:round/phase])]
    [:div {:class ["w-screen" "h-screen" "flex" "flex-col" "flex-nowrap"]}
     [:div {:class ["flex" "h-24" "flex-grow-0"]}
      [title-bar]]
     [:div {:class ["flex" "h-full" "bg-galaxy" "bg-center" "bg-contain"]}
      (case @phase
        :strategy-phase [strategy/component]
        :action-phase [action/component]
        :status-phase [status/component]
        :agenda-phase [agenda/component]
        :round-summary [summary/component]
        @phase)]]))