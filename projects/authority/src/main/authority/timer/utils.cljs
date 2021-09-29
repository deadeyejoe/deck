(ns authority.timer.utils
  (:require [cuerdas.core :as str]
            [authority.timer.db :as db]))

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
    (if (= interval [:resume :pause])
      (difference (:time second-event) (:time first-event))
      0)))

(defn offset [timer]
  (->>
   timer
   :events
   (partition 2 1)
   (map event-offset)
   (apply +)))

(defn elapsed-real [timer now]
  (difference now (:start timer)))

(defn elapsed [timer now]
  (if (db/running? timer)
    (- (elapsed-real timer now)
       (offset timer))
    (let [pause-time (-> timer :events first :time)
          start-time (-> timer :start)]
      (- (difference pause-time start-time)
         (offset timer)))))

(comment
  (def ex {:id :player
           :label :player
           :pauseable true
           :events
           '({:time #inst "2021-09-29T20:47:17.514-00:00", :action :pause}
             {:time #inst "2021-09-29T20:47:16.327-00:00", :action :start})
           :start #inst "2021-09-29T20:47:16.327-00:00"
           :status :paused})
  (elapsed ex (js/Date.))
  (-> ex :events first :time))