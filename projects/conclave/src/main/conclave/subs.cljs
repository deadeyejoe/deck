(ns conclave.subs
  (:require [re-frame.core :as rf]
            [conclave.map.core :as map]))

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