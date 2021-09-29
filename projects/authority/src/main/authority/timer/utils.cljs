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

(defn event-offset [[first-event second-event]]
  (let [interval (vector (:action first-event) (:action second-event))]
    (if (= interval [:pause :resume])
      (difference (:time second-event) (:time first-event))
      0)))

(defn offset [timer]
  (->>
   timer
   :events
   (partition-all 2 1)
   (map event-offset)
   (apply +)))

(defn elapsed-real [timer now]
  (difference now (:start timer)))

(defn elapsed [timer now]
  (- (elapsed-real timer now)
     (offset timer)))