(ns conclave.balance.score 
  (:require [conclave.aggregate.tile-list :as tile-list]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(defn apply-weights [weights scores]
  (medley/map-kv-vals (fn [k w] (* w (get scores k 0))) weights))

(defn ->weighted-score [weights scores]
  (apply + (vals (apply-weights weights scores))))

(comment
  (apply-weights {:a 1 :b 2} {:b 1 :c 3})
  (->weighted-score {:a 1 :b 2} {:b 1 :c 3}))

(def raw-tile-score-kws [:optimal-resources :optimal-influence :legendary :tech])
(def derived-tile-score-kws [:optimal-resources :optimal-influence :legendary :tech :total :balance])

(defn tiles->scores [tiles]
  (let [{:keys [optimal-resources optimal-influence] :as summary} (tile-list/collect-totals raw-tile-score-kws tiles)]
    (assoc summary
           :total (+ optimal-resources optimal-influence)
           :balance (- optimal-resources optimal-influence))))
