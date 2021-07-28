(ns authority.coeffects
  (:require [re-frame.core :as rf]
            [akiroz.re-frame.storage :as storage]))

(storage/reg-co-fx! :authority {:fx :local :cofx :local})

(re-frame.core/reg-cofx
 :now
 (fn now-handler
   [coeffect]
   (assoc coeffect :now (js/Date.))))