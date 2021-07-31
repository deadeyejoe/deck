(ns authority.utils
  (:require [re-frame.core :as rf]))

(defn transform-values [m f]
  (reduce
   (fn [a [k v]] (assoc a k (f v)))
   {}
   m))

(def listen (comp deref rf/subscribe))

(defn player= [player other]
  (= (or (:position player)
         player)
     (or (:position other)
         other)))

(def primary-button
  ["rounded" "px-2" "py-1" "m-2" "bg-blue-800" "text-gray-200" "cursor-pointer"])

(defn timer [id label]
  (let [time (listen [:time/display id])]
    [:div {:class ["flex" "flex-row" "space-x-5" "flex-grow-0" "justify-between" "text-3xl"
                   "border" "rounded-lg" "border-gray-700" "py-2" "px-4"]}
     [:div label]
     [:div {:class ["text-gray-400"]} time]]))



