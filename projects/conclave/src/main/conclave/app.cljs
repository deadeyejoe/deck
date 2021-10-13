(ns conclave.app
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [conclave.hex :as hex]))

;; Assume flat top.
;; Size is length of side, or center to corner

(def size "Side length, center to corner" 10)

(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn hex-style [size]
  {:height (str (hex/height size) "mm")
   :width (str (hex/width size) "mm")})

(defn origin [content]
  [:div {:class ["relative"]} content])

(defn epsilon [v] (* v 1.02))

(defn tile_no [] (->> (range 83)
                      shuffle
                      first))

(defn hex [size coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset (epsilon size) coordinate)]
    [:div {:class ["bg-white" "absolute" "transform" "-translate-x-1/2" "-translate-y-1/2" "hover:bg-blue-800"]
           :style (merge (hex-style size)
                         {:margin-left (str x-offset "mm")
                          :margin-top (str y-offset "mm")})}]))

(defn hex-tile [size coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset (epsilon size) coordinate)]
    [:div {:class ["absolute" "transform" "-translate-x-1/2" "-translate-y-1/2"]
           :style (merge (hex-style size)
                         {:margin-left (str x-offset "mm")
                          :margin-top (str y-offset "mm")})}
     [:img (merge {:src (str "images/ST_" (tile_no) ".png")})]]))

(defn ui []
  [:div {:class ["h-screen" "w-screen" "bg-gray-900" "flex" "justify-center" "items-center"]}
   [origin
    (into
     [:<> [hex-tile 17 [0 0 0]]]
     (map (fn [d] [hex-tile 17 d]) (mapcat hex/ring-coordinates (range 1 5))))]])

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