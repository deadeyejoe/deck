(ns authority.db.summary
  (:require [authority.utils :as utils]
            [authority.timer.utils :as timer-utils]))

(defn is-round? [number]
  (fn [event] (-> event :round/number (= number))))

(comment
  (defn app-db [] #_@re-frame.db/app-db))

(defn round-stream [db number]
  (->> db :stream (filter (is-round? number)) reverse))

(defn total-time [events]
  (timer-utils/difference-s
   (-> events first :time)
   (-> events last :time)))

(def offset-pairs #{[:pause :resume] [:pause :end] [:pause :pass]})

(defn pair->offset [[first-event second-event]]
  (let [interval (vector (:action first-event) (:action second-event))]
    (if (offset-pairs interval)
      (timer-utils/difference-s (:time second-event) (:time first-event))
      0)))

(defn
  offset
  "Calculates the offset of all pause-resume pairs"
  [events]
  (->>
   events
   (partition 2 1)
   (map pair->offset)
   (apply +)))

(defn stream-time [events]
  (let [total (total-time events)
        offset (offset events)]
    {:total total
     :offset offset
     :elapsed (- total offset)}))

(defn phase-summary [stream]
  (utils/transform-values
   (group-by :round/phase stream)
   (comp :elapsed stream-time)))

(comment
  (-> (app-db)
      (round-stream 1)
      (phase-summary)))

(defn player-summary [turns]
  (let [number (count turns)
        turn-totals (map (comp :elapsed stream-time) turns)
        total-time (apply + turn-totals)]
    {:turn/count number
     :turn/total total-time
     :turn/average (int (/ total-time number))
     :turn/min (apply min turn-totals)
     :turn/max (apply max turn-totals)}))

(defn players-summary [stream]
  (let [player-map (->> stream
                        (filter :position)
                        (utils/segment (comp (partial = :start) :action))
                        (group-by (comp :position first)))]
    (utils/transform-values player-map player-summary)))

(comment
  (-> (app-db)
      (round-stream 1)
      (players-summary)))

(defn round-summary [db number]
  (let [stream (round-stream db number)
        phases (phase-summary stream)
        players (players-summary stream)]
    {:total-time (total-time stream)
     :elapsed-time ((comp :elapsed stream-time) stream)
     :number-of-rounds (->> players
                            vals
                            (map :turn/count)
                            (apply max))
     :phases phases
     :players players}))

