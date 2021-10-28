(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.map.optimization :as opt]))

(defn new-map [seed]
  (let [new-map (-> (map/build layout/eight-player)
                    (map/populate seed tile/default-set))]
    {:map new-map}))

(rf/reg-event-fx
 :initialize
 (fn [_con [_en seed]]
   {:db (merge {:overlay/mode :none
                :highlight/mode :single
                :stake/mode :discrete
                :seed seed}
               (new-map seed))}))

(rf/reg-event-db
 :seed/set
 (fn [db [_en seed]]
   (assoc db :seed seed)))

(rf/reg-event-db
 :map/generate
 (fn [db _ev]
   (merge db (new-map (:seed db)))))

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