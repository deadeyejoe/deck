(ns authority.timer.subs
  (:require [re-frame.core :as rf]
            [authority.timer.core :as timer]
            [authority.timer.db :as timer-db]
            [authority.timer.utils :as utils]))

(rf/reg-sub
 :timer/paused
 (fn [db _] (some? (get-in db [:timer :paused]))))

(rf/reg-sub
 :timer/now
 (fn [db _] (:heartbeat db)))

(rf/reg-sub
 :timer/base
 (fn [db [_ timer-id]] (timer-db/by-id db timer-id)))

(defn id-sub [f]
  (fn [[_ timer-id] _] (f timer-id)))

(rf/reg-sub
 :timer/time-total
 (id-sub (fn [timer-id]
           [(rf/subscribe [:timer/now])
            (rf/subscribe [:timer/base timer-id])]))
 (fn [[now timer] _]
   (timer/time-total timer now)))

(rf/reg-sub
 :timer/offset
 (id-sub (fn [timer-id] (rf/subscribe [:timer/base timer-id])))
 (fn [timer _]
   (timer/offset timer)))

(rf/reg-sub
 :timer/elapsed
 (id-sub (fn [timer-id]
           [(rf/subscribe [:timer/time-total timer-id])
            (rf/subscribe [:timer/offset timer-id])]))
 (fn [[total offset] _]
   (utils/ms->seconds (- total offset))))

(rf/reg-sub
 :timer/elapsed-real
 (id-sub (fn [timer-id]
           [(rf/subscribe [:timer/now])
            (rf/subscribe [:timer/base timer-id])]))
 (fn [[now timer] _]
   (utils/ms->seconds (timer/time-real timer now))))

(rf/reg-sub
 :timer/display
 (fn [[_ timer-id mode] _]
   (if (= mode :real)
     (rf/subscribe [:timer/elapsed-real timer-id])
     (rf/subscribe [:timer/elapsed timer-id])))
 (fn [elapsed _]
   (utils/seconds->display elapsed)))

(rf/reg-sub
 :timer/elapsed-in-range
 (fn [[_ timer-id & _] _]
   (rf/subscribe [:timer/elapsed timer-id]))
 (fn [elapsed [_ _ from to]]
   (if to
     (< from elapsed to)
     (<= from elapsed))))