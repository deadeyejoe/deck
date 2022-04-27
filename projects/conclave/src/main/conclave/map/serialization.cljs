(ns conclave.map.serialization
  (:require [conclave.map.beta.build :as build]
            [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [superstring.core :as str]
            [conclave.utils.hex :as hex]
            [conclave.tiles.core :as tile]
            [medley.core :as medley]
            [goog.crypt.base64 :as b64]
            [cognitect.transit :as t]))

(defn serialize-tts [{coordinate->tile :tiles
                      {:keys [radius]} :layout
                      :as _galaxy-map}]
  (let [coordinate-spiral (hex/map-coordinates radius)
        tile->tile-number (fn [{:keys [key] :as tile}]
                            (if ((some-fn nil? tile/home?) tile)
                              "0"
                              (name key)))]
    (->> coordinate-spiral
         (drop 1) ;; doesn't include origin (?)
         (map coordinate->tile)
         (map tile->tile-number)
         (interpose " ")
         (apply str))))

(def empty-place "X")
(def empty-place? #{empty-place})

(defn serialize-tile [{:keys [key] :as tile}]
  (if (or (nil? tile) (tile/home? tile))
    empty-place
    ;;TODO handle orientation of hyperlanes
    (name key)))

(defn serialize-tiles [{coordinate->tile :tiles
                        {:keys [radius]} :layout
                        :as _galaxy-map}]
  (let [coordinate-spiral (hex/map-coordinates radius)]
    (->> coordinate-spiral
         (map coordinate->tile)
         (map serialize-tile)
         (interpose " ")
         (apply str))))

(defn serialize [{:keys [layout] :as galaxy-map}]
  (let [writer (t/writer :json)
        compact-map {:version 1
                     :tiles (serialize-tiles galaxy-map)
                     :layout (:code layout)}]
    (->> (t/write writer compact-map)
         (b64/encodeString))))

(defn resolve-key [key-str]
  ;;TODO handle hyperlane orientation
  (tile/key->tiles (keyword key-str)))

(defn deserialize-tiles [tile-string]
  (let [coordinate-spiral (hex/map-coordinates 4)]
    (->> (str/split tile-string #" ")
         (map vector coordinate-spiral)
         (into {})
         (medley/remove-vals empty-place?)
         (medley/map-vals resolve-key))))

(defn rehydrate [{:keys [layout tiles] :as compact-map}]
  (->
   (core/build (layout/code->layout layout))
   (core/import-coordinate-map tiles)
   (build/enrich)))

(defn decode [string]
  (let [reader (t/reader :json)]
    (->> string
         (b64/decodeString)
         (t/read reader))))

(defn deserialize [string]
  (-> string
      (decode)
      (update :tiles deserialize-tiles)
      (rehydrate)))

(comment
  (let [sample-map (build/create "ABCDE")]
    (= sample-map
       (-> sample-map
           (serialize)
           (deserialize)))))
