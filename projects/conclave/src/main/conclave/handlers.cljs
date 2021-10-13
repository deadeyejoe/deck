(ns conclave.handlers
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 :initialize
 (fn [_db _event]
   {:overlay/mode :none}))

(rf/reg-event-db
 :set-overlay
 (fn [db [_ mode]]
   (assoc db :overlay/mode mode)))