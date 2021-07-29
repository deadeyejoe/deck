(ns authority.views.game-round.strategy
  (:require [re-frame.core :as rf]
            [authority.utils :as utils :refer  [listen]]
            [authority.constants :as const]))

(defn initiative-select [position available initiative]
  (let [disabled? (not (available initiative))]
    [:input {:type "button"
             :key initiative
             :value initiative
             :disabled disabled?
             :on-click #(rf/dispatch [:strategy/set position initiative])
             :class (into ["px-2" "m-1" "rounded" "border-2" "cursor-pointer"]
                          (if disabled?
                            ["border-gray-400" "bg-gray-500" "text-gray-800"]
                            [(const/strategy->border initiative) "bg-gray-800"]))}]))

(defn initiative-selected [position initiative]
  [:input {:type "button"
           :key initiative
           :value initiative
           :on-click #(rf/dispatch [:strategy/unset position])
           :class ["px-2" "m-1" "border-transparent" "border" "rounded"  "text-black" "cursor-pointer"
                   (const/strategy->bg initiative)]}])

(defn player-initiative-select [position]
  (let [{:keys [name initiative]} (listen [:player position])
        available @(rf/subscribe [:strategy/available])]
    [:div {:key position
           :class ["flex" "flex-row" "w-1/2"]}
     [:div {:class ["w-32" "flex-shrink-0" "flex" "flex-row" "items-center"]} name]
     (if initiative
       (initiative-selected position initiative)
       (doall
        (map (partial initiative-select position available)
             const/initiatives)))]))

(defn component []
  [:div {:class ["w-screen" "h-full" "flex" "flex-col" "justify-center" "items-center"]}
   [:div
    {:class ["w-1/2" "flex" "flex-col" "justify-center" "items-center" "bg-gray-800" "rounded-lg" "py-20"]}
    [:div {:class ["text-5xl"]} "Select Initiative Order"]
    (doall (map player-initiative-select @(rf/subscribe [:positions])))
    [:input {:type "button"
             :value "Start Action Phase"
             :disabled (listen [:strategy/pending])
             :on-click #(rf/dispatch [:action/start])
             :class utils/primary-button}]]])