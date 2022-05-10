(ns conclave.map.beta.build
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.stake :as stake]
            [conclave.tiles.core :as tiles]
            [medley.core :as medley]))

(defn bounds-for-quantity [n ordered-list]
  (let [total (count ordered-list)]
    {:lower (apply + (drop (- total n) ordered-list))
     :upper (apply + (take n ordered-list))}))

(defn quantities-for-map [included-tiles]
  (->> included-tiles
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

(defn compute-summary [{:keys [tiles] :as galaxy-map}]
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

(defn slice-for [stakes home-system-coordinate]
  (->> stakes
       (medley/filter-vals #(= 1 (get % home-system-coordinate)))
       (keys)))

(defn slices [galaxy-map stakes]
  (let [home-system-coordinates (core/home-coordinates galaxy-map)]
    (->> home-system-coordinates
         (map (juxt identity (partial slice-for stakes)))
         (into {}))))

(defn from-map [coordinate-map]
  (let [proto-map (core/import-coordinate-map {} coordinate-map)
        distances (distance/coordinate->distances proto-map)
        stakes (stake/stakes-for-map proto-map distances)
        slices (slices proto-map stakes)]
    (assoc proto-map
           :distances distances
           :stakes stakes
           :slices slices
           :summary (compute-summary proto-map))))

(defn from-layout
  ([seed] (from-layout seed layout/default-layout))
  ([seed layout]
   (->> layout
        (layout/generate-coordinate-map seed)
        (from-map))))

(comment
  (from-layout "ABCDE"))
