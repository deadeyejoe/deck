(ns conclave.view.tutorial.main
  (:require [conclave.subs :as subs]
            [conclave.view.tutorial.optimal-demo :as optimal-demo]
            [conclave.view.common :as common]
            [re-frame.core :as rf]
            [conclave.handlers :as handlers]))

(defn title [content]
  [:div {:class ["text-4xl" "mb-8" "text-blue-400"]} content])

(defn heading [content]
  [:div {:class ["text-2xl" "mb-6" "text-blue-600"]} content])

(defn paragraph [& content]
  (into [:div {:class ["text-xl" "mb-6"]}]
        content))

(defn unordered-list [& content]
  [into [:ul {:class ["text-xl"  "my-1" "list-disc" "list-inside"]}]
   (map (partial vector :li) content)])

(defn preamble []
  [paragraph "Welcome to Conclave!"
   [unordered-list
    "Click 'Generate' or press Ctrl+Enter to generate a random map, generation may take up to a minute."
    "Configure different map layouts, and options by expanding the pane at the left of the page."
    [:span "Use the toggle on the right to switch between " [:em "optimal"] " and " [:em "base"] " resource/influence values (see below)"]
    "Hover over player rows to highlight their slice on the map"
    "Use the buttons on the right of the map pane to toggle informational overlays on the map"
    "Hover tiles on the map to see more information"
    "The generator stores each map you view in local storage. Use the chevron buttons to navigate through them"
    "Maps can be shared by copying the full URL"
    "Maps can be imported from/exported to TTS strings"]])

(defn res-inf []
  [:<>
   [heading "Optimal Resources & Influence"]
   [paragraph "The balancing is mostly based on "
    [:span {:class ["text-amber-400"]} "optimal resources"]
    " and " [:span {:class ["text-cyan-400"]} "optimal influence"]
    ". This models how players use their planets in practice, by assuming that players will exhaust planets for their highest value."]
   [paragraph "The optimal resource value of a planet depends on how its' base resource value compares to its' base influence value:"
    [unordered-list [:span "if the resource value is " [:strong "greater"] " it is the base resource value"]
     [:span "if the resource value is " [:strong "less"] " it is zero"]
     [:span "if the values are " [:strong "equal"] " it is the base resource value / 2"]]]
   [paragraph "And vice-versa for optimal influence. Play with the numbers here to get a feel for it:"]
   [optimal-demo/component]
   [paragraph "When considering a player's slice: the total optimal resource value can be thought of as 'how many resources can be generated efficiently', while the total base resource value is 'how many resources can be generated if I don't care about influence' (and vice versa for influence)."]
   [paragraph "Optimal values are displayed by default, but the base values can be toggled."]])

(defn player-summary []
  [:<>
   [heading "Player summary"]
   [paragraph "The player summary in the sidebar shows a breakdown of each player's slice; resource, influence, tech specialties etc. 
     A player's "
    [:em "slice"]
    " is the set of tiles they can reach before any other player. Hover over a 
     player on the summary to highlight their slice on the map."]])

(defn map-summary []
  [:<>
   [heading "Map Summary"]
   [paragraph "The map summary at the bottom of the sidebar shows a breakdown of the map, including counts 
               of the types of tiles in the map."]
   [paragraph "The bars at the bottom of this pane show how the map compares to the theoretical max/min 
               quantities of planets, resources, and influence. This is calculated based
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
   [paragraph "With thanks to " [link "https://github.com/Ymbirtt" "ymbirtt"] " for their contributions"]
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
    [common/real-button {:dispatch [handlers/hide-modal]} "Exit"]]])

(defn component []
  (when @(rf/subscribe [subs/modal-active? :tutorial])
    [:div {:class ["fixed" "h-3/4" "w-1/2" "z-app-overlay"
                   "rounded" "border-gray-700" "bg-gray-900" "text-white"
                   "flex" "justify-center" "items-center" "p-2" "leading-relaxed"]}
     [container]]))
