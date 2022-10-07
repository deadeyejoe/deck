(ns conclave.view.map.main
  (:require [conclave.components.signal :as signal]
            [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.map.core :as map]
            [conclave.utils.hex :as hex]
            [conclave.view.common :as common]
            [conclave.view.map.overlay :as overlay]
            [conclave.utils.web :as web-util]
            [clojure.string :as str]
            [re-frame.core :as rf]))

;; Assume flat top.
;; Size is length of side, or center to corner
(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn hex-overlay [{:keys [side] :as _size-options} coordinate]
  (let [content (overlay/component coordinate)]
    [:div {:class (conj ["absolute" "z-overlay" "top-1/2" "left-1/2"
                         "transform" "-translate-x-1/2" "-translate-y-1/2"
                         "flex" "justify-center" "items-center"
                         "transition-opacity"]
                        (if content "opacity-90" "opacity-0"))
           :style (merge (common/side->hex-dimension (* 0.7 side))
                         {:clip-path hex-path})}
     content]))

(defn hex-tile
  ([coordinate] (hex-tile {:side 60} coordinate))
  ([{:keys [side epsilon] :or {epsilon 0.995} :as size-options} coordinate]
   (let [[x-offset y-offset] (hex/coordinate->offset (* epsilon side) coordinate)
         highlighted? @(rf/subscribe [subs/tile-highlighted? coordinate])
         selected? @(rf/subscribe [subs/tile-selected? coordinate])]
     [:div {:key (str/join coordinate)
            :class (concat ["absolute" "transform" "-translate-x-1/2" "-translate-y-1/2"
                            "flex" "justify-center" "items-center" "hover:z-highlight"
                            "transition-colors"]
                           (if (or highlighted? selected?) ["bg-white"] ["bg-blue-900"]))
            :on-mouse-enter #(do (rf/dispatch [handlers/set-hover coordinate])
                                 (.stopPropagation %))
            :on-click #(rf/dispatch [handlers/select-tile coordinate])
            :style (merge (common/side->hex-dimension side)
                          {:margin-left (str x-offset "px")
                           :margin-top (str y-offset "px")
                           :clip-path hex-path})}
      [common/hex-image coordinate]
      [hex-overlay size-options coordinate]])))

(defn origin [content]
  [:div {:class ["relative"]} content])

(defn height->side [pane-height radius]
  (let [height-in-hexes (+ 1 radius radius)]
    (hex/height->side (/ (- pane-height 20)
                         height-in-hexes))))

(defn width->side [pane-width radius]
  (let [width-in-sides (apply + 2 (take radius (cycle [1 2])))]
    (/ (- pane-width 60)
       width-in-sides 2)))

(defn compute-side-to-fit [{pane-height :height pane-width :width} galaxy-map]
  (let [radius (map/radius galaxy-map)]
    (if (< pane-height pane-width)
      (height->side pane-height radius)
      (width->side pane-width radius))))

(defn map-container [& content]
  (let [observer (web-util/dimension-observer (partial signal/>set! ::map-dimensions))]
    (fn [& content]
      (into [:div {:class ["relative" "flex" "flex-col" "justify-center" "items-center" "w-full" "h-full"]
                   :ref (fn [e] (when e (.observe observer e)))}]
            content))))

(defn component []
  (when-let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
    [map-container
     (let [side (compute-side-to-fit (signal/<value ::map-dimensions) galaxy-map)]
       [origin
        (into
         [:<> [hex-tile [0 0 0]]]
         (map (fn [coordinate] [hex-tile {:side side} coordinate]) (map/coordinates galaxy-map)))])]))
