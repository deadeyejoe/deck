(ns conclave.view.sidebar.edit
  (:require [conclave.handlers :as handlers]
            [conclave.view.common :as common]
            [conclave.player :as player]
            [conclave.view.icons :as icon]
            [conclave.subs :as subs]
            [medley.core :as medley]
            [reagent.core :as r]
            [re-frame.core :as rf]
            ["react-select$default" :as Select]))

(def race-options (->> player/races
                       vals
                       (sort-by :key)
                       (map  (fn [{:keys [key name code]}]
                               {:value key :label name :code code}))))

(def value->race-option (->> race-options
                             (map (juxt :value identity))
                             (into {})))

(defn edit-row [player-key]
  [:div {:class ["flex" "w-full" "my-1" "h-8" "py-1" "pl-3"]}
   [common/text-input [subs/player-name player-key] #(vector handlers/set-player-name player-key %)]])

(defn component []
  (let  [player-keys @(rf/subscribe [subs/player-keys])]
    (->> player-keys
         (map edit-row)
         (into [:div {:class ["flex" "flex-col" "justify-center"  "mb-1" "w-full"]}]))))
