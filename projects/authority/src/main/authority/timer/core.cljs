(ns authority.timer.core
  (:require [authority.timer.utils :as utils]))

(defn build [{:keys [id label pauseable] :or {pauseable true}}]
  {:id id
   :label (or label id)
   :pauseable pauseable
   :events '()})

(defn running? [timer] (= (:status timer) :running))
(defn paused? [timer] (= (:status timer) :paused))

(defn push [timer now action]
  (update timer :events conj {:time now
                              :action action}))

(defn start [timer now]
  (if (:status timer)
    timer
    (-> timer
        (assoc :start-time now
               :status :running)
        (push now :start))))

(defn pause [timer now]
  (if (and (running? timer) (:pauseable timer))
    (-> timer
        (assoc :status :paused
               :pause-time now)
        (push now :pause))
    timer))

(defn resume [timer now]
  (if (paused? timer)
    (-> timer
        (assoc :status :running)
        (dissoc :pause-time)
        (push now :resume))
    timer))

(defn time-real [timer now]
  (utils/difference now (:start-time timer)))

(defn time-total
  "This name isn't totally correct..."
  [timer now]
  (if (running? timer)
    (time-real timer now)
    (utils/difference (:pause-time timer) (:start-time timer))))

(defn pair->offset [[first-event second-event]]
  (let [interval (vector (:action first-event) (:action second-event))]
    (if (= interval [:resume :pause])
      (utils/difference (:time second-event) (:time first-event))
      0)))

(defn
  offset
  "Calculates the offset of all pause-resume pairs"
  [timer]
  (->>
   timer
   :events
   (partition 2 1)
   (map pair->offset)
   (apply +)))

(comment
  (def ex {:id :player
           :label :player
           :pauseable true
           :events
           '({:time #inst "2021-09-29T20:47:17.514-00:00", :action :pause}
             {:time #inst "2021-09-29T20:47:16.327-00:00", :action :start})
           :start-time #inst "2021-09-29T20:47:16.327-00:00"
           :pause-time #inst "2021-09-29T20:47:17.514-00:00"
           :status :paused})
  (offset ex)
  (time-real ex (js/Date.))
  (time-total ex (js/Date.)))