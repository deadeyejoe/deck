(ns conclave.map.beta.constraint
  (:require [conclave.map.core :as core]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as score-util]
            [conclave.map.beta.distance :as distance]))

(defn coordinate-dispersion-data [{:keys [distances] :as galaxy-map} tiles]
  (let [coordinates (map (comp (partial core/tile->coordinate galaxy-map)
                               :key)
                         tiles)
        mutual-distances (distance/mutual-distances distances coordinates)]
    {:coordinates coordinates
     :mutual-distances mutual-distances
     :min-distance (apply min mutual-distances)
     :max-distance (apply max mutual-distances)
     :variation (score-util/variation mutual-distances)}))

(def constraints {:anomalies       {:tiles tile/anomalies
                                    :type :min-distance
                                    :min-distance-allowed 2
                                    :factor -10}
                  :wormhole-ring   {:tiles tile/wormholes
                                    :type :ring
                                    :ring->score {1 4
                                                  2 3
                                                  3 2
                                                  4 1}
                                    :factor 2}
                  :wormhole-alpha  {:tiles tile/wormholes-alpha
                                    :type :proportional
                                    :lower-threshold 2
                                    :upper-threshold 5
                                    :factor 2}
                  :wormhole-beta   {:tiles tile/wormholes-beta
                                    :type :proportional
                                    :lower-threshold 2
                                    :upper-threshold 5
                                    :factor 2}
                  :specialties {:tiles tile/with-specialties
                                :type :min-distance
                                :min-distance-allowed 2
                                ;; :lower-threshold 2
                                ;; :upper-threshold 3
                                :factor -1}
                  :legendaries     {:tiles tile/legendaries
                                    :type :proportional}
                  :supernovae      {:tiles tile/supernovae
                                    :type :proportional}})

(defmulti constraint-score (fn [_galaxy-map _coordinate-data {:keys [type] :as _constraint}] type))

(defmethod constraint-score :default
  [_galaxy-map
   _coordinate-data
   _constraint]
  0)

(defmethod constraint-score :ring
  [galaxy-map
   {:keys [coordinates] :as _coordinate-data}
   {:keys [ring->score] :as _constraint}]
  (let [contributions (->> coordinates
                           (keep (partial core/distance-to-origin galaxy-map))
                           (map ring->score)
                           (filter pos-int?))]
    {:contributions (count contributions)
     :score (apply + contributions)}))

(defmethod constraint-score :min-distance
  [_galaxy-map
   {:keys [mutual-distances] :as _coordinate-data}
   {:keys [min-distance-allowed] :as _constraint}]
  (let [contributions (filter #(< % min-distance-allowed) mutual-distances)]
    {:contributions (count contributions)
     :score (count contributions)}))

(defmethod constraint-score :proportional
  [_galaxy-map
   {:keys [mutual-distances] :as _coordinate-data}
   {:keys [lower-threshold upper-threshold] :or {lower-threshold 0 upper-threshold 10} :as _constraint}]
  (let [contributions (->> mutual-distances
                           (keep (fn [distance]
                                   (when (<= lower-threshold distance upper-threshold)
                                     (- distance (dec lower-threshold)))))
                           (filter pos-int?))]
    {:contributions (count contributions)
     :score (apply + contributions)}))

(defn evaluate-constraint [galaxy-map [constraint-name {:keys [tiles factor] :or {factor 1} :as constraint}]]
  (let [coordinate-data (coordinate-dispersion-data galaxy-map tiles)
        {:keys [contributions score]} (constraint-score galaxy-map coordinate-data constraint)]
    (when (pos-int? contributions)
      (assoc coordinate-data
             :key constraint-name
             :contributions contributions
             :score (* factor score)))))

(defn evaluate-constraints [galaxy-map]
  (keep (partial evaluate-constraint galaxy-map) constraints))

(defn score [constraint-contributions]
  (->> constraint-contributions
       (map :score)
       (apply +)))

(defn compute-score [galaxy-map]
  (->> galaxy-map
       (evaluate-constraints)
       (score)))

(defn summary [contributions]
  {:key :total
   :contributions (apply + (map :volations contributions))
   :score (score contributions)})
