(ns authority.views.restore
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]))

(defn component []
  [:div {:class ["w-screen" "h-screen" "flex" "flex-col" "flex-nowrap" "justify-center" "items-center"]}
   [:div
    {:class ["flex-grow-0" "max-w-6xl" "flex" "flex-col" "justify-center"]}
    [:div {:class ["text-center"]} "Previous Game Detected"]
    [:div {:class ["text-center"]} "Do you wish to restore?"]
    [:input {:type "button"
             :value "Restore"
             :on-click #(rf/dispatch [:restore-game])
             :class utils/primary-button}]
    [:input {:type "button"
             :value "New Game"
             :on-click #(rf/dispatch [:new-game])
             :class utils/primary-button}]]])