(ns authority.db.summary
  (:require [authority.utils :as utils]
            [authority.timer.utils :as timer-utils]))

(defn is-round? [number]
  (fn [event] (-> event :round/number (= number))))

(comment
  (defn app-db [] @re-frame.db/app-db))

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
    {:time/total total
     :time/offset offset
     :time/elapsed (- total offset)}))

(defn phase-summary [stream]
  (utils/transform-values
   (group-by :round/phase stream)
   (comp :time/elapsed stream-time)))

(comment
  (-> (app-db)
      (round-stream 1)
      (phase-summary)))

(defn player-summary [turns]
  (let [number (count turns)
        turn-totals (->> turns
                         (remove :pass?)
                         (map :time/elapsed))
        total-time (apply + turn-totals)]
    {:turn/count number
     :turn/total total-time
     :turn/average (int (/ total-time number))
     :turn/min (apply min turn-totals)
     :turn/max (apply max turn-totals)}))

(defn process-turn [turn]
  (merge {:player/position (-> turn first :position)
          :player/name (-> turn first :player)
          :pass? (some (comp (partial = :pass) :action) turn)
          :strategize? (some (comp (partial = :strategize) :action) turn)}
         (stream-time turn)))

(defn player-turns [stream]
  (->> stream
       (filter :position)
       (utils/segment (comp (partial = :start) :action))
       (map process-turn)))

(defn players-summary [turns]
  (let [player-map (group-by :player/position turns)]
    (utils/transform-values player-map player-summary)))

(comment
  (->> (round-stream (app-db) 1)
       (filter :position)
       (utils/segment (comp (partial = :start) :action))
       first
       process-turn)
  (-> (app-db)
      (round-stream 1)
      (players-summary)))

(defn round-summary [db number]
  (let [stream (round-stream db number)
        phases (phase-summary stream)
        player-turns (player-turns stream)
        players (players-summary player-turns)]
    {:total-time (total-time stream)
     :elapsed-time ((comp :time/elapsed stream-time) stream)
     :number-of-rounds (->> players
                            vals
                            (map :turn/count)
                            (apply max))
     :longest-turn (->> player-turns
                        (sort-by (comp - :time/elapsed))
                        first)
     :shortest-turn (->> player-turns
                         (remove :pass?)
                         (sort-by :time/elapsed)
                         first)
     :phases phases
     :players players}))

(comment
  (-> (app-db)
      (round-summary 1)))
