(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]))

(rf/reg-event-db
 :initialize
 (fn [_db [_en seed]]
   {:overlay/mode :none
    :highlight/mode :single
    :stake/mode :discrete
    :map (-> (map/build layout/eight-player)
             (map/populate seed tile/default-set))}))

(rf/reg-event-db
 :set-overlay
 (fn [db [_ mode]]
   (assoc db :overlay/mode mode)))

(rf/reg-event-db
 :set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight/mode mode)))

(rf/reg-event-db
 :set-stake
 (fn [db [_ mode]]
   (assoc db :stake/mode mode)))

(rf/reg-event-db
 :hover/start
 (fn [db [_name coordinate]]
   (assoc db :hovered coordinate)))

(rf/reg-event-db
 :hover/clear
 (fn [db _event]
   (dissoc db :hovered)))

(rf/reg-event-db
 :tile/select
 (fn [db [_en coordinate]]
   (assoc db :selected coordinate)))