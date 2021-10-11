(ns ur.app
  (:require [reagent.dom]
            [re-frame.core :as rf]))

(defn ui [] [:div {:class ["text-hueg"]} "Ur-app"])

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