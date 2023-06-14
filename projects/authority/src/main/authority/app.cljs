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

(defn hidden-button [label dispatch]
  [:div {:class ["flex" "justify-center" "items-center"
                 "cursor-pointer" "text-gray-800"
                 "hover:bg-gray-700"]
         :on-click #(rf/dispatch dispatch)}
   label])

(defn ui []
  [:div {:class ["font-sans" "text-xl" "text-gray-300" "bg-gray-800"]}
   (let [state @(rf/subscribe [:game/state])]
     (case state
       :restore [restore/component]
       :player-select [players/component]
       :game-round [game-round/component]
       (str "Unrecognized state")))
   [shortcut/component]
   [:div {:class ["absolute" "top-0" "right-0" "m-5" "flex"]}
    [hidden-button "DB" [:copy-db]]
    [hidden-button "RE" [:new-game-undoable]]
    [hidden-button "UN" [:undo]]]])


(def initiative-path "M 7.9375005,2.6458395 H 22.489581 c 0.417159,0.4802 1.01075,0.88759 1.322919,1.41128 V 25.13542 c -1.5875,2.64583 -3.174999,5.29167 -4.7625,7.9375 H 3.9687505 c -0.417158,-0.48019 -1.01075,-0.88709 -1.32292,-1.410771 v -21.07881 c 1.763893,-2.6458295 3.52778,-5.2916695 5.29167,-7.9374995 z M 5.2916675,-5e-7 c -1.76389,2.64583 -3.527777,5.29167 -5.291667,7.9375 V 34.395839 c 0.4802,0.41716 0.88708,1.01074 1.41077,1.322911 H 21.16667 c 1.76389,-2.64583 3.52777,-5.291671 5.29167,-7.9375 V 1.3229195 C 25.97814,0.9057595 25.57126,0.3121695 25.04757,-4.9999998e-7 Z")
(def initiative-border-path "m 1.235071,9.2604095 5.291667,-7.9375 h 17.197914 l 1.32292,1.32292 V 26.458329 l -5.29167,7.9375 H 2.557988 l -1.322917,-1.05833 z")
(defn ui-dev []
  [:div {:class ["font-sans" "text-xl" "bg-gray-800" "h-screen" "w-screen" "flex" "justify-center" "items-center"]}
   [:svg {:height "300px"
          :view-box "-2 -2 30.458342 39.71875"
          :class ["fill-transparent"]}
    [:defs
     [:filter {:id "blur"}
      [:feGaussianBlur
       [:animate {:attributeName "stdDeviation"
                  :attributeType "XML"
                  :restart "always"
                  :repeat-count "indefinite"
                  :dur "2s"
                  :values "0.5;2;0.5"
                  :fill "freeze"}]]]]
    [:path {:d initiative-path
            :class ["fill-red-800"]
            :style {:filter "url(#blur)"}}]
    [:path {:d initiative-path
            :class ["fill-red-800"]}]
    [:path {:class ["stroke-red-300" "stroke-[0.4]" "fill-transparent"]
            :d initiative-border-path}]]])

(defn render []
  (reagent.dom/render [ui-dev]
                      (js/document.getElementById "app")))

;; Init ====================================================

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (render))

(defn init []
  (rf/dispatch-sync [:initialize])
  (render))
