(ns conclave.subs
  (:require [re-frame.core :as rf]
            [conclave.tiles.view :as tiles-view]
            [conclave.map.core :as map]
            [conclave.map.score :as map-score]
            [conclave.vector :as vect]))

(rf/reg-sub
 :galaxy-map
 (fn [db _qv]
   (:map db)))

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
 :overlay/mode
 (fn [db _qv] (:overlay/mode db)))

(rf/reg-sub
 :overlay/content
 (fn [[_q coordinate] _dv]
   [(rf/subscribe [:overlay/mode])
    (rf/subscribe [:tile coordinate])
    (rf/subscribe [:tile/distance-score coordinate])])
 (fn [[mode tile distance-score] [_q coordinate]]
   (case mode
     :coordinates (vect/->display coordinate)
     :tile-number (tiles-view/number tile)
     :res-inf     (tiles-view/res-inf tile)
     :wormhole    (tiles-view/wormhole tile)
     :distance-score          distance-score
     nil)))

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