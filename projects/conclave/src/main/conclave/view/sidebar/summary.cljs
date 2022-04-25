(ns conclave.view.sidebar.summary
  (:require [conclave.handlers :as handlers]
            [conclave.view.icons :as icons]
            [conclave.tiles.core :as tile]
            [conclave.subs :as subs]
            [medley.core :as medley]
            [re-frame.core :as rf]))

(defn score [{:keys [score] :as _summary}]
  (int score))

(defn resource [{:keys [optimal-resources resources] :as _summary}]
  [:div {:class ["flex" "justify-between"]}
   [:div {:class ["text-amber-400"]} (str optimal-resources)]
  ;;  [:div "/"]
   [:div {:class ["text-amber-800"]} #_(str "(" ")") resources]])

(defn influence [{:keys [optimal-influence influence] :as _summary}]
  [:div {:class ["flex" "justify-between"]}
   [:div {:class ["text-cyan-400"]} (str optimal-influence)]
  ;;  [:div "/"]
   [:div {:class ["text-cyan-800"]} #_(str "(" ")")  influence]])

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
        valid true
        problems []]
    [:div (merge {:key player-key
                  :class ["flex" "justify-around" "w-full" (when-not valid "bg-red-600") "my-1"]
                  :on-mouse-enter #(rf/dispatch [handlers/highlight-player player-key])
                  :on-mouse-leave #(rf/dispatch [handlers/clear-hover])}
                 (when-not valid {:title (->> problems (interpose ",") (apply str))}))
     [:div {:class ["w-1/12"]} player-key]
     [:div {:class ["w-1/12"]} (resource summary)]
     [:div {:class ["w-1/12"]} (influence summary)]
     [:div {:class ["flex" "w-1/4"]}
      [traits summary]]
     [:div {:class ["flex" "w-1/6"]}
      [specialties summary]]
     [:div {:class ["flex" "w-1/6"]}
      (others summary)]]))

(defn component []
  (let [player-keys @(rf/subscribe [subs/player-keys])]
    [:div {:class ["flex" "flex-col" "justify-center"  "mb-1" "w-full" "h-full"]}
     [:div "Player Summary"]
     (doall (map summary-row player-keys))]))
