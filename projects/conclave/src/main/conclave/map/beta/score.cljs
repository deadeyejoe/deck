(ns conclave.map.beta.score
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.map.distance :as distance]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as util-score]
            [taoensso.tufte :as tufte :refer-macros (defnp)]
            [medley.core :as medley]))

(defn scale-stakes [hs->stake factor]
  (medley/map-vals (partial * factor) hs->stake))

(defn tech-factor [tile]
  (if (seq (:total/specialty tile)) 1 0))

(defn legendary-factor [tile]
  (if (:legendary tile) 1 0))

(defn tile-share [hs->stake tile]
  (merge {:resource   (scale-stakes hs->stake (:total/resources tile))
          :influence  (scale-stakes hs->stake (:total/influence tile))
          :cultural   (scale-stakes hs->stake (:total/cultural tile))
          :industrial (scale-stakes hs->stake (:total/industrial tile))
          :hazardous  (scale-stakes hs->stake (:total/hazardous tile))}
         (when (seq (:total/specialty tile))
           {:tech hs->stake})
         (when (:legendary tile)
           {:legendary hs->stake})
         (when-let [anomaly-type (:anomaly tile)]
           {anomaly-type hs->stake})))

(defn shares-for-map [{:keys [stakes] :as galaxy-map}]
  (medley/map-kv-vals (fn [coordinate hs->stake]
                        (->> coordinate
                             (core/coordinate->tile galaxy-map)
                             (tile-share hs->stake)))
                      stakes))

(defnp combined-shares [galaxy-map]
  (->> (shares-for-map galaxy-map)
       (vals)
       (apply merge-with (partial merge-with +))))

(def default-weights
  {:resource 8
   :influence 6
   :tech 8
   :cultural 4
   :industrial 2
   :hazardous 4
   :legendary 8
   :gravity-rift 1
   :nebula -8
   :asteroid-field -16
   :supernova -40})

(defn apply-weights
  ([map] (apply-weights map default-weights))
  ([weights map] (merge-with * weights map)))

(defn invert-share-map [share-map]
  (->> share-map
       (map (fn [[share-key hs->share]]
              (medley/map-vals (partial hash-map share-key)
                               hs->share)))
       (apply merge-with merge)))

(defn player-scores
  ([combined-shares] (player-scores combined-shares default-weights))
  ([combined-shares weights]
   (->> combined-shares
        (invert-share-map)
        (medley/map-vals #(->> %
                               (apply-weights weights)
                               (vals)
                               (apply +))))))

(defn variance-score [player-scores]
  (-> player-scores vals util-score/variation))

(defnp compute-variance [galaxy-map]
  (-> galaxy-map
      (combined-shares)
      (player-scores)
      (variance-score)))
