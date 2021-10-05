(ns authority.utils
  (:require [re-frame.core :as rf]))

(defn transform-values [m f]
  (reduce
   (fn [a [k v]] (assoc a k (f v)))
   {}
   m))

(defn segment
  "Splits coll before elements where pred is true.
   Returns a vector of vectors."
  [pred coll]
  (loop [[first & rest :as all] coll intermediate [] final []]
    (if first
      (if (pred first)
        (if (empty? intermediate)
          (recur rest (conj intermediate first) final)
          (recur all [] (conj final intermediate)))
        (recur rest (conj intermediate first) final))
      final)))

(def listen (comp deref rf/subscribe))

(defn player= [player other]
  (= (or (:position player)
         player)
     (or (:position other)
         other)))

(def primary-button
  ["rounded" "px-2" "py-1" "m-2" "bg-blue-800" "text-gray-200" "cursor-pointer"])

(defn timer [id label]
  (let [time (listen [:timer/display id])]
    [:div {:class ["flex" "flex-row" "space-x-5" "flex-grow-0" "justify-between" "text-3xl"
                   "border" "rounded-lg" "border-gray-700" "py-2" "px-4"]}
     [:div label]
     [:div {:class ["text-gray-400"]} time]]))



