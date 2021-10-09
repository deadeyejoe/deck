(ns authority.views.common
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]
            [authority.constants :as const]))

(def poly-outer (utils/polygon 25 5))
(def poly-inner (utils/polygon 35 15))

(defn border-colour [initiative state]
  (case state
    :disabled "bg-gray-400"
    :exhausted "bg-gray-700"
    (const/strategy->border initiative :bg)))

(defn bg-colour [initiative state]
  (case state
    :disabled "bg-gray-500"
    :exhausted "bg-gray-800"
    :unselected "bg-gray-800"
    :selected (const/strategy->bg initiative)))

(defn text-colour [_initiative state]
  (case state
    :disabled "text-gray-800"
    :exhausted "text-gray-700"
    :unselected "text-white"
    :selected "text-black"))

(defn poly-badge [{:keys [content poly-outer poly-inner border fill border-padding]
                   :or {border-padding "p-0.5"}}]
  [:div {:key content
         :class [border-padding border]
         :style  {:clip-path poly-outer}}
   [:div {:class [fill]
          :style {:clip-path (or poly-inner poly-outer)}}
    content]])

(defn initiative-badge [{:keys [initiative state click-handler content]}]
  (let [border (border-colour initiative state)
        bg     (bg-colour initiative state)
        text   (text-colour initiative state)
        pointer (and click-handler (not= state :disabled))]
    [:div {:key content
           :on-click click-handler
           :class [(when pointer "cursor-pointer") text "m-2" "flex-shrink-0" "self-center"]}
     (poly-badge {:border border
                  :fill bg
                  :poly-outer poly-outer
                  :poly-inner poly-inner
                  :content [:div {:class ["w-7" "h-8" "flex" "justify-center" "items-center"]} content]})]))

(defn primary-button [{:keys [label dispatch disabled? content]}]
  (let [pointer (and dispatch (not disabled?))
        poly (utils/polygon-px 15 0)]
    [:div {:key label
           :class [(if pointer "cursor-pointer" "cursor-not-allowed") "bg-blue-800" "p-0.5"]
           :on-click #(when-not disabled? (rf/dispatch dispatch))
           :style {:clip-path poly}}
     [:div {:class ["bg-blue-700" "hover:bg-blue-600" "active:bg-blue-100" "p-0.5"]
            :style {:clip-path poly}}
      [:div {:class ["bg-blue-800"]
             :style {:clip-path poly}}
       [:div {:class ["px-5" "py-2" "flex" "justify-center" "items-center"]}
        (or content label)]]]]))