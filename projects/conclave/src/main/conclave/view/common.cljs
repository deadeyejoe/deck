(ns conclave.view.common
  (:require [re-frame.core :as rf]))

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
