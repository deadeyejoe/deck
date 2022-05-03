(ns conclave.view.sidebar.summary
  (:require [conclave.handlers :as handlers]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [conclave.tiles.core :as tile]
            [conclave.subs :as subs]
            [medley.core :as medley]
            [re-frame.core :as rf]))

(defn trait [trait count]
  [:div {:key trait
         :class (concat ["flex" "mx-1" "items-center"]
                        (when-not (pos-int? count) ["opacity-20"]))}
   [:div {:class ["mx-1"]} [icons/trait->img trait]]
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
           [:div {:class (into standard-classes ["w-1/4"])}]
           [:div {:class (into standard-classes ["w-1/6"])}]
           [:div {:class (into standard-classes ["w-1/6"])}]]
          content)))

(defn summary-row [player-key]
  (let [{:keys [valid problems] :as summary} @(rf/subscribe [subs/player-summary player-key])
        player-name @(rf/subscribe [subs/player-name player-key])]
    (into [:div {:key player-key
                 :class (into ["flex" "w-full" "h-10" "my-1"
                               "hover:bg-gray-800" ;"border-gray-800" "rounded-sm"
                               "transition-colors"])
                 :on-mouse-enter #(rf/dispatch [handlers/highlight-player player-key])
                 :on-mouse-leave #(rf/dispatch [handlers/clear-hover])
                 :title (apply str (interpose "\n " problems))}]
          (summary-row-structure
           [:div {:class (into ["w-full" "h-full" "flex" "items-center"]
                               (if valid
                                 ["bg-gradient-to-r" "from-blue-900"
                                  "hover:from-blue-800"]
                                 ["bg-gradient-to-r" "from-red-900"
                                  "hover:from-red-800"]))} (or player-name player-key)]
           [:div {:class ["px-1" "w-full"]} [common/resource summary]]
           [:div {:class ["px-1" "w-full"]} [common/influence summary]]
           [traits summary]
           [specialties summary]
           [others summary]))))

(defn header-row []
  (into [:div {:class ["flex" "w-full" "h-8" "my-1"]}]
        (summary-row-structure
         ""
         [:div {:class ["flex" "w-full" "justify-center"]} icons/resource]
         [:div {:class ["flex" "w-full" "justify-center"]} icons/influence] "" "" "")))

(defn component []
  (let [player-keys @(rf/subscribe [subs/player-keys])]
    (->> player-keys
         (map (fn [pk] [summary-row pk]))
         (into [:div {:class ["flex" "flex-col" "justify-center"  "mb-1" "w-full"]}
                [header-row]]))))
