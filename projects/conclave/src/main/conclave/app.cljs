(ns conclave.app
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [conclave.hex :as hex]
            [conclave.handlers]
            [conclave.subs]
            [conclave.tiles.core :as tile]
            [conclave.map.layout :as layout]
            [conclave.map.core :as map]))

;; Assume flat top.
;; Size is length of side, or center to corner

(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn origin [content]
  [:div {:class ["relative"]} content])

(defn hex-style [size]
  {:height (str (hex/height size) "mm")
   :width (str (hex/width size) "mm")})

(defn epsilon [v] (* v 0.99))

(defn hex-overlay [coordinate tile]
  (let [mode @(rf/subscribe [:overlay/mode])]
    [:div {:class ["absolute" "bg-black" "text-white"
                   "top-1/2" "left-1/2" "transform" "-translate-x-1/2" "-translate-y-1/2"]}
     (case mode
       :coordinates (->> coordinate
                         (interpose ", ")
                         (apply str))
       :tile-number (:key tile)
       :res-inf     (str (:total/resources tile)
                         "/"
                         (:total/influence tile))
       :wormhole    (case (:wormhole tile) :alpha "Alpha" :beta "Beta" nil)
       nil)]))

(def galaxy-map (-> (map/build layout/eight-player)
                    (map/populate "ABCDE" tile/default-set)))

(defn hex-tile [size coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset (epsilon size) coordinate)
        tile (get-in galaxy-map [:tiles coordinate])]
    [:div {:class ["absolute" "transform" "-translate-x-1/2" "-translate-y-1/2"]
           :style (merge (hex-style size)
                         {:margin-left (str x-offset "mm")
                          :margin-top (str y-offset "mm")
                          :clip-path hex-path})}
     [hex-overlay coordinate tile]
     [:img {:src (str "images/" (tile/image tile))}]]))

(defn button [value dispatch]
  [:input {:type "button"
           :value value
           :class ["m-1"]
           :on-click #(rf/dispatch dispatch)}])

(defn controls []
  (let [mode @(rf/subscribe [:overlay/mode])]
    [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-center"]}
     [:div "Mode: " mode]
     [button "None" [:set-overlay :none]]
     [button "Tile Number" [:set-overlay :tile-number]]
     [button "Coordinates" [:set-overlay :coordinates]]
     [button "Res/Inf" [:set-overlay :res-inf]]
     [button "Wormhole" [:set-overlay :wormhole]]]))

(defn ui []
  [:div {:class ["h-screen" "w-screen" "bg-gray-900" "flex" "justify-center" "items-center"]}
   [controls]
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