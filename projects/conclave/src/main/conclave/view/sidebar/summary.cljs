(ns conclave.view.sidebar.summary
  (:require [conclave.handlers :as handlers]
            [conclave.view.icons :as icons]
            [conclave.view.common :as common]
            [conclave.tiles.core :as tile]
            [conclave.subs :as subs]
            [medley.core :as medley]
            [re-frame.core :as rf]))

(defn score [{:keys [score] :as _summary}]
  (int score))

(defn optimal [{:keys [optimal-resources optimal-influence] :as _summary}]
  (str optimal-resources "/" optimal-influence))

(defn maximum [{:keys [resources influence] :as _summary}]
  (str "(" resources "/" influence ")"))

(defn trait [trait count]
  [:div {:key trait
         :class (concat ["flex" "mx-1"]
                        (when-not (pos-int? count) ["opacity-20"]))}
   [:div {:class ["mx-1"]} [icons/trait->img trait]]
   [:div count]])

(defn traits [{:keys [traits] :as _summary}]
  (let [trait->count (->> traits
                          (group-by identity)
                          (medley/map-vals count))]
    [:div {:class ["w-full" "flex" "justify-center"]}
     (doall
      (map (fn [t] (trait t (get trait->count t 0))) tile/traits))]))

(defn specialties [{:keys [specialties] :as _summary}]
  (into [:div {:class ["w-full" "flex" "justify-end"]}]
        (map (fn [s] [:div {:class ["mx-1"]} (icons/specialty->img s)]) specialties)))

(defn others [{:keys [wormholes legendaries]}]
  (into [:div {:class ["w-full" "flex" "justify-start"]}]
        (concat (map (fn [w] [:div {:class ["mx-1"]} (icons/wormhole->img w)]) wormholes)
                (when (pos-int? legendaries) [[:div {:class ["mx-1"]} icons/legendary]]))))

(defn summary-row [player-key]
  (let [summary @(rf/subscribe [subs/player-summary player-key])
        player-name @(rf/subscribe [subs/player-name player-key])
        valid true
        problems []]
    [:div (merge {:key player-key
                  :class ["flex" "justify-around" "w-full" (when-not valid "bg-red-600") "my-1" "h-8" "py-1"]
                  :on-mouse-enter #(rf/dispatch [handlers/highlight-player player-key])
                  :on-mouse-leave #(rf/dispatch [handlers/clear-hover])}
                 (when-not valid {:title (->> problems (interpose ",") (apply str))}))
     [:div {:class ["w-1/12"]} (or player-name player-key)]
     [:div {:class ["w-1/12"]} (common/resource summary)]
     [:div {:class ["w-1/12"]} (common/influence summary)]
     [:div {:class ["flex" "w-1/4"]}
      [traits summary]]
     [:div {:class ["flex" "w-1/6"]}
      [specialties summary]]
     [:div {:class ["flex" "w-1/6"]}
      (others summary)]]))

(defn component []
  (let [player-keys @(rf/subscribe [subs/player-keys])]
    (->> player-keys
         (map summary-row)
         (into [:div {:class ["flex" "flex-col" "justify-center"  "mb-1" "w-full"]}]))))
