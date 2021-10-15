(ns conclave.subs
  (:require [re-frame.core :as rf]
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
 :overlay/mode
 (fn [db _qv] (:overlay/mode db)))

(rf/reg-sub
 :overlay/content
 (fn [[_q coordinate] _dv]
   [(rf/subscribe [:galaxy-map])
    (rf/subscribe [:overlay/mode])
    (rf/subscribe [:tile coordinate])])
 (fn [[galaxy-map mode tile] [_q coordinate]]
   (case mode
     :coordinates (vect/->display coordinate)
     :tile-number (:key tile)
     :res-inf     (str (:total/resources tile)
                       "/"
                       (:total/influence tile))
     :wormhole    (case (:wormhole tile) :alpha "Alpha" :beta "Beta" nil)
     :p1          ((map-score/distance-to-other-tiles galaxy-map [0 4 -4]) coordinate)
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