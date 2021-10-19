(ns conclave.subs
  (:require [clojure.string :as str]
            [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.tiles.view :as tiles-view]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.map.score :as map-score]
            [conclave.map.summary :as map-summary]
            [conclave.map.constraints :as constraints]
            [conclave.vector :as vect]))

(rf/reg-sub
 :galaxy-map
 (fn [db _qv]
   (:map db)))

(rf/reg-sub
 :swap/count
 (fn [db _qv]
   (-> db :swaps count)))

(rf/reg-sub
 :tile
 :<- [:galaxy-map]
 (fn [galaxy-map [_q coordinate]]
   (map/coordinate->tile galaxy-map coordinate)))

(rf/reg-sub
 :selected
 (fn [db _qv]
   (:selected db)))

(rf/reg-sub
 :selected?
 :<- [:selected]
 (fn [selected [_q coordinate]]
   (= selected coordinate)))

(rf/reg-sub
 :tile/distance-map
 :<- [:galaxy-map]
 :<- [:selected]
 (fn [[galaxy-map selected] _qv]
   (map-score/distance-to-other-tiles galaxy-map selected)))

(rf/reg-sub
 :tile/distance-score
 :<- [:tile/distance-map]
 (fn [distance-map [_q coordinate]]
   (distance-map coordinate)))

(rf/reg-sub
 :tile/stake-map
 :<- [:stake/mode]
 :<- [:galaxy-map]
 (fn [[mode galaxy-map] _qv]
   (map-score/stakes galaxy-map (case mode
                                  :discrete map-score/discrete-stakes
                                  :continuous map-score/continuous-stakes))))

(rf/reg-sub
 :tile/highest-stake
 :<- [:galaxy-map]
 :<- [:tile/stake-map]
 (fn [[galaxy-map stake-map]  [_q coordinate]]
   (if (stake-map coordinate)
     (let [hs->stake (stake-map coordinate)
           [highest-stake highest-entries] (->> hs->stake
                                                (group-by val)
                                                (apply max-key key))]
       (str (->> highest-entries
                 (map (comp
                       :key
                       (partial map/coordinate->tile galaxy-map)
                       key))
                 (interpose ", ")
                 (apply str))
            ": " (.toLocaleString highest-stake "en-IN" {:maximumFractionDigits 2})))
     "")))

(rf/reg-sub
 :overlay/mode
 (fn [db _qv] (:overlay/mode db)))

(rf/reg-sub
 :overlay/content
 (fn [[_q coordinate] _dv]
   [(rf/subscribe [:overlay/mode])
    (rf/subscribe [:tile coordinate])
    (rf/subscribe [:tile/distance-score coordinate])
    (rf/subscribe [:tile/highest-stake coordinate])])
 (fn [[mode tile distance-score highest-stake] [_q coordinate]]
   (if (= mode :coordinates)
     (vect/->display coordinate)
     (if (tile/home? tile)
       (-> tile :key str str/upper-case)
       (case mode
         :coordinates (vect/->display coordinate)
         :tile-number (tiles-view/number tile)
         :res-inf     (tiles-view/res-inf tile)
         :wormhole    (tiles-view/wormhole tile)
         :distance-score          distance-score
         :highest-stake           highest-stake
         nil)))))

(rf/reg-sub
 :highlight/mode
 (fn [db _qv] (:highlight/mode db)))

(rf/reg-sub
 :hovered
 (fn [db _qv] (:hovered db)))

(rf/reg-sub
 :highlight-set
 :<- [:galaxy-map]
 :<- [:highlight/mode]
 :<- [:hovered]
 (fn [[galaxy-map mode hovered] _qv]
   (case mode
     :adjacent (into #{} (map/adjacent galaxy-map hovered))
     #{hovered})))

(rf/reg-sub
 :highlighted?
 :<- [:highlight-set]
 (fn [highlight-set [_q coordinate]]
   (contains? highlight-set coordinate)))


(rf/reg-sub
 :stake/mode
 (fn [db _qv] (:stake/mode db)))

(rf/reg-sub
 :constraint/anomalies
 :<- [:galaxy-map]
 (fn [galaxy-map _qv]
   (constraints/count-adjacent-anomalies galaxy-map)))

(rf/reg-sub
 :constraint/wormholes
 :<- [:galaxy-map]
 (fn [galaxy-map _qv]
   (+
    (constraints/count-adjacent-wormholes galaxy-map :alpha)
    (constraints/count-adjacent-wormholes galaxy-map :beta))))

(rf/reg-sub
 :constraint/zero-start
 :<- [:galaxy-map]
 (fn [galaxy-map _qv]
   (constraints/count-zero-starts galaxy-map)))

(rf/reg-sub
 :score/shares
 :<- [:galaxy-map]
 :<- [:stake/mode]
 (fn [[galaxy-map stake-mode] _qv]
   (map-score/shares galaxy-map (case stake-mode
                                  :discrete map-score/discrete-stakes
                                  :continuous map-score/continuous-stakes))))

(rf/reg-sub
 :score/variances
 :<- [:score/shares]
 (fn [shares _qv]
   (map-score/variances shares)))

(rf/reg-sub
 :score/variance
 :<- [:score/variances]
 (fn [variances [_q field]]
   (.toLocaleString (if (= :total field)
                      (->> variances vals (apply +))
                      (get variances field))
                    "en-IN"
                    {:maximumFractionDigits 2})))

(rf/reg-sub
 :player/keys
 :<- [:galaxy-map]
 (fn [galaxy-map _qv]
   (-> galaxy-map :layout layout/player-keys)))

(rf/reg-sub
 :player/summary
 :<- [:galaxy-map]
 (fn [galaxy-map [_q player-key]]
   (map-summary/player-summary galaxy-map player-key)))

