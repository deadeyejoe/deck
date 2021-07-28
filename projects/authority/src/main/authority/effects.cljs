(ns authority.effects
  (:require [re-frame.core :as rf]))

(defonce interval-handler                ;; notice the use of defonce
  (let [live-intervals (atom {})]        ;; storage for live intervals
    (fn handler [{:keys [action id frequency event]}]     ;; the effect handler
      (condp = action
        :clean   (doall                ;; <--- new. clean up all existing 
                  (map #(handler {:action :end  :id  %1}) (keys @live-intervals)))
        :start   (when-not (@live-intervals id)
                   (swap! live-intervals assoc id (js/setInterval #(rf/dispatch event) frequency)))
        :end     (do (js/clearInterval (get @live-intervals id))
                     (swap! live-intervals dissoc id))))))

;; when this code is reloaded `:clean` existing intervals
(interval-handler {:action :clean})

;; now register            
(rf/reg-fx        ;; the re-frame API for registering effect handlers
 :interval                  ;; the effect id
 interval-handler)