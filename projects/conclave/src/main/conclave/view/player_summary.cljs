(ns conclave.view.player-summary
  (:require [re-frame.core :as rf]
            [conclave.view.icons :as icons]
            [conclave.tiles.core :as tile]))

(defn summary-row [key]
  (let [summary @(rf/subscribe [:player/summary key])]
    [:div {:class ["flex" "justify-around" "mb-1"]}
     [:div {:class ["w-2/12"]} key]
     [:div {:class ["w-2/12"]} (:total/resources summary)]
     [:div {:class ["w-2/12"]} (:total/influence summary)]
     [:div {:class ["flex" "justify-start" "w-1/2"]}
      (map icons/trait->img (:total/traits summary))]
     [:div {:class ["flex" "justify-end" "w-1/3"]}
      (map icons/specialty->img (:total/specialty summary))]]))

(defn component []
  (let [player-keys @(rf/subscribe [:player/keys])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Player Summary"]
     (doall
      (map summary-row player-keys))]))