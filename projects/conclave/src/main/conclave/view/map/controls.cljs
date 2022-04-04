(ns conclave.view.map.controls
  (:require [conclave.subs :as subs]
            [conclave.view.common :as common]))

(defn component []
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div "Map Controls"]
   [:div "Seed: "
    [common/text-input [subs/seed] #(vector :seed/set %)]]
   [common/button "Generate" [:map/generate]]])
