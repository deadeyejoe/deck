(ns conclave.ring.core
  (:require [clojure.math.combinatorics :as combo]
            [conclave.map.core :as core]
            [conclave.map.score :as score]
            [conclave.map.layout :as layout]
            [conclave.tiles.score :as tile.score]
            [conclave.utils :refer [transform-values]]
[conclave.utils.score :as util.score]
[conclave.utils.random :as random]
[conclave.utils.hex :as hex]
            [taoensso.tufte :as tufte :refer-macros (defnp)]))

(defn tiles->share [tiles]
  (->> (map tile.score/share tiles)
       (apply merge-with +)))

(defn ring-sets [{:keys [layout] :as galaxy-map}]
  (mapv set (layout/rings layout)))

(defn tile-sets [{:keys [layout] :as galaxy-map} tiles]
  (let [ring-sizes (->> layout
                        (layout/rings)
                        (map count))]
    (loop [remaining-tiles tiles
           [size & rest] ring-sizes
           result []]
      (if size
        (recur
         (drop size remaining-tiles)
         rest
         (conj result (->> remaining-tiles (take size) (set))))
        result))))

(defn pair-with-ring-number [rings]
  (map-indexed (fn [idx ring]
                 (map #(vector idx %) ring))
               rings))

(defn intra-ring-swaps [rings]
  (->> (combo/combinations rings 2)
       (mapcat (partial apply combo/cartesian-product))))

(defn inter-ring-swaps [rings]
  (mapcat #(combo/combinations % 2) rings))

(defn perform-swap [ring-sets [[r1 c1] [r2 c2]]]
  (-> ring-sets
      (update r1 (fn [ring] (-> ring
                                (disj c1)
                                (conj c2))))
      (update r2 (fn [ring] (-> ring
                                (disj c2)
                                (conj c1))))))

(defn area-share [galaxy-map coordinates]
  (->> coordinates
       (map (partial core/coordinate->tile galaxy-map))
       (tiles->share)))

(defn balance-factors [rings]
  (let [counts (map count rings)
        biggest (apply max counts)]
    (map #(/ biggest %) counts)))

(defn balance [rings ring-shares]
  (let [factors (balance-factors rings)]
    (map (fn [n shares] (transform-values shares (partial * n)))
         factors
         ring-shares)))

(defn ring-variance [ring-shares]
  (let [init (transform-values (first ring-shares) (constantly []))]
    (-> (apply merge-with conj init ring-shares)
        (transform-values util.score/variation))))

(comment
  (def intra-swaps (-> (ring-sets core/sample-map)
                       (pair-with-ring-number)
                       (intra-ring-swaps)))
  (-> (ring-sets core/sample-map)
      (perform-swap (first intra-swaps)))
  (-> (ring-sets core/sample-map)
      (intra-ring-swaps)
      count)
  (-> (ring-sets core/sample-map)
      (inter-ring-swaps)
      count)
  (->> (ring-sets core/sample-map)
       (apply concat)
       (#(combo/combinations % 2))
       count)

  (balance (layout/rings (:layout core/sample-map))
           (->> (layout/rings (:layout core/sample-map))
                (map (partial area-share core/sample-map))))
  (->> (layout/rings (:layout core/sample-map))
       (balance-factors))
  (let [rings (layout/rings layout/eight-player)
        shares (map (partial area-share core/sample-map) rings)
        balanced-shares (balance rings shares)]
    (-> balanced-shares
        (ring-variance))))
