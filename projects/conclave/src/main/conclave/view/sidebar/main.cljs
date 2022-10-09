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
  [common/o-box {:class ["p-1" "mt-1"]}
   [common/o-box {:class ["border" "rounded-lg" "border-gray-800" "p-2" "text-gray-300" "h-16"]}
    [common/switch {:on-label "Optimal Values"
                    :off-label "Base Values"
                    :sub [subs/generation-option :optimal-values]
                    :dispatch [handlers/toggle-generation-option :optimal-values]}]]])

(defn content []
  (let [coordinate (or @(rf/subscribe [subs/hovered])
                       @(rf/subscribe [subs/selected-tile]))
        tile @(rf/subscribe [subs/tile coordinate])]
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
      (if tile
        [tile/component coordinate tile]
        [map-summary/component])]
     [:div {:class ["absolute" "flex" "flex-row" "lg:flex-col" "justify-center"
                    "lg:h-full" "w-full" "lg:w-14" "lg:-left-20"]}
      [overlay/component]]]))

(defn component []
  [:div {:class ["w-full " "h-full" "flex" "border-l-2" "border-blue-800"]}
   [content]])
