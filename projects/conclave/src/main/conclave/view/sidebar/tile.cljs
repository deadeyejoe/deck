(ns conclave.view.sidebar.tile
  (:require [conclave.subs :as subs]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [re-frame.core :as rf]))

(defn res-inf [planet-or-total]
  [:div {:class ["flex"]}
   [common/resource planet-or-total]
   [common/influence planet-or-total]])

(defn planet-summary [{:keys [name trait legendary specialty] :as planet}]
  [:div {:class ["flex" "w-full" "h-10"]}
   [:div {:class ["w-2/6" "mx-1" "flex" "items-center"]} name]
   [:div {:class ["w-1/6" "mx-1" "flex" "items-center" "justify-between"]}
    (icons/trait->img trait)
    (icons/specialty->img specialty)
    (when legendary icons/legendary)]
   [:div {:class ["w-1/4" "mx-1" "flex" "justify-center" "items-center"]}
    [common/resource planet]]
   [:div {:class ["w-1/4" "mx-1" "flex" "justify-center" "items-center"]}
    [common/influence planet]]])

(defn planets-summary [{:keys [planets] :as _tile}]
  (when (seq planets)
    (-> [:div {:class ["h-full" "w-full" "flex" "flex-col" "justify-center"]}]
        (into (map planet-summary planets)))))

(defn tile-legend [[x y z :as coordinate] {:keys [key rotation] :as _tile}]
  (let [standard-classes ["h-6" "mx-0.5" "text-xs" "bg-gray-600" "text-black"
                          "flex" "justify-around" "items-center"]
        selected @(rf/subscribe [subs/selected-tile])]
    [:div {:class ["absolute" "bottom-0" "right-0" "flex" "p-1" "m-1"
                   "bg-black" "border" "border-gray-600"]}
     [:div {:class (into standard-classes ["w-6"])
            :style {:clip-path common/clipped-hex-path}}
      (name key)]
     [:div {:class (into standard-classes ["rounded-xl" "w-6"])}
      (or rotation 0)]
     [:div {:class (into standard-classes ["w-16"])}
      [:div x] [:div y] [:div z]]
     [:div {:class (into standard-classes ["w-6"])}
      (get-in @(rf/subscribe [subs/distance-map]) [selected coordinate])]]))

(defn component []
  (let [coordinate (or @(rf/subscribe [subs/hovered])
                       @(rf/subscribe [subs/selected-tile]))
        tile @(rf/subscribe [subs/tile coordinate])]
    (when coordinate
      [:div {:class ["flex" "h-full" "w-full" "relative"]}
       [:div {:class ["w-1/2" "h-full" "flex" "items-center"]}
        [common/tile->hex-image tile]]
       [:div {:class ["w-1/2" "h-full" "flex"]}
        [planets-summary tile]]
       (tile-legend coordinate tile)])))
