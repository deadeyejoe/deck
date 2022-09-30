(ns conclave.generate.balance
  (:require [medley.core :as medley]))

(defn range-score
  "Returns a positive value if the value is inside the range, and a negative value if outside of it."
  [[lower upper] value]
  (min (- upper value)
       (- value lower)))

(defn extreme-resource-score [bounds-for-available {:keys [optimal-resources] :as _actual-quantities}]
  (let [[lower-resource _upper-resource :as _extreme-range] (get-in bounds-for-available [:optimal-resources :extreme-range])]
    (- optimal-resources lower-resource)))

(defn favour-resource-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [favour-range (get-in bounds-for-available [:optimal-resources :favour-range])
        inf-midpoint (get-in bounds-for-available [:optimal-influence :midpoint])]
    [(range-score favour-range optimal-resources)
     (- inf-midpoint optimal-influence)]))

(defn balanced-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [res-balance-range (get-in bounds-for-available [:optimal-resources :balance-range])
        inf-balance-range (get-in bounds-for-available [:optimal-influence :balance-range])]
    [(range-score res-balance-range optimal-resources)
     (range-score inf-balance-range optimal-influence)]))

(defn favour-influence-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [favour-range (get-in bounds-for-available [:optimal-influence :favour-range])
        res-midpoint (get-in bounds-for-available [:optimal-resources :midpoint])]
    [(range-score favour-range optimal-influence)
     (- res-midpoint optimal-resources)]))

(defn extreme-influence-score [bounds-for-available {:keys [optimal-influence] :as _actual-quantities}]
  (let [[lower-influence _upper-influence :as _extreme-range] (get-in bounds-for-available [:optimal-influence :extreme-range])]
    (- optimal-influence lower-influence)))

(defn calculate-score [option bounds-for-available actual-quantities]
  ((case option
     :extreme-resource extreme-resource-score
     :favour-resource favour-resource-score
     :balanced balanced-score
     :favour-influence favour-influence-score
     :extreme-influence extreme-influence-score
     balanced-score)
   bounds-for-available actual-quantities))

(defn balanced-score-halt? [[res-range-score inf-range-score]]
  (and (not (neg? res-range-score))
       (not (neg? inf-range-score))))
(defn favour-score-halt? [[range-score unfavoured-diff]]
  (and (not (neg? range-score))
       (not (neg? unfavoured-diff))))
(def extreme-score-halt? (complement neg?))

(defn halt-sampling? [option score]
  ((case option
     :extreme-resource extreme-score-halt?
     :favour-resource favour-score-halt?
     :balanced balanced-score-halt?
     :favour-influence favour-score-halt?
     :extreme-influence extreme-score-halt?
     balanced-score-halt?) score))

(defn slice-stats [[equidistant & players :as _slice-array]]
  (let [player-slice-size (apply max (map :size players))
        relative-eq-size (/ (:size equidistant) player-slice-size)]
    {:player-count (count players)
     :player-slice-size player-slice-size
     :relative-eq-size relative-eq-size
     :total-relative-slices (+ (count players) relative-eq-size)}))

(defn res-inf-per-relative-slice [total-relative-slices res-inf-total]
  (medley/map-vals #(/ % total-relative-slices) res-inf-total))

(def weight-favoured 1.5)
(def weight-unfavoured (/ 2 3))

(defn res-inf-for-equidistant [{:keys [equidistant-balance] :as _options}
                               relative-equidistant-size
                               {:keys [optimal-resources optimal-influence] :as res-inf-per-relative-slice}]

  (medley/map-vals (partial * relative-equidistant-size)
                   (case equidistant-balance
                     :favour-resource {:optimal-resources (* optimal-resources weight-favoured)
                                       :optimal-influence (* optimal-influence weight-unfavoured)}
                     :favour-influence {:optimal-resources (* optimal-resources weight-unfavoured)
                                        :optimal-influence (* optimal-influence weight-favoured)}

                     res-inf-per-relative-slice)))

(defn res-inf-per-player [number-of-players tileset-totals equidistant-total]
  (medley/map-vals #(/ % number-of-players) (merge-with - tileset-totals equidistant-total)))

(defn player-goals [{:keys [legendaries-in-equidistants] :as _options}
                    player-count
                    {resource-per-player :optimal-resources
                     influence-per-player :optimal-influence :as _res-inf-per-player}
                    tileset-summary]
  (let [per-player (fn [n] (Math/floor (/ n player-count)))]
    {:balance (- resource-per-player influence-per-player)
     :resource-per-player resource-per-player
     :influence-per-player influence-per-player
     :legendaries-per-player (if legendaries-in-equidistants 0 1)
     :techs-per-player (max 2 (per-player (:tech tileset-summary)))
     :anomalies-per-player (max 1 (per-player (:anomaly tileset-summary)))
     :wormholes-per-player (max 1 (per-player (:wormhole tileset-summary)))}))

(defn slice-balance-goals [{:keys [equidistant-balance] :as options}
                           slice-array
                           tileset-summary]
  (let [{:keys [player-count
                relative-eq-size
                total-relative-slices]
         :as _slice-stats} (slice-stats slice-array)
        res-inf-total (select-keys tileset-summary [:optimal-resources :optimal-influence])
        res-inf-per-relative-slice (res-inf-per-relative-slice total-relative-slices res-inf-total)
        res-inf-for-equidistant (res-inf-for-equidistant options relative-eq-size res-inf-per-relative-slice)
        res-inf-per-player (res-inf-per-player player-count res-inf-total res-inf-for-equidistant)
        player-goals (player-goals options player-count res-inf-per-player tileset-summary)]
    {:slice-stats slice-stats
     :equidistant-goals res-inf-for-equidistant
     :player-goals player-goals}))

(defn threshold-score [target-map candidate-map]
  (-> (merge-with - (select-keys candidate-map (keys target-map)) target-map)
      vals
      vec))

(defn threshold-passed? [threshold-score]
  (not-any? neg? threshold-score))
