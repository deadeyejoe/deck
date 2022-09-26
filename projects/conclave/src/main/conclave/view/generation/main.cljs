(ns conclave.view.generation.main
  (:require [conclave.generate.options :as options]
            [conclave.handlers :as handlers]
            [conclave.layout.directory :as directory]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.generation.summary :as summary]
            [re-frame.core :as rf]))

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

(defn section-title [title]
  [:div {:class ["h-6" "w-full" "flex" "justify-start" "pl-2" "text-gray-100"]}
   title])

(defn layout-section []
  [common/v-box {:class ["flex-col" "justify-around" "items-center" "w-full"]}
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
  [common/v-box {:class ["flex-col" "justify-between" "items-center" "w-full"]}
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
  [common/v-box {:class ["flex-col" "justify-around" "items-center" "w-full"]}
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
  [:div {:title "Generate a map with the current options"
         :class ["text-2xl"]}
   [common/primary-button {:dispatch [handlers/generate-map]} "Generate"]])

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
   [summary/component]])
