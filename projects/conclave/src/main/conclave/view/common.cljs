(ns conclave.view.common
  (:require [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [re-frame.core :as rf]))

(defn button [value dispatch]
  [:input {:type "button"
           :value value
           :class ["text-gray-900" "bg-gray-400" "border-gray-600"
                   "active:bg-gray-200" "active:border-gray-100"
                   "cursor-pointer" "border" "rounded-sm" "m-1" "p-1"]
           :on-click #(rf/dispatch dispatch)}])

(defn labeled-value [label query-vector]
  (let [sub @(rf/subscribe query-vector)]
    [:div
     {:class ["flex" "justify-between"]}
     [:div (str label ":")]
     [:div sub]]))

(defn text-input [sub-query build-dispatch]
  (let [sub @(rf/subscribe sub-query)]
    [:input {:type "text"
             :value sub
             :on-change #(rf/dispatch-sync (-> % .-target .-value build-dispatch))
             :class ["rounded" "back" "text-gray-200" "bg-gray-600" "w-full"]}]))

(def clipped-hex-path "polygon(26% 2%, 74% 2%, 98% 50%, 74% 98%, 26% 98%, 2% 50%)")

(defn hex-image [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])]
    [:img {:src (str "images/" (tile/image tile))
           :height "97%"
           :width "97%"
           :style {:clip-path clipped-hex-path}}]))

(defn resource [{:keys [optimal-resources resources] :as _summary}]
  [:div {:class ["flex" "justify-between" "w-12"]}
   [:div {:class ["text-amber-400"]} (str optimal-resources)]
   [:div {:class ["text-amber-800"]} resources]])

(defn influence [{:keys [optimal-influence influence] :as _summary}]
  [:div {:class ["flex" "justify-between" "w-12"]}
   [:div {:class ["text-cyan-400"]} (str optimal-influence)]
   [:div {:class ["text-cyan-800"]} influence]])
