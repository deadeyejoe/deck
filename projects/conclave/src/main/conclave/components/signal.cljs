(ns conclave.components.signal
  (:require [clojure.spec.alpha :as s]
            [medley.core :as m]
            [re-frame.core :as rf])
  (:refer-clojure :exclude [set?]))


(s/def ::instances any?)
(s/def ::db (s/keys :req [::instances]))

(def set! ::set!)
(def unset! ::unset!)
(def toggle! ::toggle!)
(def debounce! ::debounce!)

(defn toggle-debug [] (rf/dispatch [toggle! ::debug]))
(defn debug? [db] (get-in db [::instances ::debug]))
(defn maybe-tap [db v] (when (debug? db) (tap> v)))

(comment
  (toggle-debug))

(defn coerce-ids [ids]
  (if (seq? ids) ids [ids]))

;; Events
(rf/reg-event-db
 set!
 (fn [db [_event ids value]]
   (maybe-tap db ["SET" ids value])
   (assoc-in db (into [::instances] (coerce-ids ids)) (or value true))))

(rf/reg-event-db
 unset!
 (fn [db [_event ids]]
   (maybe-tap db ["UNSET" ids])
   (update db ::instances m/dissoc-in (coerce-ids ids))))

(rf/reg-event-db
 toggle!
 (fn [db [_event ids]]
   (maybe-tap db ["TOGGLE" ids])
   (update-in db (into [::instances] (coerce-ids ids)) not)))

(rf/reg-event-fx
 debounce!
 (fn [{:keys [db]} [_event ids value time]]
   (maybe-tap db ["DEBOUNCE" ids value time])
   {:fx [[:dispatch [set! ids (or value true)]]
         [:dispatch-later {:ms (or time 1000) :dispatch [unset! ids]}]]}))

;; Subs

(def all-instances ::all-instances)
(rf/reg-sub
 all-instances
 (fn [db _query] (::instances db)))

(def value ::value)
(rf/reg-sub
 value
 :<- [all-instances]
 (fn [all-instances [_query ids]] (get-in all-instances (coerce-ids ids))))

(def set? ::set?)
(rf/reg-sub
 set?
 (fn [[_query ids]] (rf/subscribe [value ids]))
 (fn [value _query] (boolean value)))

(def unset? ::unset?)
(rf/reg-sub
 unset?
 (fn [[_query ids]] (rf/subscribe [value ids]))
 (fn [value _query] (not (boolean value))))

;; Interface

(defn >set!
  ([ids] (>set! ids true))
  ([ids value]
   (rf/dispatch [set! ids value])))

(defn >unset! [ids]
  (rf/dispatch [unset! ids]))

(defn >toggle! [ids]
  (rf/dispatch [toggle! ids]))

(defn >flash!
  ([ids] (>flash! ids true))
  ([ids value] (>flash! ids value 1000))
  ([ids value time]
   (rf/dispatch [debounce! ids value time])))

(defn <value [ids]
  @(rf/subscribe [value ids]))

(defn <set? [ids]
  @(rf/subscribe [set? ids]))

(defn <unset? [ids]
  @(rf/subscribe [unset? ids]))
