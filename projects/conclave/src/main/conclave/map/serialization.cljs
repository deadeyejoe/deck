(ns conclave.map.serialization
  (:require [conclave.layout.core :as layout]
            [conclave.layout.directory :as directory]
            [conclave.map.core :as map]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [cognitect.transit :as t]
            [goog.crypt.base64 :as b64]
            [medley.core :as medley]
            [superstring.core :as str]))

;; Serialize ===========================================

(defn tile-map->coordinate-spiral [tile-map]
  (->> tile-map
       keys
       (map hex/ring)
       (apply max)
       (hex/map-coordinates)))

;; Serialize TTS

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

;; Serialize Conclave

(def empty-place "X")
(def empty-place? #{empty-place})
(def not-empty-place? (complement empty-place?))

(defn serialize-tile [{:keys [key rotation] :as tile}]
  (cond
    (nil? tile) empty-place
    (tile/hyperlane? tile) (str (name key) rotation)
    :else (name key)))

(defn serialize-tiles [{:keys [tiles] :as _galaxy-map}]
  (->> (tile-map->coordinate-spiral tiles)
       (map tiles)
       (map serialize-tile)
       (interpose " ")
       (apply str)))

(defn serialize-player [{:keys [name race] :as _player}]
  (str (b64/encodeString (or name empty-place))
       " "
       (or race empty-place)))

(defn serialize-players [galaxy-map]
  (->> (map/players galaxy-map)
       (map serialize-player)
       (interpose " ")
       (apply str)))

(defn serialize [galaxy-map]
  (let [writer (t/writer :json)
        compact-map (cond-> {:v 1
                             :t (serialize-tiles galaxy-map)}
                      (map/players-customized? galaxy-map)
                      (assoc :p (serialize-players galaxy-map)))]
    (->> (t/write writer compact-map)
         (b64/encodeString))))

;; Deserialize ===========================================

(defn resolve-key [coordinate key-str]
  (cond
    (str/starts-with? key-str "p") (tile/blank-home-tile (keyword key-str))
    (= 4 (count key-str)) (let [tile-key (str/substring key-str 0 3)
                                tile-rotation (js/parseInt (str/substring key-str 3 4))]
                            (tile/hyperlane-tile {:key (keyword tile-key)
                                                  :coordinate coordinate
                                                  :rotation tile-rotation}))
    :else (tile/key->tile (keyword key-str))))

(comment
  (resolve-key [0 0 0] "18")
  (resolve-key [0 0 0] "88B5"))

;; TTS Deserialize

(defn infer-layout [tts-string]
  (->> (str/split tts-string #" ")
       (map (fn [s]
              (if (= "0" s) "0" "1")))
       (apply str)
       (directory/tts-fingerprint->layout)))

(defn deserialize-tts-tiles [tts-string]
  (let [coordinate-spiral (drop 1 (hex/map-coordinates 4))]
    (->> (str/split tts-string #" ")
         (map vector coordinate-spiral)
         (into {})
         (medley/remove-vals #{"0"})
         (medley/map-kv-vals resolve-key))))

;; Conclave Deserialize

(defn deserialize-tts [tts-string layout]
  (map/import-coordinate-map (map/new layout)
                             (deserialize-tts-tiles tts-string)))

(defn infer-layout-conclave [string]
  (->> (str/split string #" ")
       (drop 1)
       (map (fn [s]
              (if (or (= "X" s)
                      (str/starts-with? s "p"))
                "0" "1")))
       (apply str)
       (directory/tts-fingerprint->layout)))

(defn deserialize-tiles [tile-string]
  (let [coordinate-spiral (hex/map-coordinates 4)]
    (->> (str/split tile-string #" ")
         (map vector coordinate-spiral)
         (into {})
         (medley/remove-vals empty-place?)
         (medley/map-kv-vals resolve-key))))

(defn decode [string]
  (let [reader (t/reader :json)]
    (->> string
         (b64/decodeString)
         (t/read reader))))

(defn deserialize-player [key [encoded-name race]]
  (let [decoded-name (b64/decodeString encoded-name)]
    (cond-> {:key key}
      (not-empty-place? decoded-name) (assoc :name decoded-name)
      (not-empty-place? race) (assoc :race (parse-long race)))))

(defn deserialize-players [layout players-string]
  (let [player-keys (layout/player-keys layout)]
    (->> (str/split players-string #" ")
         (partition 2)
         (map deserialize-player player-keys)
         (medley/index-by :key))))

(defn deserialize [string]
  (let [decoded (decode string)
        tile-string (or (get decoded :tiles)
                        (get decoded :t))
        players-string (get decoded :p)
        layout (infer-layout-conclave tile-string)]
    {:layout layout
     :map (cond-> (map/new layout)
            :always (map/import-coordinate-map (deserialize-tiles tile-string))
            (str/some? players-string) (map/import-player-map (deserialize-players layout players-string)))}))

(comment
  (let [players {:P1 {:key :P1
                      :name "Joe"
                      :race 4}
                 :P2 {:key :P2
                      :race 6}
                 :P3 {:key :P3
                      :name "Mark"}
                 :P4 {:key :P4}}
        layout (directory/code->layout "4p")
        serialized (serialize-players {:players players})
        deserialized (deserialize-players layout serialized)]
    [(= players deserialized)]))
