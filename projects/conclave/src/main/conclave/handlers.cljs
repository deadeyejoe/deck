(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]))

(defn new-map [seed]
  (let [new-map (-> (map/build layout/eight-player)
                    (map/populate seed tile/default-set))]
    {:map new-map
     :swaps (map/generate-swap-list new-map seed)}))

(rf/reg-event-fx
 :initialize
 (fn [_con [_en seed]]
   {:db (merge {:overlay/mode :none
                :highlight/mode :single
                :stake/mode :discrete}
               (new-map seed))}))

(rf/reg-event-db
 :map/generate
 (fn [db [_en seed]]
   (merge db (new-map seed))))

(rf/reg-event-db
 :map/swap
 (fn [db _ev]
   (let [[first & rest] (get db :swaps)
         new-map (apply map/swap-tiles (get db :map) first)]
     (assoc db
            :map new-map
            :swaps rest))))

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