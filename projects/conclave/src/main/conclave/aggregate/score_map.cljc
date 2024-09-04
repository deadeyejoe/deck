(ns conclave.aggregate.score-map)



(def tile-score-schema
  {:planets :number
   :has-planets :zero-one 
   :resources :number
   :influence :number
   :optimal-resources :number
   :optimal-influence :number
   :traits :vector
   :cultural :number
   :industrial :number
   :hazardous :number
   :specialties :collection
   :tech :number
   :legendary :zero-one
   :anomalies :set
   :anomaly :zero-one
   :wormholes :set
   :wormhole :zero-one})

(defn apply-weights [weights score-map]
  (merge-with *
              (select-keys score-map (keys weights))
              weights))

(defn ->weighted-score [weights score-map]
  (->> (apply-weights weights score-map)
       (vals)
       (apply +)))
