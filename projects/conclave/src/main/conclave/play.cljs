(ns conclave.play
  (:require [conclave.map.core :as map]
            [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [conclave.view.common :as common]
            [conclave.view.map.main :as map-view]
            [re-frame.core :as rf]
            [oops.core :refer [oset!]]
            ["dom-to-image" :as dti]
            ["file-saver" :as file-saver]))

(def scale 140)
(def hex-path "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)")

(defn tile->image [coordinate {:keys [rotation] :as tile}]
  (let [[x-offset y-offset] (hex/coordinate->offset scale coordinate)]
    [:image {:href (str "images/" (tile/image tile))
             :x x-offset
             :y y-offset
             :width (* 2 scale)
             :class [(common/rotations rotation)]
             :style {:clip-path common/clipped-hex-path}}]
    [:polygon {:points "300,150 225,280 75,280 0,150 75,20 225,20"
               :transform (str "translate(" x-offset "," y-offset ")")}]))

(defn read-image-data [blob on-load]
  (-> (new js/FileReader)
      (oset! :onloadend (fn []
                          (this-as reader
                                   (on-load reader.result))))
      (.readAsDataURL blob)))

(defn inline-src [image-element]
  (-> (js/fetch (.-src image-element))
      (.then (fn [r] (.blob r)))
      (.then (fn [b]
               (read-image-data b (fn [result]
                                    (oset! image-element :src result)))))))

(defn hex-tile [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])]
    [tile->image coordinate tile]))

(def svg-element (atom nil))
(def canvas-element (atom nil))

(defn serialize-svg [svg]
  (let [serializer (new js/XMLSerializer)]
    (->> (.serializeToString serializer svg)
         (js/btoa)
         (str "data:image/svg+xml;base64,"))))

(defn render-to-image [content on-load]
  (-> (new js/Image)
      (oset! :onload (fn []
                       (this-as image
                                (on-load image))))
      (oset! :src content)))

(defn render-svg [svg-element canvas-element]
  (let [context (.getContext canvas-element "2d")
        b64-svg (serialize-svg svg-element)]
    (render-to-image b64-svg
                     (fn []
                       (this-as image
                                (.log js/console image)
                                (.log js/console context)
                                (.drawImage context image 0 0))))))

(comment
  (render-to-image (serialize-svg @svg-element) (fn [image]
                                                  (-> (.querySelector js/document "#target")
                                                      (.appendChild image))))
  (serialize-svg @svg-element)
  (render-svg @svg-element @canvas-element)
  (let [context (.getContext @canvas-element "2d")]
    (.fillText context "akjlsdlakjflkasjd" 20 20))
  (.toDataURL @canvas-element))

(defn svg-map []
  (when-let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
    [:div {:id "phantom"
           :class ["hidden"]}
     (into [:svg {:style {:width 1920
                          :height 1080}
                  :viewBox "-960 -540 1920 1080"
                  :ref #(reset! svg-element %)}
            [:<> [hex-tile [0 0 0]]]]
           (map (fn [coordinate] [hex-tile coordinate]) (map/coordinates galaxy-map)))]))

(defn translate-string [scale coordinate]
  (let [[x-offset y-offset] (hex/coordinate->offset scale coordinate)]
    (str "translate(" x-offset "px, " y-offset "px)")))

(defn ->hex-img [coordinate]
  (let [{:keys [rotation] :as tile} @(rf/subscribe [subs/tile coordinate])
        [x-offset y-offset] (hex/coordinate->offset scale coordinate)]
    [:img {:src (str "images/" (tile/image tile))
           :width (* scale 2)
           :class [(common/rotations rotation) "absolute"]
           :style {:clip-path common/clipped-hex-path
                   :transform (translate-string scale coordinate)}}]))

(def pane-size {:height 1080
                :width 1080})

(comment
  (map-view/compute-side-to-fit {:height 1920
                                 :width 1920} @(rf/subscribe [subs/galaxy-map])))

(defonce element (atom nil))
(defn ui []
  (when-let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
    [:div {:class ["bg-gray-900" "w-screen" "h-screen"]}
     (into [:div {:class ["flex" "justify-center" "items-center" "bg-gray-900"
                          "absolute" "z-[-1]"]
                  :style {:width "1750px"
                          :height "1750px"}
                  :ref #(reset! element %)}
            [->hex-img [0 0 0]]]
           (map (fn [coordinate] [->hex-img coordinate]))
           (map/coordinates galaxy-map))]))


(defn dl-url [filename dataUrl]
  (let [link (.createElement js/document "a")]
    (set! (.-download link) filename)
    (set! (.-href link) dataUrl)
    (.click link)))

(defn save-blob [filename blob]
  (.saveAs file-saver blob filename))

(defn show-svg []
  (let [serializer (new js/XMLSerializer)
        data-url  (->> (.serializeToString serializer @svg-element)
                       (js/btoa)
                       (str "data:image/svg+xml;base64,"))]
    (.open js/window data-url "svg_win")))

(comment
  (serialize-svg @svg-element)
  (show-svg)
  (let [serializer (new js/XMLSerializer)
        serialized  (->> (.serializeToString serializer @svg-element)
                         (js/btoa)
                         (str "data:image/svg+xml;base64,"))]
    (dl-url "svg-maybe" serialized))
  (-> (.toBlob dti @element {:width "1920" :height "1080"})
      (.then (partial save-blob "svg-is-go.png")))
  (-> (.toPng dti @element)
      (.then (partial dl-url "png-is-go.png"))))
