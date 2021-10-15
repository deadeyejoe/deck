(ns conclave.handlers
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize
 (fn [_db _event]
   {:overlay/mode :none
    :highlight/mode :single}))

(rf/reg-event-db
 :set-overlay
 (fn [db [_ mode]]
   (assoc db :overlay/mode mode)))

(rf/reg-event-db
 :set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight/mode mode)))

(rf/reg-event-db
 :hover/start
 (fn [db [_name coordinate]]
   (assoc db :hovered coordinate)))

(rf/reg-event-db
 :hover/clear
 (fn [db _event]
   (dissoc db :hovered)))