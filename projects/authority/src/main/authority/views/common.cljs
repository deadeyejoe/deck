(ns authority.views.common
  (:require [re-frame.core :as rf]
            [authority.utils :as utils]
            [authority.constants :as const]))

(def poly-mod {:clip-path (utils/polygon 25 5 25 5)})

(defn border-colour [initiative state]
  (if (= state :disabled)
    "bg-gray-400"
    (const/strategy->border initiative :bg)))

(defn bg-colour [initiative state]
  (case state
    :disabled "bg-gray-500"
    :unselected "bg-gray-800"
    :selected (const/strategy->bg initiative)))

(defn text-colour [_initiative state]
  (case state
    :disabled "text-gray-800"
    :unselected "text-white"
    :selected "text-black"))

(defn initiative-badge [{:keys [initiative state click-handler content]}]
  (let [border (border-colour initiative state)
        bg     (bg-colour initiative state)
        text   (text-colour initiative state)]
    [:div {:key content
           :on-click click-handler
           :class ["m-2" "cursor-pointer" border text]
           :style poly-mod}
     [:div {:class ["m-0.5" "px-2" "py-0.5" bg]
            :style poly-mod}
      content]]))