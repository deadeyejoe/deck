(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.tiles.core :as tile]
            [conclave.map.core :as map]
            [conclave.map.optimization :as opt]
            [conclave.map.layout :as layout]
            [conclave.worker :as worker]))

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
   (let [raw (new-map (:seed db))]
     (assoc db
            :map raw
            :score/constraint (opt/calculate-constraint-score raw)
            :score/variance (opt/calculate-variance-score raw)))))

(rf/reg-event-db
 :map/generate-optimized
 (fn [db _ev]
   (worker/generate (:seed db)
                    {:on-result   (fn [p]
                                    (rf/dispatch [:map/finish p]))
                     :on-progress (fn [p]
                                    (rf/dispatch [:map/progress p]))})
   (assoc db :processing true)))


(defn map-update [db {:keys [map constraint variance]}]
  (assoc db
         :map map
         :score/constraint constraint
         :score/variance variance))

(rf/reg-event-db
 :map/progress
 (fn [db [_en {:keys [total done progress] :as p}]]
   (-> db
       (map-update p)
       (assoc :progress/total total
              :progress/done done
              :progress/percent progress))))

(rf/reg-event-db
 :map/finish
 (fn [db [_ev p]]
   (-> db
       (map-update p)
       (dissoc :processing
               :progress/total
               :progress/done
               :progress/percent))))

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