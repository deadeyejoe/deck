(ns authority.views.game-round.status
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]))

(def steps {1 "Score Objectives"
            2 "Reveal Public Objective"
            3 "Draw Action Cards"
            4 "Remove Command Tokens"
            5 "Gain & Redistribute Command Tokens"
            6 "Ready Cards"
            7 "Repair Units"
            8 "Return Strategy Cards"})

(defn item [[id text]]
  [:div {:key id :class ["mb-2"]} (str "- " text)])

(defn component []
  [:div {:class ["h-full" "w-screen" "flex" "flex-col" "justify-center" "items-center"]}
   [:div {:class ["text-3xl" "bg-gray-800" "flex" "flex-col" "justify-center" "items-center"
                  "p-8" "border" "border-gray-700" "rounded-lg"]}
    [:div {:class ["text-6xl" "mb-10"]} "Status Phase"]
    [:div {:class ["flex" "flex-col" "items-start"]}
     (doall
      (map item steps))]
    [:input {:type "button"
             :value "End Status Phase"
             :on-click #(rf/dispatch [:agenda/start])
             :class (into utils/primary-button ["mt-10"])}]]])

