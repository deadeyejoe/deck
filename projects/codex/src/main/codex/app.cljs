(ns codex.app
  (:require [codex.content :as content]
            [codex.handlers :as handlers]
            [codex.styling :as styling]
            [codex.search :as search]
            [codex.subs :as subs]
            [medley.core :as medley]
            [re-frame.core :as rf]
            [reagent.dom]
            [superstring.core :as str]))

(declare render-node)

(defn render-title [{:keys [debug depth section-depth list-depth] :as context} {:keys [title] :as node}]
  (when title
    [:div {:class (styling/title context node)}
     (cond-> title
       debug (conj (str " " (str/join "|" [depth section-depth list-depth]))))]))

(defn render-body [context {:keys [body] :as node}]
  (when (:flag body) (tap> body))
  (when body [:div {:class (styling/body context node)} body]))

(defn render-content [context node]
  [:div {:class ["w-full" "flex" "flex-col"]}
   (render-title context node)
   (render-body context node)])

(defn index->letter [index]
  (char (+ index 97)))

(def romans {1 "I" 4 "IV" 5 "V" 9 "IX" 10 "X" 14 "XIV" 15 "XV" 19 "XIX" 20 "XX"})

(defn index->roman [index]
  (let [clamped (min 20 (max 1 index))]
    (str/lower-case
     (or (get romans clamped)
         (str (index->roman (- clamped 1)) "I")))))

(defn index->ordinal [{:keys [list-depth] :as _context} idx]
  (case (mod list-depth 3)
    0 (str (inc idx) ".")
    1 (str (index->letter idx) ")")
    2 (index->roman (inc idx))))

(defn list-context? [{{list-style :list} :style :as _context-or-node}]
  (#{:bullet :item} list-style))

(defn section-context? [context-or-node]
  (-> context-or-node :style :section))

(defn ordinal [{{list-style :list} :style
                :as context} idx]
  (when (list-context? context)
    [:div {:class (styling/ordinal context)}
     (case list-style
       :bullet "•"
       :item (index->ordinal context idx)
       nil)]))

(defn render-child [context idx child]
  [:div {:class ["w-full" "flex" "items-start" "relative"]}
   [ordinal context idx]
   (render-node context child)])

(defn render-children [context children]
  [:div {:class ["w-full" "flex"]}
   (if (list-context? context)
     [:div {:class [styling/ordinal-width "flex-shrink-0"]}]
     [:div {:class ["w-1" "flex-shrink-0"]}])
   (into [:div {:class ["w-full" "flex" "flex-col"]}]
         (map-indexed (partial render-child context) children))])

(def cascading-style [:list])

(defn merge-style [context {:keys [style] :as node}]
  (cond-> context
    :always (update :style #(-> %
                                (select-keys cascading-style)
                                (merge style)))
    (:section style) (assoc :section-depth 0)
    (= :none (:list style)) (dissoc :list-depth)))

(defn increment-depth [context _node]
  (cond-> context
    :always (update :depth inc)
    (list-context? context) (update :list-depth (fnil inc -1))
    (section-context? context) (medley/update-existing :section-depth inc)))

(defn render-node [context {:keys [key children refer-by] :as node}]
  (let [node-context (merge-style context node)]
    [:div (cond-> {:class (styling/node node-context node)}
            refer-by (assoc :id (first refer-by)))
     (render-content node-context node)
     (when (seq children) (render-children (increment-depth node-context node) children))]))

(def init-context {:depth 0})

(defn search-bar []
  (let [search-term @(rf/subscribe [subs/search-term])]
    [:div {:class ["fixed" "w-full" "bottom-0" "flex" "border-2" "border-black"]}
     [:div search-term]
     [:input {:type "text"
              :value search-term
              :placeholder "Search"
              :on-change #(rf/dispatch [handlers/set-search-term (-> % .-target .-value)])
              :class ["w-full"]}]]))

(defn ui []
  [:div {:class ["m-1"]}
   [:div {:class ["w-full" "h-full" "flex" "flex-col" "justif-around"]}
    [render-node init-context content/transformed-content]]])

(defn render []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))

;; Init ====================================================

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (render))

(defn init []
  (rf/dispatch-sync [handlers/initialize])
  (render))
