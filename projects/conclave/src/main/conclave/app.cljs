(ns conclave.app
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.map.main :as map]
            [conclave.view.sidebar.main :as sidebar]
            [conclave.view.tutorial.main :as tutorial]
            [conclave.view.tutorial.handlers :as tutorial-handlers]
            [conclave.view.tutorial.subs :as tutorial-subs]
            [conclave.worker.client :as worker-client]
            [reagent.dom :as rd]
            [re-frame.core :as rf]))

(defn map-overlay []
  (when @(rf/subscribe [subs/processing?])
    [:div {:class ["absolute" "bg-black" "opacity-70" "top-0" "left-0" "w-2/3" "h-full" "z-app-overlay"
                   "flex" "justify-center" "items-center" "text-9xl"]}
     "Processing"]))

(defn app-overlay []
  (when (and (not @(rf/subscribe [subs/processing?]))
             @(rf/subscribe [tutorial-subs/active?]))
    [:div {:class ["absolute" "bg-black" "opacity-70" "top-0" "left-0" "w-full" "h-full" "z-app-overlay"
                   "flex" "justify-center" "items-center" "text-9xl"]
           :on-click #(rf/dispatch [tutorial-handlers/cancel])}]))

(defn ui []
  [:div {:class ["h-screen" "w-screen" "flex" "justify-center" "items-center" "bg-gray-900" "text-gray-200"]}
   [app-overlay]
   [:div {:class ["flex" "flex-col" "justify-center" "items-center" "w-2/3" "h-full"]
          :on-mouse-enter #(rf/dispatch [handlers/clear-hover])}
    [map/component]
    [map-overlay]
    [tutorial/component]]
   [:div {:class ["flex" "flex-col" "justify-center" "w-1/3" "h-full"]
          :on-mouse-enter #(rf/dispatch [handlers/clear-hover])}
    [sidebar/component]]])

(defn render []
  (rd/render [ui]
             (js/document.getElementById "app")))

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (render))

(defn init-location-watch []
  (.addEventListener js/window "popstate" #(rf/dispatch [handlers/location-changed])))

(defn init-dev []
  (worker-client/set-script-location "assets/app/js/worker.js")
  (rf/dispatch-sync [handlers/initialize])
  (init-location-watch)
  (render))

(defn init []
  (rf/dispatch-sync [handlers/initialize])
  (init-location-watch)
  (render))
