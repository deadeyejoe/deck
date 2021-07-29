(ns authority.coeffects
  (:require [re-frame.core :as rf]))

(re-frame.core/reg-cofx
 :now
 (fn now-handler
   [coeffect]
   (assoc coeffect :now (js/Date.))))