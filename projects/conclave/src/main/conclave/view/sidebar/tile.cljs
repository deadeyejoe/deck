(ns conclave.view.sidebar.tile
  (:require [conclave.subs :as subs]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [re-frame.core :as rf]))

(defn tile-number [{:keys [key] :as _tile}]
  [:div {:class ["h-20" "w-20" "flex" "justify-center" "items-center" "text-2xl" "bg-gray-400"]
         :style {:clip-path common/clipped-hex-path}}
   [:div {:class ["h-16" "w-16" "flex" "justify-center" "items-center" "text-2xl" "bg-gray-800"]
          :style {:clip-path common/clipped-hex-path}}
    (name key)]])

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

(defn planets-summary [{:keys [planets total] :as tile}]
  (when (seq planets)
    (-> [:div {:class ["h-full" "w-full" "flex" "flex-col"]}]
        (into (map planet-summary planets)))))

(defn component []
  (let [coordinate (or @(rf/subscribe [subs/hovered])
                       @(rf/subscribe [subs/selected-tile]))
        tile @(rf/subscribe [subs/tile coordinate])]
    (when coordinate
      [:div {:class ["flex" "h-full" "w-full"]}
       [:div {:class ["w-1/2" "h-full" "flex" "items-center"]}
        [common/hex-image coordinate]]
       [:div {:class ["w-1/2" "h-full" "flex" "flex-col" "items-center"]}
        [:div {:class ["h-1/4" "w-full" "flex" "justify-center" "items-center"]}
         [tile-number tile]] ;;don't know why but this needs to be wrapped in a div...
        [:div {:class ["h-3/4" "w-full" "flex" "items-center" "py-6"]}
         [planets-summary tile]]]])))
