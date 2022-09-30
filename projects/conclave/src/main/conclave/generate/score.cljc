(ns conclave.generate.score
  (:require [conclave.tiles.set :as tile-set]
            [conclave.utils.score :as stats]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]
            [conclave.generate.balance :as balance]))

(s/def ::score-type #{:balance :constraint :variance})
(s/def ::status #{:free :locked :minimized})
(s/def ::schema (s/map-of ::score-type ::status))

(defn too-many? [quantity-kw max-number {:keys [summary] :as _slice}]
  (max 0
       (- (get summary quantity-kw 0) max-number)))

(defn duplicate? [count-quantity distinct-quantity {:keys [summary] :as _slice}]
  (- (get summary count-quantity 0)
     (count (get summary distinct-quantity))))

(def duplicate-anomalies? (partial duplicate? :anomaly :anomalies))
(def duplicate-techs? (partial duplicate? :tech :specialties))
(def duplicate-wormholes? (partial duplicate? :wormhole :wormholes))

(def too-many-anomalies? (partial too-many? :anomaly))
(def too-many-legendaries? (comp #(* 2 %)
                                 (partial too-many? :legendary)))
(def too-many-techs? (partial too-many? :tech))
(def too-many-wormholes? (partial too-many? :wormhole))

(defn equidistant-constraint-score [_balance-goals {{:keys [wormholes]} :summary :as _equidistant-slice}]
  (if (< (count wormholes) 2) 1 0))

(defn constraint-calculation-fn [{:keys [anomalies-per-player
                                         legendaries-per-player
                                         techs-per-player
                                         wormholes-per-player] :as _player-goals}]
  (juxt duplicate-anomalies?
        duplicate-techs?
        duplicate-wormholes?
        (partial too-many-anomalies? anomalies-per-player)
        (partial too-many-legendaries? legendaries-per-player)
        (partial too-many-techs? techs-per-player)
        (partial too-many-wormholes? wormholes-per-player)))

(defn constraint-score [{:keys [player-goals] :as balance-goals} 
                        [equidistant & player-slices :as _slices-with-summary]]
  (let [calculation-fn (constraint-calculation-fn player-goals)]
    (apply +
           (equidistant-constraint-score balance-goals equidistant)
           (map (fn [slice]
                  (->> (calculation-fn slice)
                       (apply +)))
                player-slices))))

(defn equidistant-score [{:keys [equidistant-goals] :as _balance-goals}
                         [equidistant & _player-slices :as _slices-with-summary]]
  (if (balance/threshold-passed? (balance/threshold-score equidistant-goals
                                                          (:summary equidistant)))
    1 0))

(defn balance-score [balance-goals slices-with-summary]
  (apply + (->> (rest slices-with-summary) ;;first slice is equidistant
                (map :balance)
                (map (comp #(Math/abs %) (partial - (get-in balance-goals [:player-goals :balance]))))
                (map #(Math/pow % 2)))))

(defn variance-score [_goals slices-with-summary]
  (stats/variation (map :score (drop 1 slices-with-summary))))

(defn compute-score-fn [score-type]
  (case score-type
    :balance balance-score
    :constraint constraint-score
    :equidistant equidistant-score
    :variance variance-score))

(defn compute-scores [score-schema goals slices-with-summary]
  (medley/map-kv-vals (fn [score-type _status]
                        ((compute-score-fn score-type) goals slices-with-summary))
                      score-schema))


(defn towards-bounds [low high before after]
  (or
   (< before after low)
   (or (<= low before high)
       (<= low after high))
   (< high after before)))

(defn balance-score-improved? [{balance-before :balance} {balance-after :balance}]
  (towards-bounds 4 10 balance-before balance-after))

(defn constraint-score-improved? [{constraint-before :constraint} {constraint-after :constraint}]
  (< constraint-after constraint-before))

(defn variance-score-improved? [{variance-before :variance} {variance-after :variance}]
  (<= variance-after variance-before))

(defn score-locked? [score-type score-before score-after]
  (= (get score-before score-type) (get score-after score-type)))

(defn improved-score-fn [score-type status]
  (if (= :locked status)
    (partial score-locked? score-type)
    (case score-type
      :balance  balance-score-improved?
      :constraint constraint-score-improved?
      :equidistant (partial score-locked? :equidistant)
      :variance variance-score-improved?)))

(defn improved-score? [score-schema score-before score-after]
  (every? (fn [[score-type status]]
            ((improved-score-fn score-type status) score-before score-after))
          score-schema))
