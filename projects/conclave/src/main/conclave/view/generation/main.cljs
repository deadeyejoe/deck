(ns conclave.view.generation.main
  (:require [conclave.components.signal :as signal]
            [conclave.generate.options :as options]
            [conclave.handlers :as handlers]
            [conclave.layout.directory :as directory]
            [conclave.subs :as subs]
            [conclave.view.heroicons :as hicons]
            [conclave.view.common :as common]
            [re-frame.core :as rf]))

(def open-signal ::open)

(defn layout-select []
  (into [common/select {:sub-query [subs/generation-option :selected-layout]
                        :build-dispatch (partial vector handlers/set-generation-option :selected-layout)}]
        (map (fn [{:keys [code name] :as _layout}]
               [:option {:value code} name])
             directory/layouts)))

(defn section [props & content]
  [common/o-box (merge-with into {:class ["p-1"]} props)
   (into [common/o-box {:class ["p-2" "border" "border-gray-800" "rounded-lg"]}
          content])])

(defn section-title [title]
  [:div {:class ["h-6" "w-full" "flex" "justify-start" "pl-2" "text-gray-100"]}
   title])

(defn layout-section []
  [common/v-box {:class ["flex-col" "justify-around" "items-center" "w-full"]}
   [:div {:title "Choose whether to include Prophecy of Kings content"
          :class ["h-8"]}
    [common/switch {:on-label "PoK"
                    :off-label "Base"
                    :sub-query [subs/generation-option :pok]
                    :dispatch-event [handlers/toggle-generation-option :pok]}]]
   [:div {:title "Select a map layout"
          :class ["w-5/6"]}
    [:div "Layout"]
    [:div {:class ["h-10"]}
     [layout-select]]]
   [:div {:title ""
          :class ["flex-col" "w-5/6"]}
    [:div "Seed"]
    [:div {:class ["h-8"]}
     [common/text-input {:sub-query [subs/generation-option :seed]
                         :placeholder "Use random seed"
                         :build-dispatch (partial vector handlers/set-generation-option :seed)}]]]])

(defn map-balance-section []
  [common/v-box {:class ["flex-col" "justify-between" "items-center" "w-full"]}
   [section-title "Tileset"]
   [:div {:title "Force inclusion of all wormholes"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div [common/switch {:on-label "Include all Wormholes"
                          :sub-query [subs/generation-option :include-wormholes]
                          :dispatch-event [handlers/toggle-generation-option :include-wormholes]}]]]
   [:div {:title "Force inclusion of all legendary planets"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Include all Legendaries"
                     :sub-query [subs/generation-option :include-legendaries]
                     :dispatch-event [handlers/toggle-generation-option :include-legendaries]}]]]
   [:div {:title "Select balance of resources vs influence in the map overall"
          :class ["w-5/6" "h-1/3"]}
    [:div "Balance"]
    [:div {:class ["w-full" "h-10"]}
     (into [common/select {:sub-query [subs/generation-option :map-balance]
                           :build-dispatch (fn [v] [handlers/set-generation-option :map-balance (keyword v)])}]
           (map (fn [{:keys [name label]}]
                  [:option {:value name} label])
                options/map-balance-options))]]])

(defn equidistant-balance-section []
  [common/v-box {:class ["flex-col" "justify-around" "items-center" "w-full"]}
   [section-title "Equidistants"]
   [:div {:title "Force legendaries to be in equidistants"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Legendaries in Equidistants"
                     :sub-query [subs/generation-option :legendaries-in-equidistants]
                     :dispatch-event [handlers/toggle-generation-option :legendaries-in-equidistants]}]]]
   [:div {:title "All tiles in equidistants contain planets"
          :class ["w-5/6" "flex" "justify-start" "h-1/3"]}
    [:div
     [common/switch {:on-label "Planets in Equidistants"
                     :sub-query [subs/generation-option :planets-in-equidistants]
                     :dispatch-event [handlers/toggle-generation-option :planets-in-equidistants]}]]]
   [:div {:title "Select balance of resources vs influence between equidistants and player slices"
          :class ["w-5/6" "h-1/3"]}
    [:div "Balance"]
    [:div {:class ["w-full" "h-10"]}
     (into [common/select {:sub-query [subs/generation-option :equidistant-balance]
                           :build-dispatch (fn [v] [handlers/set-generation-option :equidistant-balance (keyword v)])}]
           (map (fn [{:keys [name label]}]
                  [:option {:value name} label])
                options/equidistant-balance-options))]]])

(defn button []
  [:div {:title "Generate a map with the current options"
         :class ["text-2xl"]}
   [common/primary-button {:dispatch [handlers/generate-map]} "Generate"]])

(defn pane-control []
  (let [open? (signal/<set? open-signal)]
    [:div {:title (if open?
                    "Collapse map generation options"
                    "Expand map generation options")
           :class ["absolute" "-right-12" "top-1/2" "bottom-1/2"]}
     [common/real-button
      {:dispatch-fn #(signal/>toggle! open-signal)}
      (if open?
        hicons/chevron-double-left
        hicons/chevron-double-right)]]))

(defn component []
  [:div {:class ["w-full " "h-full" "flex-col" "justify-center" "items-center" "overflow-scroll"
                 "border-r-2" "border-blue-800" "bg-gray-900"]}
   [section {:class ["h-1/4"]}
    [layout-section]]
   [section {:class ["h-1/3"]}
    [map-balance-section]]
   [section {:class ["h-1/3"]}
    [equidistant-balance-section]]
   [section {:class ["h-1/12"]}
    [:div {:class ["w-5/6"]}
     [button]]]
   [pane-control]])
