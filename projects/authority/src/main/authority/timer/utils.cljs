(ns authority.timer.utils
  (:require [cuerdas.core :as str]))

(defn difference [from to]
  (-> (- to from)
      (/ 1000)
      int
      Math/abs))

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