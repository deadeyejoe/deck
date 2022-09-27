(ns conclave.view.generation.main
  (:require [conclave.components.signal :as signal]
            [conclave.generate.options :as options]
            [conclave.handlers :as handlers]
            [conclave.layout.directory :as directory]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.generation.signals :as signals]
[conclave.view.heroicons :as hicons]
            [re-frame.core :as rf]))

(defn help-button []
  [:div {:class ["cursor-pointer" "text-gray-400" "hover:text-gray-100"]
         :title "View help"
         :on-click #(signal/>toggle! signals/help)}
   hicons/question-circle])

(defn layout-select []
  (let [pok? @(rf/subscribe [subs/generation-option :pok])]
    (into [common/select {:sub [subs/generation-option :selected-layout]
                          :dispatch-fn #(rf/dispatch [handlers/set-generation-option :selected-layout %])}]
          (map (fn [{:keys [code name] :as _layout}]
                 [:option {:value code} name])
               (if pok?
                 directory/layouts
                 directory/base-layouts)))))

(defn section [props & content]
  [common/o-box (merge-with into {:class ["p-1"]} props)
   (into [common/o-box {:class ["p-2" "border" "border-gray-800" "rounded-lg"]}
          content])])

(defn help-section [& help-texts]
  (when (signal/<set? signals/help)
    (->> help-texts
         (map-indexed (fn [index text] [:div {:key index :class ["w-full" "h-1/3" "flex" "items-center"]} text]))
         (into [common/v-box {:class ["w-1/2" "transition-opacity" "duration-100"
                                      (if (signal/<set? signals/suppress-text)
                                        "opacity-0"
                                        "opacity-100")]}]))))

(defn section-title [title]
  [:div {:class ["h-6" "w-full" "flex" "justify-start" "pl-2" "text-gray-100"]}
   title])

(defn layout-section []
  [common/v-box {:class ["flex-col" "justify-around" "items-center" (if (signal/<set? signals/help)
                                                                      "w-1/2"
                                                                      "w-full")]}
   [:div {:title "Choose whether to include Prophecy of Kings content"
          :class ["h-8"]}
    [common/switch {:on-label "PoK"
                    :off-label "Base"
                    :sub [subs/generation-option :pok]
                    :dispatch [handlers/toggle-pok]}]]
   [:div {:title "Select a map layout"
          :class ["w-5/6"]}
    [:div "Layout"]
    [:div {:class ["h-10"]}
     [layout-select]]]
   [:div {:title ""
          :class ["flex-col" "w-5/6"]}
    [:div "Seed"]
    [:div {:class ["h-8"]}
     [common/text-input {:sub [subs/generation-option :seed]
                         :placeholder "Use random seed"
                         :dispatch-fn #(rf/dispatch [handlers/set-generation-option :seed %])}]]]])

(defn map-balance-section []
  [common/v-box {:class ["flex-col" "justify-between" "items-center" (if (signal/<set? signals/help)
                                                                       "w-1/2"
                                                                       "w-full")]}
   [section-title "Tileset"]
   [:div {:title "Force inclusion of all wormholes"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div [common/switch {:on-label "Include all Wormholes"
                          :sub [subs/generation-option :include-wormholes]
                          :dispatch [handlers/toggle-generation-option :include-wormholes]}]]]
   [:div {:title "Force inclusion of all legendary planets"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Include all Legendaries"
                     :sub [subs/generation-option :include-legendaries]
                     :dispatch [handlers/toggle-generation-option :include-legendaries]
                     :disabled (not @(rf/subscribe [subs/generation-option :pok]))}]]]
   [:div {:title "Select balance of resources vs influence in the map overall"
          :class ["w-5/6" "h-1/3"]}
    [:div "Balance"]
    [:div {:class ["w-full" "h-10"]}
     (into [common/select {:sub [subs/generation-option :map-balance]
                           :dispatch-fn #(rf/dispatch [handlers/set-generation-option :map-balance (keyword %)])}]
           (map (fn [{:keys [name label]}]
                  [:option {:value name} label])
                options/map-balance-options))]]])

(defn equidistant-balance-section []
  [common/v-box {:class ["flex-col" "justify-around" "items-center" (if (signal/<set? signals/help)
                                                                      "w-1/2"
                                                                      "w-full")]}
   [section-title "Equidistants"]
   [:div {:title "All tiles in equidistants contain planets"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Planets in Equidistants"
                     :sub [subs/generation-option :planets-in-equidistants]
                     :dispatch [handlers/toggle-generation-option :planets-in-equidistants]}]]]
   [:div {:title "Force legendaries to be in equidistants"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Legendaries in Equidistants"
                     :sub [subs/generation-option :legendaries-in-equidistants]
                     :dispatch [handlers/toggle-generation-option :legendaries-in-equidistants]
                     :disabled (not @(rf/subscribe [subs/generation-option :pok]))}]]]
   [:div {:title "Select balance of resources vs influence between equidistants and player slices"
          :class ["w-5/6" "h-1/3"]}
    [:div "Balance"]
    [:div {:class ["w-full" "h-10"]}
     (into [common/select {:sub [subs/generation-option :equidistant-balance]
                           :dispatch-fn #(rf/dispatch [handlers/set-generation-option :equidistant-balance (keyword %)])}]
           (map (fn [{:keys [name label]}]
                  [:option {:value name} label])
                options/equidistant-balance-options))]]])

(defn button []
  [:div {:title "Generate a map with the current options (Ctrl + Enter)"
         :class ["text-2xl"]}
   [common/primary-button {:dispatch [handlers/generate-map]} "Generate"]])

(defn component []
  [:div {:class ["w-full " "h-full" "flex-col" "justify-center" "items-center" "overflow-scroll"
                 "border-r-2" "border-blue-800" "bg-gray-900"]}
   [:div {:class ["absolute" "top-0" "right-0" "p-2"]}
    [help-button]]
   [section {:class ["h-1/4"]}
    [layout-section]
    [help-section
     "Choose whether to include Prophecy of Kings content"
     "Choose a map layout"
     "Enter a seed for the random number generator, or leave blank to use a random one. Useful for experimenting."]]
   [section {:class ["h-1/3"]}
    [map-balance-section]
    [help-section
     "Always include all available wormhole tiles, or choose them randomly"
     "Always include both legendary tiles, or choose them randomly"
     "Choose the relative amounts of resources or influence the map will have. Has less of an effect on large maps, as their possible ranges are narrower."]]
   [section {:class ["h-1/3"]}
    [equidistant-balance-section]
    [help-section
     "Ensure all tiles in equidistants have planets"
     "Ensure any legendaries are in equidistant tiles"
     "Choose the relative amounts of resources or influence equidistant tiles will have compared to player slices."]]
   [section {:class ["h-1/12"]}
    [:div {:class ["w-5/6"]}
     [button]]]])
