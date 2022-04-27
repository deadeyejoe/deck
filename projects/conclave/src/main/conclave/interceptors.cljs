(ns conclave.interceptors
  (:require [conclave.map.serialization :as serialization]
            [re-frame.core :as rf]))

(defn set-hash! [loc]
  (set! (.-hash js/window.location) loc))

(defn write-map [{:keys [map] :as db} _ev]
  (set-hash! (serialization/serialize map)))

(def write-map-to-location (rf/after write-map))
