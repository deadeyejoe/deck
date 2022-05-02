(ns conclave.map.serialization
  (:require [conclave.map.beta.build :as build]
            [superstring.core :as str]
            [conclave.utils.hex :as hex]
            [conclave.tiles.core :as tile]
            [medley.core :as medley]
            [goog.crypt.base64 :as b64]
            [cognitect.transit :as t]))

(defn tile-map->coordinate-spiral [tile-map]
  (->> tile-map
       keys
       (map hex/ring)
       (apply max)
       (hex/map-coordinates)))

(defn tile->tts [{:keys [key rotation] :as tile}]
  (cond
    (nil? tile) "0"
    (tile/home? tile) "0"
    (tile/hyperlane? tile) (str (name key) rotation)
    :else (name key)))

(defn serialize-tts [{:keys [tiles] :as _galaxy-map}]
  (->> (tile-map->coordinate-spiral tiles)
       (drop 1) ;; doesn't include origin (?)
       (map tiles)
       (map tile->tts)
       (interpose " ")
       (apply str)))

(def empty-place "X")
(def empty-place? #{empty-place})

(defn serialize-tile [{:keys [key rotation] :as tile}]
  (cond
    (nil? tile) empty-place
    (tile/home? tile) empty-place
    (tile/hyperlane? tile) (str (name key) rotation)
    :else (name key)))

(defn serialize-tiles [{:keys [tiles] :as _galaxy-map}]
  (->> (tile-map->coordinate-spiral tiles)
       (map tiles)
       (map serialize-tile)
       (interpose " ")
       (apply str)))

(defn serialize [{:keys [layout] :as galaxy-map}]
  (let [writer (t/writer :json)
        compact-map {:version 1
                     :tiles (serialize-tiles galaxy-map)
                     :layout (:code layout)}]
    (->> (t/write writer compact-map)
         (b64/encodeString))))

(defn resolve-key [key-str]
  ;;TODO handle hyperlane orientation
  (tile/key->tile (keyword key-str)))

(defn deserialize-tiles [tile-string]
  (let [coordinate-spiral (hex/map-coordinates 4)]
    (->> (str/split tile-string #" ")
         (map vector coordinate-spiral)
         (into {})
         (medley/remove-vals empty-place?)
         (medley/map-vals resolve-key))))

(defn decode [string]
  (let [reader (t/reader :json)]
    (->> string
         (b64/decodeString)
         (t/read reader))))

(defn deserialize [string]
  (-> string
      (decode)
      :tiles
      (deserialize-tiles)
      (build/from-map)))

(comment
  (try
    (let [sample-map (build/from-layout "ABCDE")]
      (= sample-map
         (-> sample-map
             (serialize)
             (deserialize))))
    (catch js/Error e (js/console.log e))))
