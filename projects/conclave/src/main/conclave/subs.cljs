(ns conclave.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :overlay/mode
 (fn [db _qv] (:overlay/mode db)))

(rf/reg-sub
 :highlight/mode
 (fn [db _qv] (:highlight/mode db)))

(rf/reg-sub
 :hovered
 (fn [db _qv] (:hovered db)))

(rf/reg-sub
 :highlighted?
 :<- [:hovered]
 (fn [hovered-coordinate [_q coordinate]]
   (= hovered-coordinate coordinate)))