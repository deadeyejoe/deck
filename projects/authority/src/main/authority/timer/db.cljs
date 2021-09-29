(ns authority.timer.db
  (:require [authority.utils :as utils]))

(defn build [{:keys [id label pauseable] :or {pauseable true}}]
  {:id id
   :label (or label id)
   :pauseable pauseable
   :events '()})

(defn running? [timer] (= (:status timer) :running))
(defn paused? [timer] (= (:status timer) :paused))

(defn push [timer now action]
  (update timer :events conj {:time now
                              :action action}))

(defn start [timer now]
  (if (:status timer)
    timer
    (-> timer
        (assoc :start now
               :status :running)
        (push now :start))))

(defn pause [timer now]
  (if (and (running? timer) (:pauseable timer))
    (-> timer
        (assoc :status :paused)
        (push now :pause))
    timer))

(defn resume [timer now]
  (if (paused? timer)
    (-> timer
        (assoc :status :running)
        (push now :resume))
    timer))

(defn
  create
  "Starting the same id a second time will overwrite the first."
  [db now opts]
  (let [{:keys [id]} opts]
    (assoc-in db [:timer id] (-> (build opts)
                                 (start now)))))

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
      (update :timer utils/transform-values (fn [timer] (pause timer now)))
      (assoc-in [:timer :paused] true)))

(defn resume-all [db now]
  (-> db
      (update :timer utils/transform-values (fn [timer] (resume timer now)))
      (update :timer dissoc :paused)))
