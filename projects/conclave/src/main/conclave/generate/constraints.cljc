(ns conclave.generate.constraints
  (:require [conclave.tiles.set :as tile-set]
            [conclave.utils.score :as stats]
            [medley.core :as medley]))

(defn balance-cardinality [size equidistant-balance tileset]
  (if (= equidistant-balance :balanced)
    {}
    (let [quantity-kw (if (= equidistant-balance :favour-influence)
                        :optimal-influence
                        :optimal-resources)]
      (tap> quantity-kw)
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
     :techs-per-player (per-player (:tech tileset-summary))
     :anomalies-per-player (per-player (:anomaly tileset-summary))
     :wormholes-per-player (per-player (:wormhole tileset-summary))}))

(defn compute-balance-goal [options slice-array tileset]
  (let [tileset-summary (tile-set/collect-totals tileset)]
    (merge (balance-goals slice-array tileset-summary)
           (per-player-goals options slice-array tileset-summary))))

(defn too-many? [quantity-kw max-number {:keys [summary] :as _slice}]
  (< max-number (get quantity-kw summary 0)))

(defn duplicate? [count-quantity distinct-quantity {:keys [summary] :as _slice}]
  (< (count (get distinct-quantity summary))
     (get count-quantity summary 0)))

(def duplicate-anomalies? (partial duplicate? :anomaly :anomalies))
(def duplicate-techs? (partial duplicate? :tech :specialties))
(def duplicate-wormholes? (partial duplicate? :wormhole :wormholes))

(def too-many-anomalies? (partial too-many? :anomaly))
(def too-many-legendaries? (partial too-many? :legendary))
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
                  (-> (calculation-fn slice)
                      (filter identity)
                      (count)))
                player-slices))))

(defn balance-score [{:keys [balance-goal] :as _goals} slices-with-summary]
  (apply + (->> (rest slices-with-summary) ;;first slice is equidistant
                (map :balance)
                (map (comp Math/abs (partial - balance-goal)))
                (map #(Math/pow % 2)))))

(defn variance-score [_goals slices-with-summary]
  (stats/variation (map :score slices-with-summary)))
