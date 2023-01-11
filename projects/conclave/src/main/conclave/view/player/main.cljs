(ns conclave.view.player.main
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.player.core :as player]
            [conclave.view.common :as common]
            [conclave.view.icons :as icons]
            [re-frame.core :as rf]))

(comment
  (rf/dispatch [handlers/cancel-player-edit]))

(defn race-select [player-key]
  (let [available-races @(rf/subscribe [subs/races-with-availability player-key])]
    (into [common/select {:sub [subs/player-race-index player-key]
                          :dispatch-fn #(rf/dispatch [handlers/set-player-race player-key %])}
           [:option "--- None ---"]]
          (map (fn [{:keys [index name disabled] :as _race}]
                 [:option {:value index :disabled disabled} name])
               available-races))))

(defn player-row [player-key]
  (let [index (player/key->index player-key)]
    [common/h-box {:class ["h-16"]}
     [:div {:class ["w-1/12"]}
      index]
     [:div {:class ["w-1/2"]}
      [common/text-input  {:placeholder (str "Player " index)
                           :sub [subs/player-name player-key]
                           :dispatch-fn #(rf/dispatch [handlers/set-player-name player-key %])}]]
     [:div {:class ["w-1/12" "flex" "justify-center" "items-center" "rounded-lg" "bg-gray-700" "p-1" "mx-1"]}
      [icons/race-icon @(rf/subscribe [subs/player-race player-key])]]
     [:div {:class ["w-1/2"]}
      [race-select player-key]]]))

(defn player-rows []
  (let [player-keys @(rf/subscribe [subs/player-keys])]
    (into [common/v-box {}]
          (map (partial vector player-row) player-keys))))

(defn container []
  [:div {:class ["w-full" "h-full" "flex" "justify-center" "items-center"
                 "border" "rounded-lg" "border-blue-800" "p-2" "overflow-y-scroll" "overflow-x-none"]}
   [common/o-box {:class []}
    [player-rows]]])

(defn component []
  (when @(rf/subscribe [subs/modal-active? :player-edit])
    [:div {:class ["fixed" "h-3/4" "w-1/2" "z-app-overlay"
                   "rounded" "border-gray-700" "bg-gray-900" "text-white"
                   "flex" "justify-center" "items-center" "p-2" "leading-relaxed"]}
     [container]]))

(comment
  (rf/dispatch [handlers/start-player-edit])
  (rf/dispatch [handlers/cancel-player-edit]))
