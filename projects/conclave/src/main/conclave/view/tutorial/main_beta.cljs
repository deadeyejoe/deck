(ns conclave.view.tutorial.main-beta
  (:require [conclave.subs :as subs]
            [conclave.view.tutorial.handlers :as tutorial-handles]
            [conclave.view.tutorial.subs :as tutorial-subs]
            [conclave.view.common :as common]
            [conclave.view.icons :as icons]
            [conclave.view.heroicons :as hicons]
            [re-frame.core :as rf]))

(defn heading [content]
  [:div {:class ["text-4xl" "mb-12"]} content])

(defn paragraph [& content]
  (into [:div {:class ["text-xl" "mb-8"]}]
        content))

(defn key-term [content element]
  [:span {:class ["text-blue-600" "px-0.5"]
          :on-mouse-enter #(rf/dispatch [tutorial-handles/highlight-element element])
          :on-mouse-leave #(rf/dispatch [tutorial-handles/clear-highlight])}
   content])

(defn terminology [content]
  [:em {:class ["text-red-700"]} content])

(defn resource-example-table []
  (let [row-structure (map (fn [i] [:div {:key i :class ["flex" "w-1/3"]}]) (range 3))
        ->row (fn [content] [:div {:class ["flex" "h-8" "w-full" "my-1"]} (map conj row-structure content)])]
    [:div {:class ["flex" "flex-col" "w-1/2"]}
     (->row ["Planet" icons/resource icons/influence])
     (->row ["Atlas"
             (common/resource {:optimal-resources 3 :resources 3})
             (common/influence {:optimal-influence 0 :influence 1})])
     (->row ["Loki"
             (common/resource {:optimal-resources 0 :resources 1})
             (common/influence {:optimal-influence 2 :influence 2})])
     (->row ["Vefut"
             (common/resource {:optimal-resources 1 :resources 2})
             (common/influence {:optimal-influence 1 :influence 2})])]))

(resource-example-table)

(defn res-inf []
  [:<>
   [heading "Optimal Resources & Influence"]
   [paragraph "The balancing is based on " [terminology "optimal resources"] " and " [terminology "optimal influence"] ", which models how users actually use their planets in practice."]
   [paragraph "The optimal value of a planet is the higher of its resource and influence values. The lower value is treated as zero. If the values are equal both values are halved. See below for examples."]
   [paragraph "The values are colour-coded: "
    [:span {:class ["text-amber-400"]} "optimal resources"]
    " and "
    [:span {:class ["text-cyan-400"]} "optimal influence"]
    " are displayed in bright colours. While "
    [:span {:class ["text-amber-800"]} "maximum resources"]
    " and "
    [:span {:class ["text-cyan-800"]} "maximum influence"] "are displayed in darker colours."]
   [resource-example-table]])

(defn player []
  [:<>
   [heading "Player Summary"]
   [paragraph "The " [key-term "player summary" :player-summary] " shows a breakdown of each player's " [terminology "slice"] "; resource, influence, tech specialties etc."]
   [paragraph "A player's slice is the set of tiles they can reach before any other player, hover over a player on the summary to highlight their slice on the map."]
   [paragraph "Some player slices may be highlighted in " [terminology "red"] ". This means their slice violates one or more goals of the balancing algorithm. Hover over a player to see a summary of these problems. Feel free to make your own judgement about whether these are problems"]])

(defn generating []
  [:<>
   [heading "Generating the map..."]
   [paragraph "Map generation is performed in-browser, it can take up to a minute."]
   [:div {:class ["w-full" "h-40" "flex" "justify-center" "items-center"]}
    [:div {:class ["animate-spin"]}
     hicons/refresh]]])

(defn welcome []
  [:<>
   [heading "Welcome to conclave!"]
   [paragraph "This is a quick tutorial explaining the features of this Twilight Imperium 4th Edition map generator."]
   [paragraph "Select a " [key-term "layout" :layout-select] " and click " [key-term "Generate" :generate-button] " to get started."]
   [paragraph "You can exit this tutorial at any time. Open it again by clicking the " [key-term "tutorial" :tutorial-button] " button."]])

(defn container []
  (let [stage @(rf/subscribe [tutorial-subs/current-stage])]
    [:div {:class ["w-full" "h-full" "flex" "justify-center" "items-center"
                   "border" "rounded-lg" "border-blue-800"]}
     [:div {:class ["h-full" "w-full" "p-2"]}
      (case stage
        :welcome [welcome]
        :player (if @(rf/subscribe [subs/processing?])
                  [generating]
                  [player])
        :res-inf [res-inf]
        [:div "nothing"])]
     [:div {:class ["absolute" "bottom-3" "right-3" "flex" "justify-center" "items-center"]}
      [common/real-button "Previous" [tutorial-handles/previous-step]]
      [common/real-button "Next" [tutorial-handles/next-step]]
      [common/real-button "Exit" [tutorial-handles/cancel]]]]))

(defn component []
  (when @(rf/subscribe [tutorial-subs/active?])
    [:div {:class ["fixed" "h-2/3" "w-1/2" "z-app-overlay"
                   "rounded" "border-gray-700" "bg-gray-900"
                   "flex" "justify-center" "items-center" "p-2"]}
     [container]]))
