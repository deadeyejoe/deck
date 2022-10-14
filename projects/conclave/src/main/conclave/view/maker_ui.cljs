(ns conclave.view.maker-ui
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [conclave.utils.vector :as vect]
            [conclave.view.common :as common]
            [conclave.view.map.controls :as map-controls]
            [conclave.view.player-summary :as player-summary]
            [reagent.dom]
            [re-frame.core :as rf]))

;; Assume flat top.
;; Size is length of side, or center to corner

(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn origin [content]
  [:div {:class ["relative"]} content])

(defn hex-style [size]
  {:height (str (hex/height size) "mm")
   :width (str (hex/width size) "mm")})

(defn epsilon [v] (* v 0.99))

(defn hex-overlay [coordinate]
  (let [content @(rf/subscribe [subs/overlay-content coordinate])]
    [:div {:class ["absolute" "bg-black" "text-white"
                   "top-1/2" "left-1/2" "transform" "-translate-x-1/2" "-translate-y-1/2"]}
     content]))

(defn hex-tile [size coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset (epsilon size) coordinate)
        tile @(rf/subscribe [subs/tile coordinate])
        highlighted? @(rf/subscribe [subs/tile-highlighted? coordinate])
        selected? @(rf/subscribe [subs/tile-selected? coordinate])]
    [:div {:class (concat ["absolute" "transform" "-translate-x-1/2" "-translate-y-1/2"
                           "flex" "justify-center" "items-center"]
                          (when highlighted?  ["bg-blue-600" "z-highlight"])
                          (when selected? ["bg-white" "z-highlight"]))
           :on-mouse-enter #(rf/dispatch [handlers/set-hover coordinate])
           :on-click #(rf/dispatch [handlers/select-tile coordinate])
           :style (merge (hex-style (if selected? (* size 1.1) size))
                         {:margin-left (str x-offset "mm")
                          :margin-top (str y-offset "mm")
                          :clip-path hex-path})}
     [hex-overlay coordinate]
     [:img (merge {:src (str "images/" (tile/image tile))}
                  (when (or highlighted? selected?) {:height "95%" :width "95%"}))]]))

(defn highlight-controls []
  (let [mode @(rf/subscribe [subs/highlight-mode])
        target @(rf/subscribe [subs/hovered])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Highlight Mode: " mode]
     [:div "Target: " (vect/->display target)]
     [common/button "Single" [handlers/set-highlight :single]]
     [common/button "Adjacent" [handlers/set-highlight :adjacent]]
     [common/button "Slice" [handlers/set-highlight :slice]]]))

(defn overlay-controls []
  (let [mode @(rf/subscribe [subs/overlay-mode])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Overlay Mode: " mode]
     [common/button "None" [handlers/set-overlay :none]]
     [common/button "Tile Number" [handlers/set-overlay :tile-number]]
     [common/button "Coordinates" [handlers/set-overlay :coordinates]]
     [common/button "Res/Inf" [handlers/set-overlay :res-inf]]
     [common/button "Wormhole" [handlers/set-overlay :wormhole]]
     [common/button "Tech" [handlers/set-overlay :tech]]
     [common/button "Legendary" [handlers/set-overlay :legendary]]
     [common/button "Tile Score" [handlers/set-overlay :tile-score]]
     [common/button "Tile Share" [handlers/set-overlay :tile-share]]
     [common/button "Distance Score" [handlers/set-overlay :distance-score]]
     [common/button "Highest Stake" [handlers/set-overlay :highest-stake]]]))

(defn ui []
  [:div {:class ["text-gray-200" "h-screen" "w-screen" "bg-gray-900" "flex" "justify-center" "items-center"]}
   [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-around"]}
    [map-controls/component]
    [highlight-controls]
    [overlay-controls]]
   [:div {:class ["absolute" "right-0" "inset-y-0" "flex" "flex-col" "justify-around" "w-1/5" "mr-10"]}
    [player-summary/component]]
   [origin
    (into
     [:<> [hex-tile 17 [0 0 0]]]
     (map (fn [d] [hex-tile 17 d]) (mapcat hex/ring-coordinates (range 1 5))))]])

(defn render []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))
