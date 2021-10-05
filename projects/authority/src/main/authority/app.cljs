(ns authority.app
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [authority.coeffects]
            [authority.interceptors]
            [authority.event-handlers]
            [authority.subs]
            [authority.storage]
            [authority.shortcuts]
            [authority.views.restore :as restore]
            [authority.views.players :as players]
            [authority.views.game-round :as game-round]
            [authority.views.shortcuts :as shortcut]))

(defn ui []
  [:div {:class ["font-sans" "text-xl" "text-gray-300" "bg-gray-800"]}
   (let [state @(rf/subscribe [:game/state])]
     (case state
       :restore [restore/component]
       :player-select [players/component]
       :game-round [game-round/component]
       (str "Unrecognized state")))
   [shortcut/component]])

(defn render []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))

;; Init ====================================================

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (render))

(defn init []
  (rf/dispatch-sync [:initialize])
  (render))