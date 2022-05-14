(ns conclave.view.sidebar.tile
  (:require [conclave.subs :as subs]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [conclave.utils.hex :as hex]
            [re-frame.core :as rf]))

(defn res-inf [planet-or-total]
  [:div {:class ["flex"]}
   [common/resource planet-or-total]
   [common/influence planet-or-total]])

(defn planet-summary [{:keys [name trait legendary specialty] :as planet}]
  [:div {:class ["flex" "w-full" "h-10"]}
   [:div {:class ["w-1/4" "mx-1" "flex" "items-center"]} name]
   [:div {:class ["w-1/6" "mx-1" "flex" "items-center" "justify-between"]}
    (icons/trait->img trait)
    (icons/specialty->img specialty)
    (when legendary icons/legendary)]
   [:div {:class ["w-1/12"]}]
   [:div {:class ["w-1/6" "mx-1" "flex" "justify-center" "items-center"]}
    [common/resource planet]]
   [:div {:class ["w-1/6" "mx-1" "flex" "justify-center" "items-center"]}
    [common/influence planet]]])

(defn planets-summary [{:keys [planets] :as _tile}]
  (when (seq planets)
    (-> [:div {:class ["h-full" "w-full" "flex" "flex-col" "justify-center"]}]
        (into (map planet-summary planets)))))

(defn tile-legend [[x y z :as coordinate] {:keys [key rotation] :as _tile}]
  (let [standard-classes ["h-6" "mx-0.5" "text-xs" "bg-gray-600"
                          "flex" "justify-around" "items-center" "cursor-pointer"]
        distance-from-selected @(rf/subscribe [subs/distance-from-selected coordinate])]
    [:<>
     [:div {:class (into standard-classes ["w-16"])
            :title "Coordinate"}
      [:div x] [:div y] [:div z]]
[:div {:class (into standard-classes ["w-6" "rounded-full" "border-2" "border-gray-400" "bg-gray-600"])
       :title "ring"}
 (hex/ring coordinate)]
     [:div {:class (into standard-classes ["w-6"])
            :style {:clip-path common/clipped-hex-path}
            :title "Tile Number"}
      (name key)]
     [:div {:class (into standard-classes ["rounded-full" "w-6"])
            :title "Rotation"}
      (or rotation 0)]
     [:div {:class (into standard-classes ["w-6" (when distance-from-selected "bg-gray-200")])
            :title "Distance from selected"}
      (or distance-from-selected "-")]]))

(defn component [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])]
    [:div {:class ["flex" "h-full" "w-full" "justify-center" "items-center" "p-1" "mb-2"]}
     (into [:div {:class ["flex" "h-full" "w-full" "relative"
                          "border" "border-gray-800" "rounded-lg" "p-2"]}
            (when coordinate
              [:div {:class ["absolute" "bottom-0" "right-0"
                             "p-1" "m-2" "w-44" "h-10"
                             "flex" "justify-center" "items-center"
                             "bg-gray-800" "rounded-md" "text-black"]}
               (tile-legend coordinate tile)])]
           (when coordinate
             [[:div {:class ["w-1/2" "h-full" "flex" "items-center"]}
               [common/tile->hex-image tile]]
              [:div {:class ["w-1/2" "h-full" "flex"]}
               [planets-summary tile]]]))]))
