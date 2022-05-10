(ns conclave.subs
  (:require [conclave.db :as db]
            [conclave.tiles.core :as tile]
            [conclave.tiles.view :as tiles-view]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.stake :as stake]
            [conclave.map.beta.score :as score]
            [conclave.map.summary :as map-summary]
            [conclave.utils.hex :as hex]
            [conclave.utils.vector :as vect]
            [conclave.utils.utils :as utils]
            [clojure.string :as str]
            [medley.core :as medley]
            [re-frame.core :as rf]))

(def seed ::seed)
(rf/reg-sub
 seed
 (fn [db]
   (:seed db)))

(def galaxy-map ::galaxy-map)
(rf/reg-sub
 galaxy-map
 (fn [db _qv]
   (:map db)))

(def layout ::layout)
(rf/reg-sub
 layout
 (fn [db _qv]
   (:layout db)))

(def processing? ::processing?)
(rf/reg-sub
 processing?
 (fn [db] (:processing db)))

(def worker-mode ::worker-mode)
(rf/reg-sub
 worker-mode
 (fn [db] (:worker-mode db)))

(def storage-index ::storage-index)
(rf/reg-sub
 storage-index
 (fn [db] (when-let [index (:storage-index db)]
            (inc index))))

(def storage-total ::storage-total)
(rf/reg-sub
 storage-total
 (fn [db] (:storage-total db)))

(rf/reg-sub
 :score/variance
 (fn [db] (utils/format-number (:score/variance db))))

(rf/reg-sub
 :score/constraint
 (fn [db] (:score/constraint db)))

(def tile ::tile)
(rf/reg-sub
 tile
 :<- [galaxy-map]
 (fn [galaxy-map [_q coordinate]]
   (map/coordinate->tile galaxy-map coordinate)))

(def selected-tile ::selected-tile)
(rf/reg-sub
 selected-tile
 (fn [db _qv]
   (:selected db)))

(def tile-selected? ::tile-selected)
(rf/reg-sub
 tile-selected?
 :<- [selected-tile]
 (fn [selected [_q coordinate]]
   (= selected coordinate)))

(def distance-map ::distance-map)
(rf/reg-sub
 distance-map
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (:distances galaxy-map)))

(def distance-from-origin ::distance-from-origin)
(rf/reg-sub
 distance-from-origin
 :<- [distance-map]
 (fn [distance-map [_q coordinate]]
   (get-in distance-map [hex/origin coordinate])))

(def distance-from-selected ::distance-from-selected)
(rf/reg-sub
 distance-from-selected
 :<- [distance-map]
 :<- [selected-tile]
 (fn [[distance-map selected-tile] [_q coordinate]]
   (get-in distance-map [selected-tile coordinate])))

(def stake-map ::stake-map)
(rf/reg-sub
 stake-map
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (:stakes galaxy-map)))

(defn highest-stake [galaxy-map coordinate]
  (when-let [[highest-stake highest-tile-keys] (stake/highest-stake galaxy-map coordinate)]
    (str (->> highest-tile-keys
              (interpose ", ")
              (apply str))
         ": " (utils/format-number highest-stake))))

(def overlay-mode ::overlay-mode)
(rf/reg-sub
 overlay-mode
 (fn [db _qv] (:overlay-mode db)))

(def overlay-mode-is ::overlay-mode-is)
(rf/reg-sub
 overlay-mode-is
 :<- [overlay-mode]
 (fn [overlay-mode [_qv v]] (= v overlay-mode)))

(rf/reg-sub
 ::tile-scores
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (score/tile-scores galaxy-map)))

(rf/reg-sub
 ::tile-shares
 :<- [galaxy-map]
 :<- [::tile-scores]
 (fn [[galaxy-map tile-scores] _qv]
   (score/tile-shares galaxy-map tile-scores)))

(def overlay-content ::overlay-content)
(rf/reg-sub
 overlay-content
 (fn [[_q _coordinate] _dv]
   [(rf/subscribe [galaxy-map])
    (rf/subscribe [overlay-mode])
    (rf/subscribe [selected-tile])
    (rf/subscribe [::tile-scores])
    (rf/subscribe [::tile-shares])])
 (fn [[{:keys [distances] :as galaxy-map} mode selected tile-scores tile-shares] [_q coordinate]]
   (let [tile (map/coordinate->tile galaxy-map coordinate)]
     (case mode
       :coordinates (vect/->display coordinate)
       :distance-score (get-in distances [selected coordinate])
       (if (tile/home? tile)
         (-> tile :key str str/upper-case)
         (case mode
           :tile-number   (tiles-view/number tile)
           :res-inf       (tiles-view/res-inf tile)
           :wormhole      (tiles-view/wormhole tile)
           :tech          (tiles-view/tech tile)
           :tile-score    (tile-scores coordinate)
           :tile-share    (when-let [share (get-in tile-shares [coordinate selected])]
                            (utils/format-number share))
           :highest-stake (highest-stake galaxy-map coordinate)
           nil))))))

(def highlight-mode ::highlight-mode)
(rf/reg-sub
 highlight-mode
 (fn [db _qv] (:highlight-mode db)))

(def hovered ::hovered)
(rf/reg-sub
 hovered
 (fn [db _qv] (:hovered db)))

(def hovered-tile ::hovered-tile)
(rf/reg-sub
 hovered-tile
 :<- [galaxy-map]
 :<- [hovered]
 (fn [[galaxy-map hovered] _qv] (map/coordinate->tile galaxy-map hovered)))

(def highlight-set ::highlight-set)
(rf/reg-sub
 highlight-set
 (fn [db _qv] (:highlight-set db)))

(def tile-highlighted? ::tile-highlighted?)
(rf/reg-sub
 tile-highlighted?
 :<- [highlight-set]
 (fn [highlight-set [_q coordinate]]
   (contains? highlight-set coordinate)))

(def player-edit ::player-edit)
(rf/reg-sub
 player-edit
 (fn [db _qv]
   (:player-edit db)))

(def player-keys ::player-keys)
(rf/reg-sub
 player-keys
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (map/player-keys galaxy-map)))

(def player-name ::player-name)
(rf/reg-sub
 player-name
 (fn [db [_q player-key]]
   (not-empty (get-in db [:players player-key :name]))))

(def player-race ::player-race)
(rf/reg-sub
 player-race
 (fn [db [_q player-key]]
   (get-in db [:players player-key :race])))

(def selected-races ::selected-races)
(rf/reg-sub
 selected-races
 (fn [db [_q]]
   (db/selected-races db)))

(def player-scores ::player-scores)
(rf/reg-sub
 player-scores
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (->> galaxy-map
        (score/tile-scores)
        (score/player-scores galaxy-map)
        (medley/map-keys (partial map/coordinate->tile-key galaxy-map)))))

(def player-summary ::player-summary)
(rf/reg-sub
 player-summary
 :<- [galaxy-map]
 :<- [player-scores]
 (fn [[galaxy-map player-scores] [_q player-key]]
   (-> (map-summary/player-summary galaxy-map player-key)
       (assoc :score (get player-scores player-key)))))

(def variance-score ::variance-score)
(rf/reg-sub
 variance-score
 :<- [player-scores]
 (fn [player-scores _qv]
   (-> player-scores
       (score/variance-score)
       (utils/format-number))))

(def constraint-contributions ::constraint-contributions)
(rf/reg-sub
 constraint-contributions
 :<- [galaxy-map]
 (fn [galaxy-map _qv]
   (let [contributions (vec (constraint/evaluate-constraints galaxy-map))
         total (constraint/summary contributions)]
     (conj contributions total))))
