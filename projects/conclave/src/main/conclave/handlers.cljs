(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.db :as db]
            [conclave.map.core :as map]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.optimization :as map.opt]
            [conclave.map.layout :as layout]
            [conclave.utils.random :as random]
            [conclave.tiles.core :as tile]
            [conclave.worker :as worker]))

(def initialize ::initialize)
(rf/reg-event-fx
 initialize
 (fn [_con [_en seed]]
   {:db (db/initialize seed)}))

(def set-seed ::set-seed)
(rf/reg-event-db
 set-seed
 (fn [db [_en seed]]
   (assoc db :seed seed)))

(def raw-map ::raw-map)
(rf/reg-event-db
 raw-map
 (fn [{:keys [seed] :as db} _ev]
   (let [raw (map.build/create seed)]
     (db/set-map db raw))))

(def generate-map ::generate-map)
(rf/reg-event-db
 generate-map
 (fn [{:keys [seed] :as db} _ev]
   (let [raw (map.build/create seed)
         swaps (map/generate-swap-list raw seed)
         [generated _ _] (map.opt/optimize raw swaps)]
     (db/set-map db generated))))

(def optimize-map ::optimize-map)
(rf/reg-event-db
 optimize-map
 (fn [{:keys [map seed] :as db} _ev]
   (let [swaps (map/generate-swap-list map seed)
         [generated _ _] (map.opt/optimize map swaps)]
     (db/set-map db generated))))

(def set-overlay ::set-overlay)
(rf/reg-event-db
 set-overlay
 (fn [db [_ mode]]
   (assoc db :overlay-mode mode)))

(def set-highlight ::set-highlight)
(rf/reg-event-db
 set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight-mode mode)))

(def set-stake ::set-stake)
(rf/reg-event-db
 set-stake
 (fn [db [_ mode]]
   (assoc db :stake-mode mode)))

(def set-hover ::set-hover)
(rf/reg-event-db
 set-hover
 (fn [db [_name coordinate]]
   (assoc db :hovered coordinate)))

(def clear-hover ::clear-hover)
(rf/reg-event-db
 clear-hover
 (fn [db _event]
   (dissoc db :hovered)))

(def select-tile ::select-tile)
(rf/reg-event-db
 select-tile
 (fn [db [_en coordinate]]
   (assoc db :selected coordinate)))
