(ns conclave.coeffects
  (:require [conclave.map.serialization :as serialization]
            [superstring.core :as str]
            [re-frame.core :as rf]))

(defn read-map [coeffects]
  (try
    (let [hash (str/substring (.-hash js/window.location) 1)
          deserialized (serialization/deserialize hash)]
      (assoc coeffects :map-from-location deserialized))
    (catch js/Error _e coeffects)))

(def read-map-from-location ::read-map-from-location)
(rf/reg-cofx read-map-from-location
             read-map)
