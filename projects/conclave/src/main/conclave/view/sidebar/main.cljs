(ns conclave.view.sidebar.main
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.sidebar.controls :as controls]
            [conclave.view.sidebar.overlay :as overlay]
            [conclave.view.sidebar.map-summary :as map-summary]
            [conclave.view.sidebar.player-summary :as player-summary]
            [conclave.view.sidebar.tile :as tile]
            [re-frame.core :as rf]))

(defn display-controls []
  (let [optimal? (= :optimal @(rf/subscribe [subs/value-mode]))]
    [common/o-box {:class ["p-1" "mt-1"]}
     [common/o-box {:class ["border" "rounded-lg" "border-gray-800" "p-2" "text-gray-300" "h-16"]}
      [:span {:class ["mr-2" "transition-opacity" (when-not optimal? "opacity-30")]}
       "Optimal Values"]
      [:span {:class ["relative" "inline-block" "p-0.5" "w-12" "h-6"
                      "border-2" "rounded-full" "border-gray-300"
                      "bg-blue-900" "cursor-pointer"]
              :on-click #(rf/dispatch [handlers/set-value-mode])}
       [:span {:class (into ["w-4" "h-4" "absolute" "rounded-full" "transition-all"
                             "bg-gray-300"
                             (if optimal? "right-6" "right-1")])}]]
      [:span {:class ["ml-2" "transition-opacity" (when optimal? "opacity-30")]}
       "Base Values"]]]))

(defn content []
  (let [coordinate (or @(rf/subscribe [subs/hovered])
                       @(rf/subscribe [subs/selected-tile]))]
    [:div {:class ["h-full" "w-full"
                   "flex" "flex-col" "justify-between"
                   "text-xl"
                   "relative" "px-3"]}
     [:div {:class ["h-1/12" "w-full"]}
      [controls/component]]
     [:div {:class ["h-1/12" "w-full"]}
      [display-controls]]
     [:div {:class ["h-1/2" "w-full" "flex" "flex-col"]}
      [player-summary/component]]
     [:div {:class ["h-1/3" "w-full" "flex" "mb-2"]}
      (if coordinate
        [tile/component coordinate]
        [map-summary/component])]
     [:div {:class ["absolute" "flex" "flex-row" "lg:flex-col" "justify-center"
                    "lg:h-full" "w-full" "lg:w-14" "-top-20" "lg:-left-20"]}
      [overlay/component]]]))

(defn component []
  [:div {:class ["w-full " "h-full" "flex" "border-l-2" "border-blue-800"]}
   [content]])
