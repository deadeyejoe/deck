(ns conclave.map.score
  (:require [conclave.map.core :as core]
            [conclave.map.distance :as distance]
            [conclave.tiles.score :as tile-score]
            [conclave.utils :refer [transform-values]]
            [conclave.score :as util-score]
            [taoensso.tufte :as tufte :refer-macros (defnp)]
            [clojure.spec.alpha :as s])
  (:require-macros [clojure.spec.alpha]))

(s/def ::coordinate vector?)
(s/def ::galaxy-map map?)
(s/def ::distances (s/map-of ::coordinate
                             (s/map-of ::coordinate number?)))
(s/def ::stakes (s/map-of ::coordinate
                          (s/map-of ::coordinate number?)))

(s/def ::shares (s/map-of keyword?
                          (s/map-of ::coordinate number?)))

(s/def ::context (s/keys :req-un [::galaxy-map ::distances ::stakes]))

(s/def ::stake-options #{:discrete :continuous})
(s/def ::movement-score #{:static :dynamic})
(s/def ::follow-wormholes boolean?)
(s/def ::evaluation-options (s/keys :opt-un [::stake ::follow-wormholes ::movement-score]))

(defn restrict-to [hs->coordinate->distance target]
  (transform-values hs->coordinate->distance #(get % target)))

(defn inverse-square [n]
  (/ 1.0 (Math/pow n 2)))

(defn continuous-stakes [hs->distance]
  (transform-values hs->distance inverse-square))

(defn closest-hs [hs->distance]
  (let [[min-distance closest-entries] (->> hs->distance
                                            (group-by val)
                                            (apply min-key key))]
    [min-distance (map key closest-entries)]))

(defnp discrete-stakes [hs->distance]
  (let [[min-distance closest-hss] (closest-hs hs->distance)]
    (if (< min-distance 3)
      (select-keys hs->distance closest-hss)
      (continuous-stakes hs->distance))))

(defnp normalize-stakes [hs->stake]
  (let [total (->> hs->stake vals (apply +))]
    (transform-values hs->stake #(/ % total))))

(defnp compute-stake [hs->coordinate->distance coordinate opts]
  (let [stake-fn (case (:stake opts)
                   :discrete   discrete-stakes
                   continuous-stakes)]
    (-> hs->coordinate->distance
        (restrict-to coordinate)
        (stake-fn)
        (normalize-stakes))))

(defn stakeable [galaxy-map]
  (core/select-by-tile galaxy-map tile-score/stake?))

(defn compute-stakes [galaxy-map opts]
  (let [distances (distance/hs-distances galaxy-map opts)
        stakeable (stakeable galaxy-map)]
    (zipmap stakeable
            (map #(compute-stake distances % opts) stakeable))))

(defn multiply-key [key tile]
  (partial * (key tile)))

(defn tile-share [hs->stake tile]
  {:share/resource (transform-values hs->stake (multiply-key :total/resources tile))
   :share/influence (transform-values hs->stake (multiply-key :total/influence tile))
   :share/tech (if (seq (:total/specialty tile)) hs->stake {})
   :share/cultural (transform-values hs->stake (multiply-key :total/cultural tile))
   :share/industrial (transform-values hs->stake (multiply-key :total/industrial tile))
   :share/hazardous (transform-values hs->stake (multiply-key :total/hazardous tile))
   :share/legendary (if (:legendary tile) hs->stake {})})

(defn compute-share [galaxy-map hs->coordinate->distance coordinate opts]
  (let [tile (core/coordinate->tile galaxy-map coordinate)]
    (-> (compute-stake hs->coordinate->distance coordinate opts)
        (tile-share tile))))

(defn share-map [galaxy-map opts]
  (let [distances (distance/hs-distances galaxy-map opts)
        stakeable (stakeable galaxy-map)]
    (zipmap stakeable
            (map #(compute-share galaxy-map distances % opts) stakeable))))

(defnp combined-shares [galaxy-map opts]
  (let [distances (distance/hs-distances galaxy-map opts)
        stakeable (stakeable galaxy-map)]
    (->> stakeable
         (map #(compute-share galaxy-map distances % opts))
         (apply merge-with (partial merge-with +)))))

(defn variances [combined-share-map]
  (transform-values combined-share-map (fn [m] (-> m
                                                   vals
                                                   util-score/variation))))

(def default-weights
  {:share/resource 8
   :share/influence 6
   :share/tech 4
   :share/cultural 2
   :share/industrial 2
   :share/hazardous 2
   :share/legendary 1})

(defn apply-weights
  ([variances] (apply-weights variances default-weights))
  ([variances weights] (merge-with * weights variances)))

