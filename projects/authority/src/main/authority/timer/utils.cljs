(ns authority.timer.utils
  (:require [cuerdas.core :as str]))

(defn elapsed [from to]
  (-> (- to from)
      int
      Math/abs))

(defn ms->s [ms] (int (/ ms 1000)))

(defn decompose [elapsed-ms]
  (let [seconds (ms->s elapsed-ms)]
    [(quot seconds 3600)
     (mod (quot seconds 60) 60)
     (mod seconds 60)]))

(defn ms->display [ms]
  (->> ms
       decompose
       (map #(str/pad (str %) {:length 2 :padding "0"}))
       (interpose ":")
       (apply str)))

(defn event-offset [[first-event second-event]]
  (let [interval (vector (:action first-event) (:action second-event))]
    (if (= interval [:pause :resume])
      (elapsed (:time second-event) (:time first-event))
      0)))

(defn offset [timer]
  (->>
   timer
   :events
   (partition-all 2 1)
   (map event-offset)
   (apply +)))

(defn elapsed-total [timer now]
  (elapsed now (:start timer)))

(defn elapsed [timer now]
  (- (elapsed-total timer now)
     (offset timer)))