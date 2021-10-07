(ns authority.utils
  (:require [re-frame.core :as rf]
            [clojure.string :as str]))

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

(def corners [:top-left :top-right :bottom-right :bottom-left])

(defn corner-% [location percentage]
  (let [break-1 percentage
        break-2 (- 100 percentage)]
    (case location
      :top-left  [[0 break-1] [break-1 0]]
      :top-right [[break-2 0] [100 break-1]]
      :bottom-right [[100 break-2] [break-2 100]]
      :bottom-left [[break-1 100] [0 break-2]])))

(defn polygon-points [corner-fn location->percentage]
  (->> corners
       (map (fn [location] (corner-fn location (location->percentage location))))
       (apply concat)))

(defn polygon
  ([all] (polygon all all all all))
  ([tl-br tr-bl] (polygon tl-br tr-bl tl-br tr-bl))
  ([top-left top-right bottom-right bottom-left]
   (let [location->percentage {:top-left top-left
                               :top-right top-right
                               :bottom-right bottom-right
                               :bottom-left bottom-left}
         n->percent (fn [n] (str n "%"))]
     (str "polygon("
          (->> location->percentage
               (polygon-points corner-%)
               (map (comp (partial str/join " ")
                          (partial map n->percent)))
               (str/join ", "))
          ")"))))

(defn corner-px [location px]
  (let [break-1 (str px "px")
        break-2 (str "calc(100% - " px "px)")]
    (case location
      :top-left  [["0" break-1] [break-1 "0"]]
      :top-right [[break-2 "0"] ["100%" break-1]]
      :bottom-right [["100%" break-2] [break-2 "100%"]]
      :bottom-left [[break-1 "100%"] ["0" break-2]])))

(defn polygon-px
  ([all] (polygon-px all all all all))
  ([tl-br tr-bl] (polygon-px tl-br tr-bl tl-br tr-bl))
  ([top-left top-right bottom-right bottom-left]
   (let [location->px {:top-left top-left
                       :top-right top-right
                       :bottom-right bottom-right
                       :bottom-left bottom-left}]
     (str "polygon("
          (->> location->px
               (polygon-points corner-px)
               (map (comp (partial str/join " ")))
               (str/join ", "))
          ")"))))

(comment
  (polygon 10 10 10 10)
  (polygon 30 10 30 10)
  (poly-px 5 0 0 0))



