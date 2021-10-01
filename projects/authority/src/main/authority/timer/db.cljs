(ns authority.timer.db
  (:require [authority.utils :as utils]
            [authority.timer.core :as timer]))

(defn
  create
  "Starting the same id a second time will overwrite the first."
  [db now opts]
  (let [{:keys [id]} opts]
    (assoc-in db [:timer id] (-> (timer/build opts)
                                 (timer/start now)))))

(defn delete [db id]
  (update db :timer dissoc id))

(defn by-id [db id]
  (get-in db [:timer id]))

(defn ids [db]
  (-> db
      :timer
      keys
      sort))

(defn all [db]
  (->> db
       :timer
       vals
       (sort-by :id)))

(defn pause-all [db now]
  (-> db
      (update :timer utils/transform-values (fn [timer] (timer/pause timer now)))
      (assoc-in [:timer :paused] true)))

(defn resume-all [db now]
  (-> db
      (update :timer utils/transform-values (fn [timer] (timer/resume timer now)))
      (update :timer dissoc :paused)))

(defn all-paused? [db]
  (get-in db [:timer :paused]))
