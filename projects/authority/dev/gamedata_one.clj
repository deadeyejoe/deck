(ns dev.gamedata-one
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [java-time :as time]))

(defonce data (-> "dev/cg1.edn"
                  slurp
                  edn/read-string))

(def fixed-stream
  (let [stream (:stream data)
        rounds (butlast stream)
        opening (last stream)]

    (cons opening
          (reverse (apply concat rounds)))))

(defn extract-time [event]
  (-> event
      :time
      (.toInstant)))

(defn distance-in-time [e1 e2]
  (time/time-between (extract-time e1)
                     (extract-time e2)
                     :seconds))

(defn round-event? [{:keys [:state :player]}]
  (and (nil? player)
       (= :game-round state)))

(defn player-event? [{:keys [:state :player]}]
  (and (some? player)
       (= :game-round state)))

(defn segment-duration [es]
  (case (mapv :action es)
    [:start :pause] (apply distance-in-time es)
    [:start :end] (apply distance-in-time es)
    [:pause :resume] 0
    [:pause :end] 0
    [:resume :pause] (apply distance-in-time es)
    [:resume :end] (apply distance-in-time es)))

(defn turn-duration [player-events]
  (->> player-events
       (partition 2 1)
       (map segment-duration)
       (apply +)))

(def player-timings
  (->> fixed-stream
       (filter player-event?)
       (partition-by (juxt :player :round/number))
       (map (fn [[e & _ :as events]]
              (merge (select-keys e [:round/number :player :time])
                     {:duration (turn-duration events)})))))

(def phase-timings
  (->> fixed-stream
       (filter round-event?)
       (partition-by :round/phase)
       (map (fn [events]
              (let [first (first events)
                    last (last events)]
                (merge (select-keys first [:round/phase :round/number :time])
                       {:duration (distance-in-time first last)}))))))

(def round-timings
  (->> phase-timings
       (partition-by :round/number)
       (map (fn [events]
              (let [first (first events)
                    last (last events)]
                (merge (select-keys first [:round/number :time])
                       {:duration (distance-in-time first last)}))))))

(defn timings->csv [data]
  (let [cols (-> data first keys)
        extract-cols (apply juxt cols)
        row-fn (comp (partial str/join ",")
                     extract-cols)]
    (->> data
         (map row-fn)
         (into [(str/join "," cols)])
         (str/join "\n"))))



(comment
  (spit "rounds.csv" (timings->csv round-timings))
  (spit "phases.csv" (timings->csv phase-timings))
  (spit "players.csv" (timings->csv player-timings))

  (-> round-timings first keys)
  (->> fixed-stream
       (filter player-event?)
       (partition 2 1)
       (filter (fn [es] (= [:resume :pause] (mapv :action es)))))
  (let [number 1]
    (mod (filter (fn [e] (= number (:round/number e))) player-timings) 8)))
