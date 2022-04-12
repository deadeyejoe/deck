(ns conclave.map.beta.score
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as util-score]
            [taoensso.tufte :as tufte :refer-macros (defnp)]
            [medley.core :as medley]))

(def default-weights
  {:resources 8
   :influence 6
   :tech 8
   :cultural 2
   :industrial 1
   :hazardous 2
   :legendary 8
   :gravity-rift 1
   :nebula -5
   :asteroid-field -10
   :supernova -30})

(defn weighted-tile
  ([tile] (weighted-tile default-weights tile))
  ([weights {:keys [total] :as tile}]
   (merge-with *
               (select-keys total (keys weights))
               (select-keys weights (keys total)))))

(defn tile-score
  ([tile] (tile-score default-weights tile))
  ([weights tile]
   (->> (weighted-tile weights tile)
        (vals)
        (apply +))))

(defn tile-scores [{:keys [tiles] :as galaxy}]
  (medley/map-vals (partial tile-score) tiles))

(defn tile-shares [{:keys [stakes] :as galaxy-map} tile-scores]
  (merge-with (fn [hs->stake score]
                (medley/map-vals (partial * score) hs->stake))
              stakes
              (select-keys tile-scores (keys stakes))))

(defn tile-shares-2 [{:keys [stakes] :as galaxy-map} tile-scores]
  (medley/map-kv-vals (fn [coordinate hs->stake]
                        (let [score (tile-scores coordinate)]
                          (medley/map-vals (partial * score) hs->stake)))
                      stakes))

(defn player-scores [{:keys [stakes] :as galaxy-map} tile-scores]
  (->> (tile-shares galaxy-map tile-scores)
       (vals)
       (apply merge-with +)))

(defn invert-share-map [share-map]
  (->> share-map
       (map (fn [[share-key hs->share]]
              (medley/map-vals (partial hash-map share-key)
                               hs->share)))
       (apply merge-with merge)))

(defn variance-score [player-scores]
  (-> player-scores vals util-score/variation))

(defnp compute-variance [galaxy-map]
  (->> galaxy-map
       (tile-scores)
       (player-scores galaxy-map)
       (variance-score)))
