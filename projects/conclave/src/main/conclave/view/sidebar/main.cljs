(ns conclave.view.sidebar.main
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.sidebar.controls :as controls]
            [conclave.view.sidebar.edit :as edit]
            [conclave.view.sidebar.overlay :as overlay]
            [conclave.view.sidebar.summary :as summary]
            [conclave.view.sidebar.tile :as tile]
            [re-frame.core :as rf]))

(defn content []
  (let [player-edit @(rf/subscribe [subs/player-edit])]
    [:div {:class ["h-full" "w-full"
                   "flex" "flex-col" "justify-start"]}
     [:div {:class ["h-1/12"]}
      [controls/component]]
     [:div {:class ["h-1/2" "w-full" "flex" "flex-col"]}
      [:div {:class ["w-full" "flex" "items-center"]}
       [:div {:class ["mr-5" "text-xl" "w-40"]} (if player-edit "Edit Players" "Player Summary")]
       [common/button (if player-edit "Done" "Edit") [handlers/toggle-player-edit]]]
      (if player-edit
        [edit/component]
        [summary/component])]
     [:div {:class ["h-1/12" "w-full" "flex"]}
      [overlay/component]]
     [:div {:class ["h-1/3" "w-full" "flex"]}
      [tile/component]]]))

(defn component []
  [:div {:class ["w-full " "h-full" "flex"]}
   [:div {:class ["w-2" "bg-blue-900"]}]
   [content]])
