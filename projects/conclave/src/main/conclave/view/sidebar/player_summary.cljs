(ns conclave.view.sidebar.player-summary
  (:require [conclave.handlers :as handlers]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [conclave.tiles.core :as tile]
            [conclave.subs :as subs]
            [medley.core :as medley]
            [re-frame.core :as rf]))

(defn trait [trait count]
  [:div {:key trait
         :class (concat ["flex" "ml-1" "items-center"]
                        (when-not (pos-int? count) ["opacity-20"]))}
   [:div {:class ["mr-1"]} [icons/trait->img trait]]
   [:div count]])

(defn traits [{:keys [traits] :as _summary}]
  (let [trait->count (->> traits
                          (group-by identity)
                          (medley/map-vals count))]
    [:div {:class ["w-full" "flex" "justify-center" "items-center"]}
     (doall
      (map (fn [t] (trait t (get trait->count t 0))) tile/traits))]))

(defn specialties [{:keys [specialties] :as _summary}]
  (into [:div {:class ["w-full" "flex" "justify-end" "items-center"]}]
        (map (fn [s] [:div {:class ["mx-1"]} (icons/specialty->img s)]) specialties)))

(defn others [{:keys [wormholes legendaries]}]
  (into [:div {:class ["w-full" "flex" "justify-start" "items-center"]}]
        (concat (map (fn [w] [:div {:class ["mx-1"]} (icons/wormhole->img w)]) wormholes)
                (when (pos-int? legendaries) [[:div {:class ["mx-1"]} icons/legendary]]))))

(defn summary-row-structure [& content]
  (let [standard-classes ["flex" "h-full" "mx-0.5" "items-center"]]
    (mapv conj
          [[:div {:class (into standard-classes ["w-1/5"])}]
           [:div {:class (into standard-classes ["w-1/12"])}]
           [:div {:class (into standard-classes ["w-1/12"])}]
           [:div {:class (into standard-classes ["w-1/6"])}]
           [:div {:class (into standard-classes ["w-1/6"])}]
           [:div {:class (into standard-classes ["w-1/4"])}]]
          content)))

(defn summary-row [player-key]
  (let [summary @(rf/subscribe [subs/player-summary player-key])
        player-name @(rf/subscribe [subs/player-name player-key])]
    (into [:div {:key player-key
                 :class (into ["flex" "w-full" "h-10" "my-1"
                               "hover:bg-gray-800" ;"border-gray-800" "rounded-sm"
                               "transition-colors"])
                 :on-mouse-enter #(rf/dispatch [handlers/highlight-player player-key])
                 :on-mouse-leave #(rf/dispatch [handlers/clear-hover])}]
          (summary-row-structure
           [:div {:class (into ["w-full" "h-full" "flex" "items-center"
                                "bg-gradient-to-r" "from-blue-900"
                                "hover:from-blue-800"])}
            (or player-name player-key)]
           [:div {:class ["px-1" "w-full" "flex" "justify-center"]} [common/resource summary {:class ["justify-end"]}]]
           [:div {:class ["px-1" "w-full"  "flex" "justify-center"]} [common/influence summary {:class ["justify-end"]}]]
           [specialties summary]
           [others summary]
           [traits summary]))))

(defn header-row []
  (into [:div {:class ["flex" "w-full" "h-8" "my-1"]}]
        (summary-row-structure
         ""
         [:div {:class ["flex" "w-full" "justify-end" "p-2"]} icons/resource]
         [:div {:class ["flex" "w-full" "justify-end" "p-2"]} icons/influence] "" "" "")))

(defn player-table [player-keys]
  (into [:<> [header-row]]
        (map (fn [pk] [summary-row pk]) player-keys)))

(defn component []
  (let [player-keys @(rf/subscribe [subs/player-keys])]
    [common/o-box {:class ["p-1"]}
     [common/v-box {:class ["justify-center" "w-full" "bg-gray-900"
                            "border" "border-gray-800" "rounded-lg" "p-2"]}
      (if (seq player-keys)
        [player-table player-keys]
        [:div "No players yet..."])]]))
