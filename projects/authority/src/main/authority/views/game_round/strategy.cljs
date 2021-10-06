(ns authority.views.game-round.strategy
  (:require [re-frame.core :as rf]
            [authority.utils :as utils :refer  [listen]]
            [authority.constants :as const]))

(defn initiative-button [position initiative state]
  (let [border (if (= state :disabled)
                 "bg-gray-400"
                 (const/strategy->border initiative :bg))
        background (case state
                     :disabled "bg-gray-500"
                     :unselected "bg-gray-800"
                     :selected (const/strategy->bg initiative))
        text (case state
               :disabled "text-gray-800"
               :unselected "text-white"
               :selected "text-black")
        click-handler #(rf/dispatch (case state
                                      :selected [:strategy/unset position initiative]
                                      :unselected [:strategy/set position initiative]
                                      [:disabled "strategy select"]))
        poly-mod {:clip-path (utils/polygon 25 5 25 5)}]
    [:div {:key initiative
           :on-click click-handler
           :class ["m-2" "cursor-pointer" border text]
           :style poly-mod}
     [:div {:class ["m-0.5" "px-2" "py-0.5" background]
            :style poly-mod}
      initiative]]))

(defn initiative-select [position available initiative]
  (initiative-button position initiative (if (available initiative) :unselected :disabled)))

(defn initiative-selected [position initiative]
  (initiative-button position initiative :selected))

(defn player-initiative-select [position]
  (let [{:keys [name initiative]} (listen [:player/at position])
        available @(rf/subscribe [:strategy/available])]
    [:div {:key position
           :class ["flex" "flex-row" "w-2/3" "justify-between" "text-3xl"]}
     [:div {:class ["w-32" "flex-shrink-0" "flex" "flex-row" "items-center"]} name]
     [:div
      {:class ["flex" "flex-row" "flex-grow"]}
      (if initiative
        (initiative-selected position initiative)
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