(ns conclave.app
  (:require [reagent.dom]
            [re-frame.core :as rf]
            [conclave.hex :as hex]
            [conclave.vector :as vect]
            [conclave.handlers]
            [conclave.subs]
            [conclave.worker]
            [conclave.tiles.core :as tile]
            [conclave.view.player-summary :as player-summary]))

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
  (let [content @(rf/subscribe [:overlay/content coordinate])]
    [:div {:class ["absolute" "bg-black" "text-white"
                   "top-1/2" "left-1/2" "transform" "-translate-x-1/2" "-translate-y-1/2"]}
     content]))

(defn hex-tile [size coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset (epsilon size) coordinate)
        tile @(rf/subscribe [:tile coordinate])
        highlighted? @(rf/subscribe [:highlighted? coordinate])
        selected? @(rf/subscribe [:selected? coordinate])]
    [:div {:class (concat ["absolute" "transform" "-translate-x-1/2" "-translate-y-1/2"
                           "flex" "justify-center" "items-center"]
                          (when highlighted?  ["bg-blue-600" "z-highlight"])
                          (when selected? ["bg-white" "z-highlight"]))
           :on-mouse-enter #(rf/dispatch [:hover/start coordinate])
           :on-click #(rf/dispatch [:tile/select coordinate])
           :style (merge (hex-style (if selected? (* size 1.1) size))
                         {:margin-left (str x-offset "mm")
                          :margin-top (str y-offset "mm")
                          :clip-path hex-path})}
     [hex-overlay coordinate]
     [:img (merge {:src (str "images/" (tile/image tile))}
                  (when (or highlighted? selected?) {:height "95%" :width "95%"}))]]))

(defn button [value dispatch]
  [:input {:type "button"
           :value value
           :class ["m-1" "text-gray-900"]
           :on-click #(rf/dispatch dispatch)}])

(defn value [label query-vector]
  (let [sub @(rf/subscribe query-vector)]
    [:div
     {:class ["flex" "justify-between"]}
     [:div (str label ":")]
     [:div sub]]))

(defn map-controls []
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div "Map controls"]
   [value "Swaps remaining" [:swap/count]]
   [button "Reset" [:map/generate "ABCDE"]]
   [button "Swap" [:map/swap]]
   [button "Step" [:map/step]]
   [button "Optimize" [:map/optimize]]])

(defn highlight-controls []
  (let [mode @(rf/subscribe [:highlight/mode])
        target @(rf/subscribe [:hovered])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Highlight Mode: " mode]
     [:div "Target: " (vect/->display target)]
     [button "Single" [:set-highlight :single]]
     [button "Adjacent" [:set-highlight :adjacent]]]))

(defn overlay-controls []
  (let [mode @(rf/subscribe [:overlay/mode])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Overlay Mode: " mode]
     [button "None" [:set-overlay :none]]
     [button "Tile Number" [:set-overlay :tile-number]]
     [button "Coordinates" [:set-overlay :coordinates]]
     [button "Res/Inf" [:set-overlay :res-inf]]
     [button "Wormhole" [:set-overlay :wormhole]]
     [button "Distance Score" [:set-overlay :distance-score]]
     [button "Highest Stake" [:set-overlay :highest-stake]]]))

(defn stake-controls []
  (let [mode @(rf/subscribe [:stake/mode])]
    [:div {:class ["flex" "flex-col" "justify-center"]}
     [:div "Stake Mode: " mode]
     [button "Discrete" [:set-stake :discrete]]
     [button "Continuous" [:set-stake :continuous]]]))

(defn constraints []
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div "Constraints"]
   [value "Adjacent Anomalies" [:constraint/anomalies]]
   [value "Adjacent Wormholes" [:constraint/wormholes]]
   [value "Zero Starts" [:constraint/zero-start]]])

(defn variances []
  [:div {:class ["flex" "flex-col" "justify-center" "w-full"]}
   [:div "Variances"]
   [value "Resource" [:score/variance :share/resource]]
   [value "Influence" [:score/variance :share/influence]]
   [value "Tech" [:score/variance :share/tech]]
   [value "Cultural" [:score/variance :share/cultural]]
   [value "Industrial" [:score/variance :share/industrial]]
   [value "Hazardous" [:score/variance :share/hazardous]]
   [value "Legendary" [:score/variance :share/legendary]]
   [:div {:class ["h-2" "w-full" "border-b-1" "rounded" "border-white"]}]
   [value "Naive Total" [:score/variance :total]]])

(defn ui []
  [:div {:class ["text-gray-200" "h-screen" "w-screen" "bg-gray-900" "flex" "justify-center" "items-center"]}
   [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-around"]}
    [map-controls]
    [highlight-controls]
    [overlay-controls]
    [stake-controls]]
   [:div {:class ["absolute" "right-0" "inset-y-0" "flex" "flex-col" "justify-around" "w-1/6" "mr-10"]}
    [player-summary/component]
    [constraints]
    [variances]]
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
  (rf/dispatch-sync [:initialize "ABCDE"])
  (render))