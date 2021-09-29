(ns authority.timer.subs
  (:require [re-frame.core :as rf]
            [authority.timer.db :as timer-db]
            [authority.timer.utils :as timer]))

(rf/reg-sub
 :timer/paused
 (fn [db _] (some? (get-in db [:timer :paused]))))

(rf/reg-sub
 :timer/now
 (fn [db _] (:heartbeat db)))

(rf/reg-sub
 :timer/base
 (fn [db [_ timer-id]] (timer-db/by-id db timer-id)))

(defn sub-by-id [[_ timer-id] _]
  [(rf/subscribe [:timer/now])
   (rf/subscribe [:timer/base timer-id])])

(rf/reg-sub
 :timer/elapsed-real
 sub-by-id
 (fn [[now timer] _]
   (timer/elapsed-real timer now)))

(rf/reg-sub
 :timer/elapsed
 sub-by-id
 (fn [[now timer] _]
   (timer/elapsed timer now)))

(rf/reg-sub
 :timer/display
 (fn [[_ timer-id mode] _]
   (if (= mode :real)
     (rf/subscribe [:timer/elapsed-real timer-id])
     (rf/subscribe [:timer/elapsed timer-id])))
 (fn [elapsed _]
   (timer/seconds->display elapsed)))


(rf/reg-sub
 :timer/elapsed-in-range
 (fn [[_ timer-id & _] _]
   (rf/subscribe [:timer/elapsed timer-id]))
 (fn [elapsed [_ _ from to]]
   (if to
     (< from elapsed to)
     (<= from elapsed))))