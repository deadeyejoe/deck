(ns conclave.storage
  (:require [conclave.map.specs :as map.specs]
            [conclave.map.serialization :as serialization]
            [alandipert.storage-atom :as sa]
            [clojure.spec.alpha :as s]))

(s/def ::index nat-int?)
(s/def ::hash string?)
(s/def ::map string?)
(s/def ::map-entry (s/keys :req-un [::index
                                    ::hash
                                    ::map]))
(s/def ::maps (s/coll-of ::map-entry :kind vector?))
(s/def ::local-storage (s/keys :req-un [::maps]))

(defonce local-store (sa/local-storage (atom {:maps []}) :conclave))

(defn clear! []
  (reset! local-store {:maps []}))

(defn ->map-entry [map]
  (let [serialized (serialization/serialize map)]
    {:hash (hash-string serialized)
     :map serialized}))

(defn match-entry? [candidate-entry {:keys [hash map] :as stored-entry}]
  (and (= (:hash candidate-entry) hash)
       (= (:map candidate-entry) map)
       stored-entry))

(defn map-stored?
  "Checks if the map is stored, and returns the stored version if it's present."
  [{:keys [maps] :as _local-storage} candidate-map]
  (let [candidate-entry (->map-entry candidate-map)]
    (some (partial match-entry? candidate-entry) maps)))

(defn has-maps? [local-store]
  (not-empty (:maps local-store)))

(defn append [map-list new-entry]
  (conj (or map-list []) new-entry))

(defn store-map [{:keys [maps] :as local-storage} map]
  (let [new-entry (assoc (->map-entry map) :index (count maps))]
    (update local-storage :maps append new-entry)))

(defn get-map
  ([local-storage] (get-map local-storage :last))
  ([{:keys [maps] :as _local-storage} n]
   (cond (= n :last) (last maps)
         (<= n 0) (get maps 0)
         (<= (count maps) n) (last maps)
         :else (get maps n))))

(defn retrieve-map
  ([local-storage] (retrieve-map local-storage :last))
  ([local-storage n]
   (when-let [{:keys [index map]} (get-map local-storage n)]
     (assoc (serialization/deserialize map)
            :index index))))



(comment
  @local-store
  (has-maps? @local-store)
  (get-map @local-store 1))
