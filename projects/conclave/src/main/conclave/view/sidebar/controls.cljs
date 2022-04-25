(ns conclave.view.sidebar.controls
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [goog.string :as gstring]
            [re-frame.core :as rf]))

(defn component []
  [:div {:class ["flex" "w-full" "m-2" "justify-start"]}
   [:div {:class ["w-1/6" "flex" "justify-end" "items-center" "mr-2"]}
    "Seed: "]
   [:div {:class ["w-1/2" "flex" "justify-end" "items-center"]}
    [common/text-input [subs/seed] #(vector handlers/set-seed %)]]
   [:div {:title "Generate a map from the given seed"}
    [common/button "Generate" [handlers/generate-map :async]]]
   [:div {:title "Pick a random seed and generate a map"}
    [common/button "Random" [handlers/random-map]]]])
