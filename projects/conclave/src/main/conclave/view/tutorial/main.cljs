(ns conclave.view.tutorial.main
  (:require [conclave.subs :as subs]
            [conclave.view.tutorial.handlers :as tutorial-handles]
            [conclave.view.tutorial.subs :as tutorial-subs]
            [conclave.view.tutorial.optimal-demo :as optimal-demo]
            [conclave.view.common :as common]
            [re-frame.core :as rf]))

(defn title [content]
  [:div {:class ["text-4xl" "mb-8" "text-blue-400"]} content])

(defn heading [content]
  [:div {:class ["text-2xl" "mb-6" "text-blue-600"]} content])

(defn paragraph [& content]
  (into [:div {:class ["text-lg" "mb-6"]}]
        content))

(defn unordered-list [& content]
  [into [:ul {:class ["text-lg"  "my-1" "list-disc" "list-inside"]}]
   (map (partial vector :li) content)])

(defn preamble []
  [paragraph "Feature overview:"
   [unordered-list
    "Select a layout and click 'Generate' to generate a random map, generation may take up to a minute"
    "Hover over player rows to highlight their slice on the map"
    "Use the buttons on the right of the map pane to toggle informational overlays on the map"
    "Hover tiles on the map to see more information"
    "The generator stores each map you view in local storage. Use the chevron buttons to navigate through them"
    "Maps can be shared by copying the full URL"]])

(defn res-inf []
  [:<>
   [heading "Optimal Resources & Influence"]
   [paragraph "The balancing is mostly based on "
    [:span {:class ["text-amber-400"]} "optimal resource"]
    " and " [:span {:class ["text-cyan-400"]} "optimal influence"]
    ". This models how players use their planets in practice, by assuming that players will exhaust planets for their highest value."]
   [paragraph "The optimal resource value of a planet depends on how its' resource value compares to its' influence value:"
    [unordered-list [:span "if the resource value is " [:strong "greater"] " it is the resource value"]
     [:span "if the resource value is " [:strong "less"] " it is zero"]
     [:span "if the values are " [:strong "equal"] " it is resource value / 2"]]]
   [paragraph "And vice-versa for optimal influence. Play with the numbers here to get a feel for it:"]
   [optimal-demo/component]
   [paragraph "When considering a player's slice: the total optimal resource value can be thought of as 'how many resources can be generated efficiently', while the total resource value is 'how many resources can be generated if I don't care about influence' (and vice versa for influence)."]
   [paragraph "The optimal/normal values are always displayed together, with optimal values having bright colours and normal values having dark colours."]])

(defn player-summary []
  [:<>
   [heading "Player summary"]
   [paragraph "The player summary in the sidebar shows a breakdown of each player's slice; resource, influence, tech specialties etc. 
     A player's "
    [:em "slice"]
    " is the set of tiles they can reach before any other player. Hover over a 
     player on the summary to highlight their slice on the map."]
   [paragraph "Some player rows may be highlighted in "
    [:span {:class ["text-red-700"]} "red"]
    ". This means their slice violates one or more goals of the balancing algorithm. 
     Hover over a row to see a summary of these problems (if any). The goals are:"
    [unordered-list "Optimal resources at least 2.5, optimal influence at least 4"
     "Total of optimal resource and influence between 9 and 13"
     "No more than two distinct tech specialties"]]])

(defn map-summary []
  [:<>
   [heading "Map Summary"]
   [paragraph "The map summary at the bottom of the sidebar shows a breakdown of the map, including counts 
               of the types of tiles in the map."]
   [paragraph "The bars at the bottom of this pane show how the map compares to the theoretical max/min 
               quantities of planets, optimal resources, and optimal influence. This is calculated based
               on how many blue/red tiles are included."]])

(defn link [url content]
  [:a {:class ["text-blue-800" "hover:underline"]
       :href url
       :target "_blank"}
   content])

(defn about []
  [:<>
   [heading "About"]
   [paragraph "Created by " [link "https://github.com/deadeyejoe" "deadeyejoe"] " 2022"]
   [paragraph "Source code can be found "
    [link "https://github.com/deadeyejoe/deck/tree/master/projects/conclave" "here"]
    ". Issues/feature requests can be reported "
    [link "https://github.com/deadeyejoe/deck/issues" "here"]
    "."]])

(defn container []
  [:div {:class ["w-full" "h-full" "flex" "justify-center" "items-center"
                 "border" "rounded-lg" "border-blue-800" "p-2" "overflow-y-scroll" "overflow-x-none"]}
   [:div {:class ["h-full" "w-full"]}
    [title "Conclave Map Generator"]
    [preamble]
    [res-inf]
    [player-summary]
    [map-summary]
    [about]]
   [:div {:class ["absolute" "bottom-3" "right-6" "flex" "justify-center" "items-center"]}
    [common/real-button "Exit" [tutorial-handles/cancel]]]])

(defn component []
  (when @(rf/subscribe [tutorial-subs/active?])
    [:div {:class ["fixed" "h-3/4" "w-1/2" "z-app-overlay"
                   "rounded" "border-gray-700" "bg-gray-900" "text-white"
                   "flex" "justify-center" "items-center" "p-2"]}
     [container]]))
