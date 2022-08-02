(ns authority.views.initiative
  (:require [authority.constants :as const]
            [authority.utils.polygon :as poly-util]
            [superstring.core :as str]))

(def poly-outer (poly-util/polygon 25 5))
(def poly-inner (poly-util/polygon 35 15))

(def initiative-constants
  {0 {:initiative 0
      :border ["from-gray-400" "to-gray-600"]
      :background ["from-gray-600" "to-gray-400"]}
   1 {:initiative 1
      :border ["from-red-500" "to-red-700" "active:from-red-800"  "active:to-red-600"]
      :background ["from-red-800" "to-red-600"]}
   2 {:initiative 2
      :border ["from-yellow-500" "to-amber-700"]
      :background ["from-amber-800" "to-yellow-600"]}
   3 {:initiative 3
      :border ["from-amber-200" "to-amber-500"]
      :background ["from-amber-500" "to-amber-200"]}
   4 {:initiative 4
      :border ["from-green-700" "to-green-900"]
      :background ["from-green-900" "to-green-600"]}
   5 {:initiative 5
      :border ["from-emerald-400" "to-emerald-800"]
      :background ["from-emerald-800" "to-emerald-500"]}
   6 {:initiative 6
      :border ["from-blue-400" "to-blue-700"]
      :background ["from-blue-700" "to-blue-400"]}
   7 {:initiative 7
      :border ["from-indigo-500" "to-indigo-700"]
      :background ["from-indigo-700" "to-indigo-500"]}
   8 {:initiative 8
      :border ["from-purple-500" "to-purple-700"]
      :background ["from-purple-700" "to-purple-500"]}})

(defn base-poly [{:keys [base border border-modifiers background inner-poly outer-poly]
                  :or {inner-poly poly-inner
                       outer-poly poly-outer}} & content]
  [:div {:class base
         :style  {:clip-path poly-outer}}
   [:div {:class border}
    [:div {:class (into ["p-0.5" "bg-transparent"] border-modifiers)}
     (into [:div {:class background
                  :style {:clip-path poly-inner}}]
           content)]]])

(defn base-badge [initiative props]
  [base-poly props
   [:div {:class ["w-7" "h-8" "flex" "justify-center" "items-center"]} [:strong initiative]]])

(defn text-classes [_initiative state]
  (case state
    :exhausted ["text-gray-100"]
    ["text-gray-800"]))

(defn border-classes [initiative state]
  (case state
    :active ["bg-white"]
    (conj (get-in initiative-constants [initiative :border])
          "bg-gradient-to-tr")))

(defn background-classes [initiative state]
  (case state
    :exhausted ["bg-gray-800"]
    (conj (get-in initiative-constants [initiative :background])
          "bg-gradient-to-r")))

(defn badge [{:keys [initiative state]
              :or {state :ready}}]
  ^{:key initiative}
  [base-badge initiative
   {:base (text-classes initiative state)
    :border (border-classes initiative state)
    :border-modifiers ["hover:bg-white"]
    :background (background-classes initiative state)}])

(defn button [{:keys [initiative state on-click disabled]
               :or {state :ready}}]
  ^{:key initiative}
  [:div {:class [(when (and on-click (not disabled)) "cursor-pointer")
                 (when disabled "opacity-40")
                 "transition-opacity" "duration-100"]
         :on-click (when-not disabled on-click)}
   [base-badge initiative
    {:base (text-classes initiative state)
     :border (border-classes initiative state)
     :border-modifiers (when-not disabled ["hover:bg-white"])
     :background (background-classes initiative state)}]])
