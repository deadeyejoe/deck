(ns conclave.map.core
  (:require [conclave.layout.core :as layout]
            [conclave.player.core :as player]
            [conclave.tiles.core :as tile]
            [conclave.specs :as shared-specs]
            [conclave.utils.hex :as hex]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))


(s/def ::tiles (s/map-of ::shared-specs/coordinate ::tile/instance))
(s/def ::distances (s/map-of ::shared-specs/coordinate
                             (s/map-of ::shared-specs/coordinate number?)))
(s/def ::tiles-reverse (s/map-of ::tile/key ::shared-specs/coordinate))
(s/def ::players (s/map-of ::player/key ::player/instance))

(s/def ::galaxy (s/keys :req-un [::tiles
                                 ::tiles-reverse]
                        :opt-un [::players
                                 ::distances]))

(defn set-coordinate [galaxy-map coordinate tile]
  (-> galaxy-map
      (assoc-in [:tiles coordinate] tile)
      (assoc-in [:tiles-reverse (:key tile)] coordinate)))

(defn import-coordinate-map [galaxy-map coordinates]
  (reduce-kv set-coordinate
             galaxy-map
             coordinates))

(defn init-players [layout]
  (->> (layout/player-keys layout)
       (map (fn [k] [k {:key k}]))
       (into {})))

(defn new [{:keys [home-tiles fixed-tiles hyperlane-tiles] :as layout}]
  (-> {:distances (:distances layout)
       :players (init-players layout)
       :tiles {}
       :tiles-reverse {}}
      (import-coordinate-map home-tiles)
      (import-coordinate-map fixed-tiles)
      (import-coordinate-map hyperlane-tiles)))

(defn coordinates [galaxy-map]
  (-> galaxy-map :tiles keys))

(defn coordinates-by-tile [tile-pred {:keys [tiles] :as _galaxy-map}]
  (keys (medley/filter-vals tile-pred tiles)))

(defn coordinate->tile [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate]))

(defn coordinate->tile-key [galaxy-map coordinate]
  (get-in galaxy-map [:tiles coordinate :key]))

(defn tile->coordinate [galaxy-map tile]
  (get-in galaxy-map [:tiles-reverse (or (:key tile) tile)]))

(defn distance-to-origin [galaxy-map coordinate]
  (get-in galaxy-map [:distances hex/origin coordinate]))

(defn- adjacent-wormholes [galaxy-map coordinate]
  (some->> (coordinate->tile galaxy-map coordinate)
           (tile/matching-wormholes)
           (map (partial tile->coordinate galaxy-map))
           (remove #{nil coordinate})))

(defn adjacent [layout galaxy-map coordinate]
  (into (layout/adjacents layout coordinate)
        (adjacent-wormholes galaxy-map coordinate)))

(defn radius [galaxy-map]
  (->> galaxy-map
       (coordinates)
       (map (partial hex/ring))
       (apply max)))

(defn select-by-tile [galaxy-map f]
  (->> galaxy-map
       :tiles
       (filter (comp f second))
       (map first)))

(defn swap-tiles [galaxy-map c1 c2]
  (let [t1 (coordinate->tile galaxy-map c1)
        t2 (coordinate->tile galaxy-map c2)]
    (-> galaxy-map
        (set-coordinate c1 t2)
        (set-coordinate c2 t1))))

(defn players [galaxy-map]
  (->> (get galaxy-map :players)
       (sort-by first)
       (map second)))

(defn import-player-map [galaxy-map player-map]
  (assoc galaxy-map :players player-map))
(s/fdef import-player-map
  :args (s/cat :galaxy-map ::galaxy :player-map ::players)
  :ret ::galaxy)

(defn players-customized? [galaxy-map]
  (->> galaxy-map
       (players)
       (some player/customized?)))
(defn player-name [galaxy-map key]
  (get-in galaxy-map [:players key :name]))
(defn player-race [galaxy-map key]
  (get-in galaxy-map [:players key :race]))
(defn set-player-name [galaxy-map key name]
  (assoc-in galaxy-map [:players key :name] name))
(defn set-player-race [galaxy-map key race-index]
  (assoc-in galaxy-map [:players key :race] race-index))
(defn swap-players [galaxy-map player-key-1 player-key-2]
  (let [p1 (get-in galaxy-map [:players player-key-1])
        p2 (get-in galaxy-map [:players player-key-2])]
    (if (and p1 p2)
      (->> galaxy-map
           (assoc-in [:players player-key-1] p2)
           (assoc-in [:players player-key-2] p1))
      galaxy-map)))
