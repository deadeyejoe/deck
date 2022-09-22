(ns conclave.view.sidebar.controls
  (:require [conclave.handlers :as handlers]
            [conclave.layout.directory :as directory]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.heroicons :as hicons]
            [conclave.view.tutorial.common :refer [tutorial-component]]
            [conclave.view.tutorial.handlers :as tut-handlers]
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
  (into [common/select {:sub-query [subs/generation-option :selected-layout]
                        :build-dispatch (partial vector handlers/set-generation-option :selected-layout)}]
        (map (fn [{:keys [code name] :as _layout}]
               [:option {:value code} name])
             directory/layouts)))

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
        [common/real-button "Generate" [handlers/generate-map]]]]
      [tutorial-component :tutorial-button
       [:div {:title "View the tutorial"}
        [common/real-button hicons/question-circle [tut-handlers/start]]]]]
     [common/h-box {}
      [navigation]]]]])
