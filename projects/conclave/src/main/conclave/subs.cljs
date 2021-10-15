(ns conclave.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :overlay/mode
 (fn [db _query] (:overlay/mode db)))

(rf/reg-sub
 :highlight/mode
 (fn [db _query] (:highlight/mode db)))

(rf/reg-sub
 :highlighted
 (fn [db _q] (:highlighted db)))