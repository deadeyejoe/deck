(ns conclave.coeffects
  (:require [conclave.map.serialization :as serialization]
            [conclave.storage :as storage]
            [superstring.core :as str]
            [re-frame.core :as rf]))

(defn read-map [coeffects]
  (try
    (let [hash (str/substring (.-hash js/window.location) 1)
          deserialized (serialization/deserialize hash)]
      (assoc coeffects :layout-and-map-from-location deserialized))
    (catch js/Error _e coeffects)))

(def read-map-from-location ::read-map-from-location)
(rf/reg-cofx read-map-from-location
             read-map)

(defn read-local-store [coeffects]
  (assoc coeffects :local-store @storage/local-store))

(def local-store ::local-store)
(rf/reg-cofx local-store
             read-local-store)

(comment
  ((:before (rf/inject-cofx read-map-from-location)) {})
  ((:before (rf/inject-cofx local-store)) {}))
