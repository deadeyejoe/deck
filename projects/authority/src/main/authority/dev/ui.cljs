(ns authority.dev.ui
  (:require [authority.constants :as const]
            [authority.views.initiative :as initiative]
            [re-frame.core :as rf]))

(defn row [initiative]
  [:div {:key initiative
         :class ["w-full" "h-full"
                 "flex" "justify-start" "items-center" "p-1"]}
   [initiative/badge initiative]
   [:div {:class ["w-5"]}]
   [initiative/badge initiative :exhausted]
   [:div {:class ["w-5"]}]
   [initiative/badge initiative :active]
   [:div {:class ["w-5"]}]
   [:div {:class ["opacity-40" "flex"]}
    [initiative/badge initiative]
    [:div {:class ["w-5"]}]
    [initiative/badge initiative :exhausted]]])

(defn component []
  [:div {:class ["w-full" "h-full"
                 "flex" "flex-col" "justify-start" "items-center"]}
   (doall (map row const/initiatives))])

(comment
  (swap! re-frame.db/app-db assoc :game/state :dev))
