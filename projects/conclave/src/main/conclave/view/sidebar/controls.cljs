(ns conclave.view.sidebar.controls
  (:require [conclave.handlers :as handlers]
            [conclave.map.layout :as layout]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.heroicons :as hicons]
            [conclave.view.tutorial.common :refer [tutorial-component]]
            [conclave.view.tutorial.handlers :as tut-handlers]
            [conclave.view.tutorial.subs :as tut-subs]
            [medley.core :as medley]
            [goog.string :as gstring]
            [re-frame.core :as rf]))

(defn navigation []
  [:div {:class ["flex" "w-full" "justify-center"]}
   [:div {:title "Jump 10 Maps Backward"}
    [common/real-button hicons/chevron-double-left [handlers/navigate-map :previous 10]]]
   [:div {:title "Previous Map"}
    [common/real-button hicons/chevron-left [handlers/navigate-map :previous 1]]]
   [:div {:class ["flex" "justify-center" "items-center" "mx-4"]}
    (str (or @(rf/subscribe [subs/storage-index]) "?")
         " of "
         (or @(rf/subscribe [subs/storage-total]) "?"))]
   [:div {:title "Next Map"}
    [common/real-button hicons/chevron-right [handlers/navigate-map :next 1]]]
   [:div {:title "Jump 10 Maps Forward"}
    [common/real-button hicons/chevron-double-right [handlers/navigate-map :next 10]]]])

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
  [common/o-box {:class ["p-1" "mt-2"]}
   [common/o-box {:class ["p-2" "border" "border-gray-800" "rounded-lg"]}
    [common/v-box {:class ["w-full"]}
     [common/h-box {:class ["justify-center"]}
      [tutorial-component :layout-select
       [:div {:title "Select a map layout"
              :class ["flex" "w-2/3"]}
        [layout-select]]]
      [tutorial-component :generate-button
       [:div {:title "Generate a random map with this layout"}
        [common/real-button "Generate" [handlers/random-map]]]]
      [tutorial-component :tutorial-button
       [:div {:title "View the tutorial"}
        [common/real-button hicons/question-circle [tut-handlers/start]]]]]
     [common/h-box {}
      [navigation]]]]])
