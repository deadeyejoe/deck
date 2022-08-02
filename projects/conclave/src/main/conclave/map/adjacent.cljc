(ns conclave.map.adjacent
  (:require [conclave.map.core :as map]
            [conclave.tiles.core :as tiles]
            [conclave.utils.hex :as hex]
            [clojure.set :as set]
            [medley.core :as medley]))

(defn neighbouring-hyperlanes [coordinate->hyperlane source-coordinate]
  (->> source-coordinate
       (hex/neighbours)
       (map coordinate->hyperlane)))

(defn ->edges [source-coordinate {:keys [coordinate edges] :as hyperlane-tile}]
  (->> edges
       (keep (fn [edge]
               (when-let [target (get edge source-coordinate)]
                 [source-coordinate coordinate target])))
       not-empty))

(defn traverse-hyperlanes [coordinate->hyperlane source-coordinate]
  (let [hyperlane? (fn [c] (contains? coordinate->hyperlane c))
        neighbour-lanes (neighbouring-hyperlanes coordinate->hyperlane source-coordinate)
        initial-edges (mapcat (partial ->edges source-coordinate) neighbour-lanes)]
    (if (hyperlane? source-coordinate)
      #{}
      (loop [visited #{}
             results #{}
             [[_source hl-coordinate target :as current] & rest] initial-edges]
        (cond
          (nil? current) results
          (and (hyperlane? target)
               (not (visited target))) (recur visited
                                              results
                                              (concat rest (->edges hl-coordinate (coordinate->hyperlane target))))
          :else (recur (conj visited hl-coordinate)
                       (conj results target)
                       rest))))))

(def sample-hyperlane-map {[0 -2  2]  (tiles/hyperlane-tile {:key :86A :coordinate [0 -2  2] :rotation 0})
                           [1 -3  2]  (tiles/hyperlane-tile {:key :88A :coordinate [1 -3  2] :rotation 0})
                           [1 -4  3]  (tiles/hyperlane-tile {:key :83A :coordinate [1 -4  3] :rotation 0})
                           [0 -4  4]  (tiles/hyperlane-tile {:key :85A :coordinate [0 -4  4] :rotation 0})
                           [-1 -3 4]  (tiles/hyperlane-tile {:key :84A :coordinate [-1 -3 4] :rotation 0})
                           [-1 -2 3]  (tiles/hyperlane-tile {:key :87A :coordinate [-1 -2 3] :rotation 0})})

(def broken-ring-map {[1 -3 2]   (tiles/hyperlane-tile {:key :85A :coordinate [1 -3 2]  :rotation 4})
                      [1 -4 3]   (tiles/hyperlane-tile {:key :85A :coordinate [1 -4 3]  :rotation 5})
                      [-1 -3 4]  (tiles/hyperlane-tile {:key :85A :coordinate [-1 -3 4] :rotation 1})
                      [-1 -2 3]  (tiles/hyperlane-tile {:key :85A :coordinate [-1 -2 3] :rotation 2})})

(comment
  (traverse-hyperlanes sample-hyperlane-map [0 -3 3])
  (traverse-hyperlanes sample-hyperlane-map [2 -4 2])
  (traverse-hyperlanes sample-hyperlane-map [0 -4 4])
  (traverse-hyperlanes broken-ring-map [0 -2 2])
  (traverse-hyperlanes broken-ring-map [0 -3 3])
  (traverse-hyperlanes broken-ring-map [0 -4 4]))

(defn all-endpoints [hyperlane-tiles]
  (->> hyperlane-tiles
       (mapcat :edges)
       (map (comp set keys))
       (apply set/union)))

(defn hyperlane-submap [{:keys [tiles] :as _galaxy-map}]
  (medley/filter-vals tiles/hyperlane? tiles))

(defn hyperlane-adjacency-map [hyperlane-submap]
  (->> (vals hyperlane-submap)
       (all-endpoints)
       (reduce (fn [acc c] (let [hyper-adjacent (traverse-hyperlanes hyperlane-submap c)]
                             (cond-> acc (seq hyper-adjacent) (assoc c hyper-adjacent))))
               {})))

(defn adjacent-coordinates [galaxy-map
                            hyperlane-submap
                            hyperlane-adjacency-map
                            coordinate]
  (if (hyperlane-submap coordinate)
    #{} ;;hyperlanes aren't adjacent to anything
    (->> coordinate
         (map/neighbouring galaxy-map) ;;checks for oob
         (remove hyperlane-submap)
         (set)
         (set/union (hyperlane-adjacency-map coordinate)))))

(defn adjacency [galaxy-map]
  (let [hyperlane-submap (hyperlane-submap galaxy-map)
        hyperlane-adjacency (hyperlane-adjacency-map hyperlane-submap)
        ->adjacent (partial adjacent-coordinates galaxy-map hyperlane-submap hyperlane-adjacency)]
    (reduce (fn [acc c] (assoc acc c (->adjacent c)))
            {}
            (map/coordinates galaxy-map))))

(comment
  (count (all-endpoints (vals sample-hyperlane-map)))
  (hyperlane-adjacency-map sample-hyperlane-map))
