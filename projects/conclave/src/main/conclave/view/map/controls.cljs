(ns conclave.view.map.controls
  (:require [conclave.subs :as subs]
            [conclave.handlers :as handlers]
            [conclave.view.common :as common]))

(defn component []
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div "Map Controls"]
   [:div "Seed: "
    [common/text-input [subs/seed] #(vector handlers/set-seed %)]]
   [common/button "Raw" [handlers/raw-map]]
   [common/button "Optimize" [handlers/optimize-map]]
   [common/button "Generate" [handlers/generate-map]]])
