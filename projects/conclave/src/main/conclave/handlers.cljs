(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.db :as db]
            [conclave.map.core :as map]
            [conclave.map.beta.build :as map.build]
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
 :map/generate-raw
 (fn [db _ev]
   (->> (:seed db)
        (map.build/create)
        (db/set-map db))))

(rf/reg-event-db
 :map/generate-optimized
 (fn [db _ev]
   (worker/generate (:seed db)
                    {:on-result   (fn [p]
                                    (rf/dispatch [:map/finish p]))
                     :on-progress (fn [p]
                                    (rf/dispatch [:map/progress p]))})
   (assoc db :processing true)))

(defn random-seed []
  (->> (. js/Date now)
       (random/sample (map char (range 65 91)) 6)
       (apply str)))

(rf/reg-event-fx
 :map/generate-random
 (fn [{:keys [db]} _ev]
   {:db (assoc db :seed (random-seed))
    :fx [[:dispatch [:map/generate-optimized]]]}))

(rf/reg-event-db
 :map/progress
 (fn [db [_en {:keys [total done progress map] :as p}]]
   (-> db
       (db/set-map map)
       (assoc :progress/total total
              :progress/done done
              :progress/percent progress))))

(rf/reg-event-db
 :map/finish
 (fn [db [_ev {:keys [map] :as p}]]
   (-> db
       (db/set-map map)
       (dissoc :processing
               :progress/total
               :progress/done
               :progress/percent))))

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
