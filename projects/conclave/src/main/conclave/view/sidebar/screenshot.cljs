(ns conclave.view.sidebar.screenshot
  (:require [conclave.components.signal :as signal]
            [conclave.map.core :as map]
            [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [conclave.utils.web :as web]
            [conclave.view.common :as common]
            [medley.core :as medley]
            [re-frame.core :as rf]
            ["dom-to-image" :as dom-to-image]))

(def scale 140)
(def capture-signal ::capture)

(defn translate-string [scale coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset scale coordinate)]
    (str "translate(" x-offset "px, " y-offset "px)")))

(defn ->hex-img [coordinate]
  (let [{:keys [rotation] :as tile} @(rf/subscribe [subs/tile coordinate])]
    [:img {:src (str "images/" (tile/image tile))
           :width (* scale 2)
           :class [(common/rotations rotation) "absolute"]
           :style {:clip-path common/clipped-hex-path
                   :transform (translate-string scale coordinate)}}]))

(defn hidden-component-mounted [element]
  (-> (.toPng dom-to-image element)
      (.then (partial web/download-url "screenshot-is-go.png"))
      (.then #(signal/>unset! capture-signal))))

(defn compute-dimensions [galaxy-map]
  (let [radius (map/radius galaxy-map)
        height-in-hexes (+ radius radius 1)
        scaled-height (* height-in-hexes
                         (hex/height scale))]
    {:height (+ scaled-height 40)
     :width (+ scaled-height 40)}))

(defonce element (atom nil))
(defn hidden-component []
  (when (signal/<set? capture-signal)
    (let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
      (into [:div {:id "screenshot-component"
                   :class ["flex" "justify-center" "items-center" "bg-gray-900"
                           "absolute" "z-basement"]
                   :style (medley/map-vals #(str % "px")
                                           (compute-dimensions galaxy-map))
                   :ref hidden-component-mounted}
             [->hex-img [0 0 0]]]
            (map (fn [coordinate] [->hex-img coordinate]))
            (map/coordinates galaxy-map)))))

(defn capture! []
  (signal/>set! capture-signal))
