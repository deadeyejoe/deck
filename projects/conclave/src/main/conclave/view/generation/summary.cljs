(ns conclave.view.generation.summary
  (:require [conclave.components.signal :as signal]
            [conclave.generate.options :as options]
            [conclave.subs :as subs]
            [conclave.view.generation.subs :as generate-subs]
            [conclave.view.generation.signals :as signals]
            [conclave.view.heroicons :as hicons]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [goog.string :as gstr]
            [re-frame.core :as rf]))


(defn section [& content]
  (into [common/v-box {:class ["h-1/4" "justify-center" "items-start"]}]
        content))

(defn spacer []
  [:div {:class ["h-2"]}])

(defn summary-icon [props & content]
  (into [:div (merge-with into {:class ["cursor-help" "h-6" "w-6"
                                        "flex" "justify-center" "text-gray-200"]}
                          props)]
        content))

(defn pok []
  (let [pok? @(rf/subscribe [subs/generation-option :pok])]
    [summary-icon {:class [(when-not pok? "opacity-20")]
                   :title (if pok?
                            "Include Prophecy of Kings content"
                            "Include base game content only")}
     icons/pok]))

(defn layout []
  (let [layout-code @(rf/subscribe [generate-subs/layout-code])
        layout-name @(rf/subscribe [generate-subs/layout-name])]
    [summary-icon {:class ["font-bold"]
                   :title (str "Selected Layout: " layout-name)} layout-code]))

(defn seed []
  (let [seed? @(rf/subscribe [generate-subs/seed?])
        seed @(rf/subscribe [subs/generation-option :seed])]
    [summary-icon {:title (if seed?
                            (str "Use seed '" seed "' to generate map")
                            "No seed; Generate a random map each time")}
     (if seed?
       hicons/lock-closed-solid
       hicons/lock-open-solid)]))

(defn wormhole []
  (let [wormhole? @(rf/subscribe [subs/generation-option :include-wormholes])]
    [summary-icon {:class [(when-not wormhole? "opacity-20")]
                   :title (if wormhole?
                            "Always include all wormhole tiles"
                            "Randomly include wormhole tiles")}

     [:span (gstr/unescapeEntities "&alpha;")]
     [:span {:class "-ml-1"} (gstr/unescapeEntities "&beta;")]]))

(defn legendary []
  (let [legendary? @(rf/subscribe [subs/generation-option :include-legendaries])]
    [summary-icon {:class [(when-not legendary? "opacity-20")]
                   :title (if legendary?
                            "Always include all legendary tiles"
                            "Randomly include legendary tiles")}
     icons/legendary-white]))

(defn map-balance []
  (let [map-balance @(rf/subscribe [subs/generation-option :map-balance])
        balance-label (:label (options/name->map-balance-option map-balance))]
    [summary-icon {:class ["flex" "font-bold"]
                   :title (str "Resource/influence balance in the overall map is: " balance-label)}
     (case map-balance
       :extreme-resource [:<> icons/resource "+"]
       :favour-resource icons/resource
       :balanced [icons/res-inf "20px" "24px"]
       :favour-influence icons/influence
       :extreme-influence [:<> icons/influence "+"])]))

(defn equidistant-planets []
  (let [equidistant-planets? @(rf/subscribe [subs/generation-option :planets-in-equidistants])]
    [summary-icon {:class [(when-not equidistant-planets? "opacity-20")]
                   :title (if equidistant-planets?
                            "All equidistant tiles should contain planets"
                            "Equidistant tiles will randomly contain planets")}
     [:div {:class ["w-5" "h-5" "border-2" "border-white" "rounded-xl"]}]]))

(defn equidistant-legendaries []
  (let [equidistant-legendaries? @(rf/subscribe [subs/generation-option :legendaries-in-equidistants])]
    [summary-icon {:class [(when-not equidistant-legendaries? "opacity-20")]
                   :title (if equidistant-legendaries?
                            "Legendaries are always in equidistant tiles"
                            "Legendaries may be in player slices")}
     icons/legendary-white]))

(defn equidistant-balance []
  (let [equidistant-balance @(rf/subscribe [subs/generation-option :equidistant-balance])
        balance-label (:label (options/name->equidistant-balance-option equidistant-balance))]
    [summary-icon {:class ["flex" "font-bold"]
                   :title (str "Equidistant tiles tend to:" balance-label)}
     (case equidistant-balance
       :favour-resource icons/resource
       :balanced [icons/res-inf "20px" "24px"]
       :favour-influence icons/influence)]))

(defn toggle-open-state []
  (signal/>toggle! signals/open)
  (signal/>unset! signals/help))

(defn pane-control []
  (let [open? (signal/<set? signals/open)]
    [:div {:title (if open?
                    "Collapse map generation options"
                    "Expand map generation options")
           :class ["flex" "hover:border" "hover:border-gray-300" "rounded-lg" "p-1"]}
     [:span {:class ["transition-transform" "duration-500" "delay-200" (when open? "rotate-180")]}
      hicons/chevron-double-right]]))

(defn component []
  [:div {:class ["absolute" "-right-12" "top-1" "h-1/2" "w-12"
                 "rounded-r-xl" "border-blue-800" "border-y-2" "border-r-2"
                 "bg-blue-900" "hover:bg-gradient-to-tr" "hover:from-blue-900" "hover:to-blue-800" "cursor-pointer"]
         :on-click toggle-open-state}
   [common/v-box {:class ["h-full" "m-1"]}
    [section
     [pok]
     [spacer]
     [layout]
     [spacer]
     [seed]]
    [section
     [wormhole]
     [spacer]
     [legendary]
     [spacer]
     [map-balance]]
    [section
     [equidistant-planets]
     [spacer]
     [equidistant-legendaries]
     [spacer]
     [equidistant-balance]]
    [common/v-box {:class ["justify-end" "h-1/4" "pb-3"]}
     [pane-control]]]])
