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

(defn ->hexagon [coordinate]
  [:svg (merge {:key (apply str "hex" coordinate)
                :viewBox "0 0 300 300"
                :class ["fill-blue-900" "shrink-0" "absolute"]
                :style {:transform (translate-string scale coordinate)}}
               (common/side->hex-dimension scale 1.2))
   [:polygon {:points "300,150 225,280 75,280 0,150 75,20 225,20"}]])

(defn ->hex-img [coordinate]
  (let [{:keys [rotation] :as tile} @(rf/subscribe [subs/tile coordinate])]
    [:img {:key (apply str "img" coordinate)
           :src (str "images/" (tile/image tile))
           :width (* scale 2)
           :class ["absolute"]
           :style {:clip-path common/clipped-hex-path
                   :transform (str (translate-string scale coordinate) " "
                                   (when rotation (str "rotate(" (common/rotation-degrees rotation) "deg)")))}}]))

(defn hidden-component-mounted [map-index element]
  (let [filename (str "conclave-" map-index ".jpg")]
    (-> (.toJpeg dom-to-image element)
        (.then (partial web/download-url filename))
        (.then #(signal/>unset! capture-signal)))))

(defn compute-dimensions [galaxy-map]
  (let [radius (map/radius galaxy-map)
        height-in-hexes (+ radius radius 1)
        scaled-height (* height-in-hexes
                         (hex/height scale))]
    {:height (+ scaled-height 40)
     :width (+ scaled-height 40)}))

(defn component []
  (let [galaxy-map @(rf/subscribe [subs/galaxy-map])
        map-index @(rf/subscribe [subs/storage-index])]
    (reduce into
            [:div {:id "screenshot-component"
                   :class ["flex" "justify-center" "items-center" "bg-gray-900"
                           "absolute" "z-basement"]
                   :style (medley/map-vals #(str % "px")
                                           (compute-dimensions galaxy-map))
                   :ref (partial hidden-component-mounted map-index)}]
            [(map (partial vector ->hexagon) (map/coordinates galaxy-map))
             (map (partial vector ->hex-img) (map/coordinates galaxy-map))])))

(defonce element (atom nil))
(defn hidden-component []
  (when (signal/<set? capture-signal)
    [component]))

(defn capture! []
  (signal/>set! capture-signal))
