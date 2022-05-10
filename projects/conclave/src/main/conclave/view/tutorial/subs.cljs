(ns conclave.view.tutorial.subs
  (:require [conclave.subs :as subs]
            [conclave.db :as db]
            [re-frame.core :as rf]))

(def instance ::instance)
(def active? instance)
(rf/reg-sub
 instance
 (fn [db _qv]
   (get db :tutorial)))

(def current-stage ::current-stage)
(rf/reg-sub
 current-stage
 :<- [instance]
 (fn [{:keys [stage] :as instance} _qv]
   stage))

(def is-stage? ::is-stage)
(rf/reg-sub
 is-stage?
 :<- [current-stage]
 (fn [current-stage [_qn stage]]
   (= current-stage stage)))

(def current-highlight ::current-highlight)
(rf/reg-sub
 current-highlight
 :<- [instance]
 (fn [{:keys [highlight] :as instance} _qv]
   highlight))

(def is-highlighted? ::is-highlight)
(rf/reg-sub
 is-highlighted?
 :<- [current-highlight]
 (fn [current-highlight [_qn element]]
   (= current-highlight element)))

(def surface-set ::surface-set)
(rf/reg-sub
 surface-set
 :<- [instance]
 (fn [{:keys [surfaced] :as instance} _qv]
   surfaced))

(def is-surfaced? ::is-surfaced)
(rf/reg-sub
 is-surfaced?
 :<- [current-highlight]
 :<- [surface-set]
 (fn [[current-highlight surface-set] [_qn element]]
   (or (= current-highlight element)
       (contains? surface-set element))))
