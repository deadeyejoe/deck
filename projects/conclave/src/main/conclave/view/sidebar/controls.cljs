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
                    :class ["block"
                            "w-full" "px-3" "py-1.5" "m-0"
                            "text-base" "font-normal" "text-white"
                            "bg-gray-500" "bg-clip-padding" "bg-no-repeat"
                            "border" "border-solid" "border-gray-700" "rounded"
                            "transition" "ease-in-out"
                            "focus:border-blue-600" "focus:outline-none"]
                    :style {:background-image "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')"}}]
          (map (fn [{:keys [code name] :as _layout}] [:option {:value code} name])
               layout/layouts))))

(defn component []
  [:div {:class ["flex" "w-full" "m-2" "justify-center"]}
   [:div {:class ["flex" "w-2/3"]}
    [layout-select]]
   [:div {:title "Generate a map from the given seed"}
    [common/button "Generate" [handlers/random-map]]]])
