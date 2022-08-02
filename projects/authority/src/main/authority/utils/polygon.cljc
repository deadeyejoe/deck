(ns authority.utils.polygon
  (:require [superstring.core :as str]))

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
