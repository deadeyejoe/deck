(ns conclave.view.sidebar.map-summary
  (:require [conclave.view.icons :as icons]
            [conclave.subs :as subs]
            [re-frame.core :as rf]))

(defn o-box [props & content]
  (into [:div (merge-with into
                          {:class ["flex" "h-full" "w-full" "justify-center" "items-center"]}
                          props)]
        content))

(defn h-box [props & content]
  (into [:div (merge-with into
                          {:class ["flex" "w-full" "items-center"]}
                          props)]
        content))

(defn v-box [props & content]
  (into [:div (merge-with into
                          {:class ["flex" "flex-col" "h-full" "items-center"]}
                          props)]
        content))

(defn label [content]
  [:div {:class ["w-32" "text-gray-200"]} content])

(defn clamp [n]
  (-> n
      (max 0)
      (min 100)))

(comment
  (map clamp [-1 50 101]))

(defn percentage [{:keys [background-props text-props]} {:keys [lower value upper] :as _bounds}]
  (let [percent (clamp (int (* (/ (- value lower)
                                  (- upper lower))
                               100)))
        minimal? (< percent 10)]
    [h-box {:class ["h-8" "flex"]}
     [:div {:class ["flex" "justify-end" "w-16" "pr-2"]} lower]
     [:div {:class (into ["p-1" "border" "border-gray-800" "w-full" "h-full" "flex"])}
      [:div {:class (into ["h-full" "flex" "items-center" "justify-end" "pr-2" "transition-all" "text-black"]
                          background-props)
             :style {:width (str percent "%")}}
       (when-not minimal? value)]
      (when minimal?
        [:div {:class (into ["h-full" "pl-2" "flex" "items-center"] text-props)} value])]
     [:div {:class ["flex" "justify-start" "w-16" "pl-2"]} upper]]))

(defn icon-count [icon value title]
  (let [effective-value (or value 0)]
    [:div {:class ["h-full" "flex" "justify-start" "items-center" "w-24"
                   (when (zero? effective-value) "opacity-60")]
           :title title}
     [:div {:class ["cursor-help"]} icon]
     [:div {:class ["ml-2"]} effective-value]]))

(defn tile-row [map-summary]
  [h-box {:class ["h-12"]}
   [:div {:class ["w-10"]}]
   [icon-count icons/grey-tile (:total-tiles map-summary) "Total tiles (excluding fixed tiles)"]
   [icon-count icons/blue-tile (:blue map-summary) "Total blue tiles (excluding fixed tiles)"]
   [icon-count icons/red-tile (:red map-summary) "Total red tiles"]])

(defn feature-row [map-summary]
  [h-box {:class ["h-12"]}
   [:div {:class ["w-10"]}]
   [icon-count (icons/alpha "35px") (:alpha map-summary)
    "Number of alpha wormholes"]
   [icon-count (icons/beta "35px") (:beta map-summary)
    "Number of beta wormholes"]
   [icon-count (icons/legendary* "35px") (:legendary map-summary)
    "Number of legendary planets"]
   [icon-count (icons/frontier* "35px") (:frontier map-summary)
    "Number of frontier-tiles"]
   [icon-count [:div {:class ["grayscale"]} (icons/biotic "35px")] (:tech map-summary)
    "Number of systems with tech specialties"]])

(defn bounds [map-summary]
  (let [optimal? @(rf/subscribe [subs/optimal-values])]
    [:<>
     [h-box {:class ["pr-3"]}
      [label "Planets:"]
      [percentage {:background-props ["bg-gradient-to-r" "from-gray-800" "to-gray-400"] :text-props ["text-gray-400" "opacity-80"]}
       (:planets map-summary)]]
     [h-box {:class ["mt-1" "pr-3"]}
      [label "Resources:"]
      [percentage {:background-props ["bg-gradient-to-r" "from-amber-800" "to-amber-400"] :text-props ["text-amber-400" "opacity-80"]}
       ((if optimal? :optimal-resources :resources) map-summary)]]
     [h-box {:class ["mt-1" "pr-3"]}
      [label "Influence:"]
      [percentage {:background-props ["bg-gradient-to-r" "from-cyan-800" "to-cyan-400"] :text-props ["text-cyan-400" "opacity-80"]}
       ((if optimal? :optimal-influence :influence) map-summary)]]]))

(defn component []
  (let [map-summary @(rf/subscribe [subs/map-summary])]
    [o-box {:class ["p-1"]}
     [o-box {:class ["border" "p-2" "rounded-lg" "border-gray-800"]}
      (if map-summary
        [v-box {:class ["w-full" "justify-around"]}
         [tile-row map-summary]
         [feature-row map-summary]
         [bounds map-summary]]
        [:div "No map yet..."])]]))
