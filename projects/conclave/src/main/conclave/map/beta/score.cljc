(ns conclave.map.beta.score
  (:require [conclave.utils.score :as util-score]
            [taoensso.tufte :as tufte :refer-macros [defnp]]
            [medley.core :as medley]))

(def default-weights
  {:optimal-resources 8
   :optimal-influence 16
   :tech 4
   :supernova -16
  ;;  :nebula -5
  ;;  :asteroid-field -10
   })

(defn weighted-tile [weights {:keys [total] :as _tile}]
  (merge-with *
              (select-keys total (keys weights))
              (select-keys weights (keys total))))

(defn tile-score [weights tile]
  (->> (weighted-tile weights tile)
       (vals)
       (apply +)))

(defn tile-scores
  ([galaxy-map] (tile-scores default-weights galaxy-map))
  ([weights {:keys [tiles] :as _galaxy}]
   (medley/map-vals (partial tile-score weights) tiles)))

(defn tile-shares [{:keys [stakes] :as _galaxy-map} tile-scores]
  (merge-with (fn [hs->stake score]
                (medley/map-vals (fn [stake] (if (= 1 stake) score 0)) hs->stake))
              stakes
              (select-keys tile-scores (keys stakes))))

(defn player-scores [galaxy-map tile-scores]
  (->> (tile-shares galaxy-map tile-scores)
       (vals)
       (apply merge-with +)))

(defn variance-score [player-scores]
  (-> player-scores vals util-score/variation))

(defn compute-variance
  ([galaxy-map] (compute-variance {:weights default-weights} galaxy-map))
  ([{:keys [weights] :as _evaluation-context} galaxy-map]
   (->> galaxy-map
        (tile-scores weights)
        (player-scores galaxy-map)
        (variance-score))))
