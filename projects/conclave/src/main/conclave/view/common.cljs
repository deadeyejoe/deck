(ns conclave.view.common
  (:require [re-frame.core :as rf]))

(defn button [value dispatch]
  [:input {:type "button"
           :value value
           :class ["m-1" "text-gray-900"]
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
             :class ["rounded" "back" "text-gray-200" "bg-gray-600"]}]))
