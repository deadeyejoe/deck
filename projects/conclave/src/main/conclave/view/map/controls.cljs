(ns conclave.view.map.controls
  (:require [conclave.subs :as subs]
            [conclave.handlers :as handlers]
            [conclave.view.common :as common]
            [re-frame.core :as rf]))

(defn processing []
  (let [processing @(rf/subscribe [subs/processing?])]
    (when processing
      [:div "Processing!"])))

(defn mode-control []
  (let [worker-mode @(rf/subscribe [subs/worker-mode])
        class ["flex" "justify-between"]]
    (case worker-mode
      :sync [:div {:class class} "Sync" [common/button "Switch to Async" [handlers/set-worker-mode :async]]]
      :async [:div {:class class} "Async" [common/button "Switch to Sync" [handlers/set-worker-mode :sync]]]
      [:div "Invalid mode"])))

(defn component []
  [:div {:class ["flex" "flex-col" "justify-center"]}
   [:div "Map Controls"]
   [:div "Seed: "
    [common/text-input [subs/seed] #(vector handlers/set-seed %)]]
   [mode-control]
   [common/button "Raw" [handlers/raw-map]]
   [common/button "Optimize" [handlers/optimize-map]]
   [common/button "Generate" [handlers/generate-map]]
   [processing]])
