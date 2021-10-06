(ns authority.views.game-round.strategy
  (:require [re-frame.core :as rf]
            [authority.views.common :as common]
            [authority.utils :as utils :refer  [listen]]
            [authority.constants :as const]))

(defn initiative-button [position initiative state]
  (let [event (case state
                :selected [:strategy/unset position initiative]
                :unselected [:strategy/set position initiative]
                [:disabled "strategy select"])]
    (common/initiative-badge {:initiative initiative
                              :state state
                              :click-handler #(rf/dispatch event)
                              :content initiative})))

(defn initiative-select [position available initiative]
  (initiative-button position initiative (if (available initiative) :unselected :disabled)))

(defn player-initiative-select [position]
  (let [{:keys [name initiative]} (listen [:player/at position])
        available @(rf/subscribe [:strategy/available])]
    [:div {:key position
           :class ["flex" "flex-row" "w-2/3" "justify-between" "text-3xl"]}
     [:div {:class ["w-32" "flex-shrink-0" "flex" "flex-row" "items-center"]} name]
     [:div
      {:class ["flex" "flex-row" "flex-grow"]}
      (if initiative
        (initiative-button position initiative :selected)
        (doall
         (map (partial initiative-select position available)
              const/initiatives)))]]))

(defn component []
  [:div {:class ["w-screen" "h-full" "flex" "flex-col" "justify-center" "items-center"]}
   [:div
    {:class ["w-1/2" "flex" "flex-col" "justify-center" "items-center" "bg-gray-800" "rounded-lg" "py-10"]}
    [:div {:class ["text-5xl"]} "Select Initiative Order"]
    (doall (map player-initiative-select @(rf/subscribe [:player/position-order])))
    [:input {:type "button"
             :value "Start Action Phase"
             :disabled (listen [:strategy/pending])
             :on-click #(rf/dispatch [:action/start])
             :class utils/primary-button}]]])