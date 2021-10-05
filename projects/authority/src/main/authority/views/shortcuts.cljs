(ns authority.views.shortcuts
  (:require [re-frame.core :as rf]))

(defn shortcut [{:keys [:keyname :label]}]
  [:div
   {:key keyname
    :class ["flex" "justify-around" "my-4" "text" "text-gray-200"]}
   [:div
    {:class ["w-1/4" "text-center" "border-2" "border-gray-200" "rounded-lg"]} keyname]
   [:div
    {:class ["w-1/2" "text-left"]} label]])

(defn component []
  (let [shortcuts @(rf/subscribe [:shortcuts/active])]
    [:div
     {:class ["absolute" "right-0" "inset-y-0" "flex" "flex-col" "justify-center"
              "w-1/6" "h-screen"]}
     [:div {:class ["flex" "flex-col" "h-1/3" "justify-center"]}
      (map shortcut shortcuts)]]))