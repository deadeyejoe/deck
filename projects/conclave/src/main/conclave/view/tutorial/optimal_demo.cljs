(ns conclave.view.tutorial.optimal-demo
  (:require [conclave.view.icons :as icons]
            [reagent.core :as rc]))

(defn optimal [x y]
  (cond
    (< x y) 0
    (< y x) x
    :else (/ x 2)))

(def standard-number-input {:type :number
                            :class ["appearance-none" "w-12" "p-1" "pl-2" "bg-gray-900" "border" "border-gray-700"]
                            :min 0
                            :step 1
                            :max 5})

(defn number-input [value-atom]
  [:input (merge standard-number-input
                 {:value @value-atom
                  :on-change #(reset! value-atom (-> % .-target .-value))})])

(defn input-container [& content]
  (into [:div (merge-with into
                          {:class ["flex" "justify-center" "items-center" "py-1" "h-1/2"]})]
        content))

(defn col [props & content]
  (into [:div (merge-with into
                          {:class ["flex" "flex-col" "justify-center" "items-center" "h-full"]}
                          props)]
        content))

(def resource-icon
  [:div {:class ["px-2"]} icons/resource])
(def influence-icon
  [:div {:class ["px-2"]} icons/influence])

(defn output [& content]
  (into [:div {:class ["flex" "justify-center" "items-center"]}]
        content))

(defn component []
  (let [resource (rc/atom 3)
        influence (rc/atom 1)]
    (fn []
      [:div {:class ["text-lg" "flex" "items-center" "h-24" "py-1"]}
       [:span {:class ["mr-4"]} "A planet with base values: "]
       [col {}
        [input-container
         resource-icon
         [number-input resource]]
        [input-container
         influence-icon
         [number-input influence]]]
       [:span {:class ["mx-4"]} " has optimal values: "]
       [col {}
        [input-container
         resource-icon
         [output (optimal @resource @influence)]]
        [input-container
         influence-icon
         [output (optimal @influence @resource)]]]])))
