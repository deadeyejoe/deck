(ns conclave.generate.score
  (:require [conclave.tiles.set :as tile-set]
            [conclave.utils.score :as stats]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]
            [conclave.player :as player]))

(s/def ::score-type #{:balance :constraint :variance})
(s/def ::status #{:free :locked :minimized})
(s/def ::schema (s/map-of ::score-type ::status))

(defn balance-cardinality [size equidistant-balance tileset]
  (if (= equidistant-balance :balanced)
    {}
    (let [quantity-kw (if (= equidistant-balance :favour-influence)
                        :optimal-influence
                        :optimal-resources)]
      (->> tileset
           (map #(get-in % [:total quantity-kw]))
           (sort >)
           (take size)
           (frequencies)))))

(defn equidistant-goals [{:keys [planets-in-equidistants equidistant-balance] :as _options}
                         [{:keys [size] :as _equidistant} & _player-slices :as _slice-array]
                         tileset]
  {:planets-in-equidistants planets-in-equidistants
   :equidistant-balance equidistant-balance
   :balance-cardinality (balance-cardinality size equidistant-balance tileset)})

(defn balance-goals [[_equidistant & player-slices :as slice-array] tileset-summary]
  (let [total-tiles (apply + (map :size slice-array))
        player-tile-count (apply + (map :size player-slices))
        player-count (count player-slices)
        per-slice (fn [n]
                    (/ (* n player-tile-count)
                       total-tiles player-count))
        res-per-slice (per-slice (:optimal-resources tileset-summary))
        inf-per-slice (per-slice (:optimal-influence tileset-summary))]
    {:balance-goal (- res-per-slice inf-per-slice)
     :resources-per-slice res-per-slice
     :influence-per-slice inf-per-slice}))

(defn per-player-goals [{:keys [legendaries-in-equidistants] :as _options}
                        [_equidistant & player-slices :as _slice-array] tileset-summary]
  (let [player-count (count player-slices)
        per-player (fn [n] (Math/floor (/ n player-count)))]
    {:legendaries-per-player (if legendaries-in-equidistants 0 1)
     :techs-per-player (max 1 (per-player (:tech tileset-summary)))
     :anomalies-per-player (max 1 (per-player (:anomaly tileset-summary)))
     :wormholes-per-player (max 1 (per-player (:wormhole tileset-summary)))}))

(defn compute-balance-goal [options slice-array tileset]
  (let [tileset-summary (tile-set/collect-totals tileset)]
    (merge (equidistant-goals options slice-array tileset)
           (balance-goals slice-array tileset-summary)
           (per-player-goals options slice-array tileset-summary))))

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

(defn equidistant-constraint-score [{:keys [planets-in-equidistants]}
                                    {{:keys [wormholes has-planets]} :summary
                                     :keys [size] :as _equidistant-slice}]
  (+  (if (< (count wormholes) 2) 1 0) ;;one of each wormhole
      (if planets-in-equidistants
        (- size has-planets) ;; the fewer planet tiles the higher the score
        0)))

(defn constraint-calculation-fn [{:keys [anomalies-per-player
                                         legendaries-per-player
                                         techs-per-player
                                         wormholes-per-player] :as _goals}]
  (juxt duplicate-anomalies?
        duplicate-techs?
        duplicate-wormholes?
        (partial too-many-anomalies? anomalies-per-player)
        (partial too-many-legendaries? legendaries-per-player)
        (partial too-many-techs? techs-per-player)
        (partial too-many-wormholes? wormholes-per-player)))

(defn constraint-score [goals [equidistant & player-slices :as _slices-with-summary]]
  (let [calculation-fn (constraint-calculation-fn goals)]
    (apply +
           (equidistant-constraint-score goals equidistant)
           (map (fn [slice]
                  (->> (calculation-fn slice)
                       (apply +)))
                player-slices))))

(defn balance-score [{:keys [balance-goal] :as _goals} slices-with-summary]
  (apply + (->> (rest slices-with-summary) ;;first slice is equidistant
                (map :balance)
                (map (comp #(Math/abs %) (partial - balance-goal)))
                (map #(Math/pow % 2)))))

(defn variance-score [_goals slices-with-summary]
  (stats/variation (map :score (drop 1 slices-with-summary))))

(defn compute-score-fn [score-type]
  (case score-type
    :balance balance-score
    :constraint constraint-score
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
      :variance variance-score-improved?)))

(defn improved-score? [score-schema score-before score-after]
  (every? (fn [[score-type status]]
            ((improved-score-fn score-type status) score-before score-after))
          score-schema))
