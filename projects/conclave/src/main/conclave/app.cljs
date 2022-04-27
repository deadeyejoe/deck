(ns conclave.app
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.map.main :as map]
            [conclave.view.sidebar.main :as sidebar]
            [conclave.worker.client :as worker-client]
            [reagent.dom :as rd]
            [re-frame.core :as rf]))

(defn overlay []
  (when @(rf/subscribe [subs/processing?])
    [:div {:class ["absolute" "bg-black" "opacity-70" "top-0" "left-0" "w-2/3" "h-full" "z-app-overlay"
                   "flex" "justify-center" "items-center" "text-9xl"]}
     "Processing"]))

(defn ui []
  [:div {:class ["text-gray-200" "h-screen" "w-screen" "bg-gray-900" "flex" "justify-center" "items-center"]}
   [:div {:class ["flex" "flex-col" "justify-center" "items-center" "w-2/3" "h-full"]
          :on-mouse-enter #(rf/dispatch [handlers/clear-hover])}
    [map/component]
    [overlay]]
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

(defn init-dev []
  (worker-client/set-script-location "assets/app/js/worker.js")
  (rf/dispatch-sync [handlers/initialize])
  (render))

(defn init []
  (rf/dispatch-sync [handlers/initialize])
  (rf/dispatch-sync [handlers/optimize-map])
  (render))
