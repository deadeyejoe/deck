(ns conclave.view.player-summary
  (:require [re-frame.core :as rf]
            [conclave.subs :as subs]
            [conclave.view.icons :as icons]
            [conclave.tiles.core :as tile]
            [conclave.utils.utils :as utils]
            [conclave.view.common :as common]))

(defn summary-row [key]
  (let [{:keys [score
                resources
                optimal-resources
                influence
                optimal-influence
                traits
                specialties
                problems
                valid] :as summary} @(rf/subscribe [subs/player-summary key])]
    [:div (merge {:class ["flex" "justify-around" (when-not valid "bg-red-600")]}
                 (when-not valid {:title (->> problems (interpose ",") (apply str))}))
     [:div {:class ["w-1/12"]} key]
     [:div {:class ["w-1/12"]} (int score)]
     [:div {:class ["w-1/6"]} (str optimal-resources "/" optimal-influence)]
     [:div {:class ["w-1/12"]} (str "(" resources "/" influence ")")]
     [:div {:class ["flex" "justify-start" "w-1/4"]}
      (map icons/trait->img traits)]
     [:div {:class ["flex" "justify-end" "w-1/4"]}
      (map icons/specialty->img specialties)]]))

(defn constraint [{:keys [key contributions score] :as constraint-violation}]
  [:div {:class ["flex" "justify-between"]}
   [:div {:class ["flex" "justify-start" "w-1/2"]} key]
   [:div {:class ["flex" "justify-end" "w-1/4"]} contributions]
   [:div {:class ["flex" "justify-end" "w-1/4"]} score]])

(defn component []
  (let [player-keys @(rf/subscribe [subs/player-keys])
        constraint-contributions @(rf/subscribe [subs/constraint-contributions])]
    [:div {:class ["flex" "flex-col" "justify-center"  "mb-1"]}
     [:div "Player Summary"]
     (doall
      (map summary-row player-keys))
     [common/labeled-value "Variance" [subs/variance-score]]
     [constraint {:key "Constraints: "
                  :contributions "Contributions"
                  :score "Score"}]
     (doall
      (map constraint constraint-contributions))]))
