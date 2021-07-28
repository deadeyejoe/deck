(ns authority.views.players
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]))

(defn name-input [position]
  (let [name (rf/subscribe [:player/name position])]
    [:div {:key position
           :class ["p-1"]}
     [:span {:class ["p-1" "mr-1" "mb-1" "border" "border-gray-500" "rounded"]} position]
     [:input {:type "text"
              :value @name
              :on-change #(rf/dispatch-sync [:save-name position (-> % .-target .-value)])
              :class ["rounded" "back" "text-gray-200" "bg-gray-600"]}]]))

(defn component []
  [:div {:class ["w-screen" "h-screen" "flex" "flex-col" "flex-nowrap" "justify-center" "items-center"]}
   [:div
    {:class ["flex-grow-0" "max-w-6xl" "flex" "flex-col" "justify-center"]}
    [:div {:class ["text-center"]} "Enter player names"]
    (doall (map name-input (range 1 9)))
    [:input {:type "button"
             :value "Confirm"
             :on-click #(rf/dispatch [:start-game])
             :class utils/primary-button}]]])