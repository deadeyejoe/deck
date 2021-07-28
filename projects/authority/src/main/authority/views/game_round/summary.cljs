(ns authority.views.game-round.summary
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]))


(defn item [[id text]]
  [:div {:key id :class ["mb-2"]} (str "- " text)])

(defn component []
  (let [round-number (utils/listen [:round/number])]
    [:div {:class ["h-full" "w-screen" "flex" "flex-col" "justify-center" "items-center"]}
     [:div {:class ["text-3xl" "bg-gray-800" "flex" "flex-col" "justify-center" "items-center"
                    "p-8" "border" "border-gray-700" "rounded-lg"]}
      [:div {:class ["text-6xl" "mb-10"]} (str "End of Round " round-number)]
      [:div {:class ["flex" "flex-col" "items-start"]}
       #_(doall
          (map item steps))]
      [:input {:type "button"
               :value "Start Next Round"
               :on-click #(rf/dispatch [:round/start])
               :class (into utils/primary-button ["mt-10"])}]]]))