(ns conclave.app
  (:require [conclave.components.signal :as signal]
            [conclave.generate.core]
            [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.generation.main :as generation]
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

(defn generation-button []
  [:div {:class ["absolute" "z-menu" "bottom-0" "left-0"
                 "flex" "justify-center" "items-center" "w-1/12" "h-1/12"]}
   [generation/button]])

(defn generation-sidebar []
  (let [open? (signal/<set? generation/open-signal)]
    [:div {:class ["absolute" "z-menu" "flex" "flex-col" "justify-center" "items-center"
                   "h-full" (if open? "w-1/6" "w-0") "left-0" "transition-[width]"]}
     [generation/component]]))

(comment
  (signal/>toggle! generation/open-signal))

(defn ui []
  [:div {:class ["h-screen" "w-screen" "flex" "flex-col" "lg:flex-row" "justify-center" "items-center" "bg-gray-900" "text-gray-200"
                 "font-sans"]}
   [app-overlay]
   [:div {:class ["flex" "flex-col" "justify-center" "items-center"
                  "w-full" "lg:w-2/3" "h-2/3" "lg:h-full"]}
    [generation-button]
    [generation-sidebar]
    [map/component]
    [map-overlay]
    [tutorial/component]]
   [:div {:class ["flex" "flex-col" "justify-center"
                  "w-full" "lg:w-1/3" "h-1/3" "lg:h-full"]
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
