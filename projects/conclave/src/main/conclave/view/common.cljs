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

(defn real-button [{:keys [dispatch dispatch-fn]} & content]
  (into [:div {:class ["text-gray-200"
                       "bg-gradient-to-br" "from-gray-600" "to-gray-400" "border-gray-400"
                       "hover:from-gray-500" "hover:to-gray-400"
                       "active:from-gray-100" "active:to-gray-400" "active:border-gray-100"
                       "cursor-pointer" "border" "rounded" "m-1" "p-1"
                       "flex" "justify-center" "items-center"]
               :on-click (or dispatch-fn #(rf/dispatch dispatch))}]
        content))

(defn primary-button [{:keys [dispatch dispatch-fn]} & content]
  (into [:div {:class ["text-gray-200"
                       "border-blue-600"
                       "bg-gradient-to-br"
                       "from-blue-900" "to-blue-600"
                       "hover:from-blue-800" "hover:to-blue-500" "hover:border-blue-500"
                       "cursor-pointer" "border" "rounded" "m-1" "p-1"
                       "flex" "justify-center" "items-center"]
               :on-click (or dispatch-fn #(rf/dispatch dispatch))}]
        content))

(defn labeled-value [label query-vector]
  (let [sub @(rf/subscribe query-vector)]
    [:div
     {:class ["flex" "justify-between"]}
     [:div (str label ":")]
     [:div sub]]))

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

(defn ->dispatch-fn [{:keys [dispatch dispatch-fn disabled] :as props}]
  (if disabled
    (constantly true)
    (or dispatch-fn #(rf/dispatch dispatch))))

(defn dispatch-with-value [props]
  (comp (->dispatch-fn props)
        #(-> % .-target .-value)))

(defn text-input [{:keys [sub placeholder] :as props}]
  (let [sub @(rf/subscribe sub)]
    [:input {:type "text"
             :value sub
             :placeholder placeholder
             :on-change (dispatch-with-value props)
             :class ["rounded" "back" "text-gray-200" "bg-gray-600" "w-full" "h-full" "pl-2"]}]))

(defn switch [{:keys [on-label off-label sub disabled] :as props}]
  (let [on? @(rf/subscribe sub)]
    [o-box {:class ["text-gray-300"]}
     (when off-label
       [:span {:class ["mr-3" "transition-opacity" (when on? "opacity-30")]}
        off-label])
     [:span {:class ["relative" "inline-block" "p-0.5" "w-12" "h-6"
                     "border-2" "rounded-full" "border-gray-300"
                     (if (or off-label on?) "bg-blue-900" "bg-gray-600") 
                     (if disabled "cursor-not-allowed" "cursor-pointer")
                     (when disabled "opacity-30")]
             :on-click (->dispatch-fn props)}
      [:span {:class (into ["w-4" "h-4" "absolute" "rounded-full" "transition-all"
                            "bg-gray-300"
                            (if on? "right-1" "right-6")])}]]
     [:span {:class ["ml-3" "transition-opacity" (when-not on? "opacity-30")]}
      on-label]]))

(defn select [{:keys [sub] :as props} & options]
  (let [selected-value @(rf/subscribe sub)]
    (into [:select {:on-change (dispatch-with-value props)
                    :value selected-value
                    :class ["block"
                            "h-full" "w-full" "px-3" "py-1.5" "m-0"
                            "text-base" "font-normal" "text-white"
                            "bg-gray-500" "bg-clip-padding" "bg-no-repeat"
                            "border" "border-solid" "border-gray-700" "rounded"
                            "transition" "ease-in-out"
                            "focus:border-blue-600" "focus:outline-none"]
                    :style {:background-image "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')"}}]
          options)))
