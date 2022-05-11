(ns conclave.view.common
  (:require [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [re-frame.core :as rf]))

(defn bevel-clip-path [n]
  (let [px (str n "px")
        end-offset (str "calc(100% - " px ")")]
    (str  "polygon("
          (->> [[px 0] [end-offset 0]
                ["100%" px] ["100%" end-offset]
                [end-offset "100%"] [px "100%"]
                [0 end-offset] [0 px]]
               (map (fn [[x y]] (str x " " y)))
               (interpose ",")
               (apply str))
          ")")))

(defn bevel-clip-path-beta [n]
  (let [end-offset (- n)]
    (str  "polygon("
          (->> [[n 0] [end-offset 0]
                ["100%" n] ["100%" end-offset]
                [end-offset "100%"] [n "100%"]
                [0 end-offset] [0 n]]
               (map (fn [[x y]] (str x " " y)))
               (interpose ",")
               (apply str))
          ")")))

(bevel-clip-path 5)

(defn button [value dispatch]
  [:input {:type "button"
           :value value
           :class ["text-gray-900" "bg-gray-400" "border-gray-600"
                   "active:bg-gray-200" "active:border-gray-100"
                   "cursor-pointer" "border" "rounded-sm" "m-1" "p-1"]
           :on-click #(rf/dispatch dispatch)}])

(defn real-button [content dispatch]
  [:div {:class ["text-gray-200"
                 "bg-gradient-to-br" "from-gray-600" "to-gray-400" "border-gray-400"
                 "hover:from-gray-500" "hover:to-gray-400"
                 "active:from-gray-100" "active:to-gray-400" "active:border-gray-100"
                 "cursor-pointer" "border" "rounded" "m-1" "p-1"
                 "flex" "justify-center" "items-center"]
         :on-click #(rf/dispatch dispatch)}
   content])

(defn labeled-value [label query-vector]
  (let [sub @(rf/subscribe query-vector)]
    [:div
     {:class ["flex" "justify-between"]}
     [:div (str label ":")]
     [:div sub]]))

(defn text-input [sub-query build-dispatch]
  (let [sub @(rf/subscribe sub-query)]
    [:input {:type "text"
             :value sub
             :on-change #(rf/dispatch-sync (-> % .-target .-value build-dispatch))
             :class ["rounded" "back" "text-gray-200" "bg-gray-600" "w-full"]}]))

(def clipped-hex-path "polygon(26% 2%, 74% 2%, 98% 50%, 74% 98%, 26% 98%, 2% 50%)")
(def rotations {1 "rotate-60"
                2 "rotate-120"
                3 "rotate-180"
                4 "rotate-240"
                5 "rotate-300"})

(defn tile->hex-image [{:keys [rotation] :as tile}]
  [:img {:src (str "images/" (tile/image tile))
         :class [(rotations rotation)]
         :height "97%"
         :width "97%"
         :style {:clip-path clipped-hex-path}}])

(defn hex-image [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])]
    (tile->hex-image tile)))

(defn value-container [props & content]
  (into [:div (merge-with into
                          {:class ["flex" "items-center" "w-6"]}
                          props)]
        content))

(defn resource
  ([summary] (resource summary {}))
  ([{:keys [optimal-resources resources] :as _summary} props]
   (let [resource-mode @(rf/subscribe [subs/value-mode])]
     [value-container (merge-with into {:class ["text-amber-400"]} props)
      (if (= :optimal resource-mode)
        (str optimal-resources)
        (str resources))])))

(defn influence
  ([summary] (influence summary {}))
  ([{:keys [optimal-influence influence] :as _summary} props]
   (let [resource-mode @(rf/subscribe [subs/value-mode])]
     [value-container (merge-with into {:class ["text-cyan-400"]} props)
      (if (= :optimal resource-mode)
        (str optimal-influence)
        (str influence))])))

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
