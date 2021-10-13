(ns conclave.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :overlay/mode
 (fn [db _query] (:overlay/mode db)))