(ns conclave.map.summary
  (:require [conclave.map.core :as core]
            [conclave.layout.core :as layout]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [medley.core :as medley]))

(defn collect-nilable [result value]
  (if value
    (conj result value)
    result))

(defn collect [result {:keys [total] :as tile}]
  (-> result
      (update :resources + (:resources total))
      (update :optimal-resources + (:optimal-resources total))
      (update :influence + (:influence total))
      (update :optimal-influence + (:optimal-influence total))
      (update :traits    into (:traits total))
      (update :specialties into (:specialties total))
      (update :wormholes collect-nilable (:wormhole tile))
      (update :legendaries + (:legendary total))))

(defn player-summary [layout galaxy-map player-key]
  (let [slice-coordinates (get-in layout [:slices player-key :coordinates])]
    (-> (->> slice-coordinates
             (map (partial core/coordinate->tile galaxy-map))
             (reduce collect {}))
        (update :traits (comp vec sort))
        (update :specialties (comp vec sort))
        (update :wormholes (comp vec sort set)))))

(defn infer-base-tileset [{:keys [pok] :as layout} included-tiles]
  (if (or pok (some tiles/pok? included-tiles))
    tile-set/pok-standard
    tile-set/base-standard))

(defn bounds [{:keys [type-counts] :as layout} base-tileset]
  (reduce (fn [acc quantity-kw]
            (assoc acc quantity-kw (tile-set/bounds-for-quantity type-counts
                                                                 quantity-kw
                                                                 base-tileset)))
          {}
          tile-set/default-quantity-kws))

(defn layout-summary [{{:keys [red blue] :as type-counts} :type-counts
                       :as layout}
                      base-tileset]
  (merge (bounds layout base-tileset)
         type-counts
         {:total-tiles (+ red blue)}))

(defn add-map-values [layout-summary included-tiles]
  (reduce (fn [summary quantity-kw]
            (assoc-in summary [quantity-kw :value]
                      (tile-set/sum-quantity quantity-kw included-tiles)))
          layout-summary
          tile-set/default-quantity-kws))

(defn map-summary [layout {:keys [tiles] :as _galaxy-map}]
  (let [included-tiles (vals (apply dissoc tiles (layout/static-coordinates layout)))
        base-tileset (infer-base-tileset layout (vals tiles))]
    (merge (add-map-values (layout-summary layout base-tileset) included-tiles)
           {:legendary (count (filter tiles/legendary? included-tiles))
            :alpha (count (filter tiles/alpha-wormhole? included-tiles))
            :beta (count (filter tiles/beta-wormhole? included-tiles))
            :anomaly (count (filter tiles/anomaly? included-tiles))
            :tech (count (filter tiles/has-specialties? included-tiles))
            :frontier (count (filter tiles/frontier? included-tiles))})))
