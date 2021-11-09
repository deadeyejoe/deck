(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.worker :as worker]
            [conclave.map.optimization :as opt]))

(defn new-map [seed]
  (-> (map/build layout/eight-player)
      (map/populate seed tile/default-set)))

(rf/reg-event-fx
 :initialize
 (fn [_con [_en seed]]
   {:db  {:overlay/mode :none
          :highlight/mode :single
          :stake/mode :discrete
          :seed seed
          :map (new-map seed)}}))

(rf/reg-event-db
 :seed/set
 (fn [db [_en seed]]
   (assoc db :seed seed)))

(rf/reg-event-db
 :map/generate-raw
 (fn [db _ev]
   (assoc db :map (new-map (:seed db)))))

(rf/reg-event-db
 :map/generate-optimized
 (fn [db _ev]
   (worker/generate (:seed db)
                    {:on-result #(rf/dispatch [:map/set (:map %)])})
   (assoc db :processing true)))

(rf/reg-event-db
 :map/set
 (fn [db [_en map]]
   (-> db
       (assoc :map map)
       (dissoc :processing))))

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