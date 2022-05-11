(ns conclave.view.sidebar.main
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.sidebar.controls :as controls]
            [conclave.view.sidebar.edit :as edit]
            [conclave.view.sidebar.overlay :as overlay]
            [conclave.view.sidebar.map-summary :as map-summary]
            [conclave.view.sidebar.player-summary :as player-summary]
            [conclave.view.sidebar.tile :as tile]
            [re-frame.core :as rf]))

(defn content []
  (let [player-edit @(rf/subscribe [subs/player-edit])
        coordinate (or @(rf/subscribe [subs/hovered])
                       @(rf/subscribe [subs/selected-tile]))]
    [:div {:class ["h-full" "w-full"
                   "flex" "flex-col" "justify-between"
                   "relative" "px-3"]}
     [:div {:class ["h-1/12" "w-full"]}
      [controls/component]]
     [:div {:class ["h-1/2" "w-full" "flex" "flex-col"]}
      [player-summary/component]]
     [:div {:class ["h-1/3" "w-full" "flex" "mb-2"]}
      (if coordinate
        [tile/component coordinate]
        [map-summary/component])]
     [:div {:class ["h-full" "flex" "flex-col" "justify-center" "absolute" "-left-20"]}
      [overlay/component]]]))

(defn component []
  [:div {:class ["w-full " "h-full" "flex" "border-l-2" "border-blue-800"]}
   [content]])