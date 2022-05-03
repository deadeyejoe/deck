(ns conclave.view.sidebar.controls
  (:require [conclave.handlers :as handlers]
            [conclave.map.layout :as layout]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [goog.string :as gstring]
            [re-frame.core :as rf]))

(defn layout-select []
  (let [selected-layout @(rf/subscribe [subs/layout])]
    (into [:select {:on-change #(rf/dispatch [handlers/set-layout (-> % .-target .-value)])
                    :value (:code selected-layout)
                    :class ["appearance-none" "block"
                            "w-full" "px-3" "py-1.5" "m-0"
                            "text-base" "text-gray-700"
                            "bg-gray-200" "bg-clip-padding" "bg-no-repeat"
                            "border" "border-solid" "border-gray-400" "rounded"
                            "transition" "ease-in-out"
                            "focus:text-gray-700" "focus:bg-white" "focus:border-blue-600" "focus:outline-none"]}]
          (map (fn [{:keys [code name] :as _layout}] [:option {:value code} name])
               layout/layouts))))

(defn component []
  [:div {:class ["flex" "w-full" "m-2" "justify-center"]}
   [:div {:class ["flex" "w-2/3"]}
    [layout-select]]
   [:div {:title "Generate a map from the given seed"}
    [common/button "Generate" [handlers/random-map]]]])
