(ns authority.timer.utils
  (:require [cuerdas.core :as str]))

(defn difference-ms [from to]
  (-> (- to from)
      int
      Math/abs))

(defn ms->seconds [seconds]
  (int (/ seconds 1000)))

(def difference-s (comp ms->seconds difference-ms))

(defn decompose [seconds]
  [(quot seconds 3600)
   (mod (quot seconds 60) 60)
   (mod seconds 60)])

(defn seconds->display [seconds]
  (->> seconds
       decompose
       (map #(str/pad (str %) {:length 2 :padding "0"}))
       (interpose ":")
       (apply str)))