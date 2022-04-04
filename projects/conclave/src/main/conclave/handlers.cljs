(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.db :as db]
            [conclave.map.core :as map]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.optimization :as map.opt]
            [conclave.map.optimization :as opt]
            [conclave.map.layout :as layout]
            [conclave.utils.random :as random]
            [conclave.tiles.core :as tile]
            [conclave.worker :as worker]))

(rf/reg-event-fx
 :initialize
 (fn [_con [_en seed]]
   {:db (db/initialize seed)}))

(rf/reg-event-db
 :seed/set
 (fn [db [_en seed]]
   (assoc db :seed seed)))

(rf/reg-event-db
 :map/raw
 (fn [{:keys [seed] :as db} _ev]
   (let [raw (map.build/create seed)]
     (db/set-map db raw))))

(rf/reg-event-db
 :map/generate
 (fn [{:keys [seed] :as db} _ev]
   (let [raw (map.build/create seed)
         swaps (map/generate-swap-list raw seed)
         [generated _ _] (map.opt/optimize raw swaps)]
     (db/set-map db generated))))

(rf/reg-event-db
 :set-overlay
 (fn [db [_ mode]]
   (assoc db :overlay-mode mode)))

(rf/reg-event-db
 :set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight-mode mode)))

(rf/reg-event-db
 :set-stake
 (fn [db [_ mode]]
   (assoc db :stake-mode mode)))

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
