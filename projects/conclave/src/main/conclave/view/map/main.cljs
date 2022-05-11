(ns conclave.view.map.main
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.map.core :as map]
            [conclave.utils.hex :as hex]
            [conclave.view.common :as common]
            [conclave.view.map.overlay :as overlay]
            [clojure.string :as str]
            [re-frame.core :as rf]))

;; Assume flat top.
;; Size is length of side, or center to corner
(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn side->hex-dimension [size]
  {:height (str (hex/height size) "mm")
   :width (str (hex/width size) "mm")})

(defn hex-overlay [{:keys [side] :as _size-options} coordinate]
  (let [content (overlay/component coordinate)]
    [:div {:class (conj ["absolute" "z-overlay" "top-1/2" "left-1/2"
                         "transform" "-translate-x-1/2" "-translate-y-1/2"
                         "flex" "justify-center" "items-center"
                         "transition-opacity"]
                        (if content "opacity-90" "opacity-0"))
           :style (merge (side->hex-dimension (* 0.7 side))
                         {:clip-path hex-path})}
     content]))

(defn hex-tile
  ([coordinate] (hex-tile {:side 15 :epsilon 0.995} coordinate))
  ([{:keys [side epsilon] :as size-options} coordinate]
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
            :style (merge (side->hex-dimension side)
                          {:margin-left (str x-offset "mm")
                           :margin-top (str y-offset "mm")
                           :clip-path hex-path})}
      [common/hex-image coordinate]
      [hex-overlay size-options coordinate]])))

(defn origin [content]
  [:div {:class ["relative"]} content])

(defn component []
  (when-let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
    [origin
     (into
      [:<> [hex-tile [0 0 0]]]
      (map (fn [coordinate] [hex-tile coordinate]) (map/coordinates galaxy-map)))]))
