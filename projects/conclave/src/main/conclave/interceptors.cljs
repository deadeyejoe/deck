(ns conclave.interceptors
  (:require [conclave.map.serialization :as serialization]
            [conclave.storage :as storage]
            [re-frame.core :as rf]))

(defn set-hash! [loc]
  (set! (.-hash js/window.location) loc))

(defn write-map! [{:keys [map] :as db} _ev]
  (set-hash! (serialization/serialize map)))

(def write-map-to-location (rf/after write-map!))

(defn maybe-store-map! [map]
  (if-let [existing-entry (storage/map-stored? @storage/local-store map)]
    [existing-entry (-> @storage/local-store :maps count)]
    (let [{:keys [maps] :as _updated-storage} (swap! storage/local-store storage/store-map map)]
      [(last maps) (count maps)])))

(defn store-map-and-update-db! [context]
  (let [db (rf/get-effect context :db)]
    (if-let [current-map (:map db)]
      (let [[{:keys [index] :as _stored-entry} total] (maybe-store-map! current-map)]
        (rf/assoc-effect context :db (assoc db
                                            :storage-index index
                                            :storage-total total)))
      context)))

(def store-map-locally
  (rf/->interceptor
   :id :store-map-in-local-store
   :after store-map-and-update-db!))
