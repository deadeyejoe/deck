(ns authority.views.game-round.agenda
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]))

(def steps {1 "Choose Agenda"
            2 "Timing Window: When an agenda is revealed"
            3 "Vote"
            4 " Tally"})

(defn item [[id text]]
  [:div {:key id :class ["mb-2"]} (str "- " text)])

(defn component []
  [:div {:class ["h-full" "w-screen" "flex" "flex-col" "justify-center" "items-center"]}
   [:div {:class ["text-3xl" "bg-gray-800" "flex" "flex-col" "justify-center" "items-center"
                  "p-8" "border" "border-gray-700" "rounded-lg"]}
    [:div {:class ["text-6xl" "mb-10"]} "Agenda Phase"]
    [:div {:class ["flex" "flex-col" "items-start"]}
     (doall
      (map item steps))]
    [:input {:type "button"
             :value "End Round"
             :on-click #(rf/dispatch [:round/end])
             :class (into utils/primary-button ["mt-10"])}]]])