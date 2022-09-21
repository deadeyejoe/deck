(ns conclave.map.summary
  (:require [conclave.map.core :as core]
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

(defn bounds-for-quantity [n ordered-list]
  (let [total (count ordered-list)]
    {:lower (apply + (drop (- total n) ordered-list))
     :upper (apply + (take n ordered-list))}))

(defn quantities-for-map [included-tiles]
  (reduce (fn [acc quantity-kw]
            (assoc-in acc [quantity-kw :value]
                      (tile-set/sum-quantity quantity-kw included-tiles)))
          {}
          [:planets :resources :optimal-resources :influence :optimal-influence])
  #_(->> included-tiles
       (map (comp #(select-keys % [:planets :resources :optimal-resources :influence :optimal-influence])
                  :total))
       (apply merge-with +)
       (medley/map-vals (partial hash-map :value))))

(defn compute-bounds [included-tiles]
  (let [{:keys [red blue]} (medley/map-vals count (group-by :type included-tiles))]
    (merge-with (partial merge-with +)
                (medley/map-vals (partial bounds-for-quantity red)
                                 (:red tiles/type->quantity->ordering))
                (medley/map-vals (partial bounds-for-quantity blue)
                                 (:blue tiles/type->quantity->ordering)))))

(defn map-summary [layout {:keys [tiles] :as galaxy-map}]
  (let [included-tiles (remove tiles/mecatol? (vals tiles))]
    (merge (medley/map-vals count (group-by :type included-tiles))
           {:total-tiles (count included-tiles)}
           (merge-with merge
                       (compute-bounds included-tiles)
                       (quantities-for-map included-tiles))
           {:legendary (count (filter tiles/legendary? included-tiles))
            :alpha (count (filter tiles/alpha-wormhole? included-tiles))
            :beta (count (filter tiles/beta-wormhole? included-tiles))
            :anomaly (count (filter tiles/anomaly? included-tiles))
            :tech (count (filter tiles/has-specialties? included-tiles))
            :frontier (count (filter tiles/frontier? included-tiles))})))
