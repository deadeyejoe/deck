(ns conclave.layout.specs
  (:require [conclave.tiles.core :as tiles]
            [conclave.specs :as specs]
            [clojure.spec.alpha :as s]))

(s/def ::name (s/and string?
                     not-empty))
(s/def ::code (s/and string?
                     not-empty))
(s/def ::radius pos-int?)

(s/def ::tile-map (s/map-of ::specs/coordinate ::tiles/instance))

(s/def ::fixed-tiles ::tile-map)
(s/def ::hyperlane-tiles ::tile-map)
(s/def ::home-tiles ::tile-map)
(s/def ::blank-coordinates ::specs/coordinates)

(s/def ::type-counts (s/map-of ::tiles/type pos-int?))
(s/def ::tts-fingerprint string?)

(s/def ::player-key keyword?)
(s/def ::size pos-int?)
(s/def ::home ::specs/coordinate)
(s/def ::slice (s/keys :req-un [::player-key
                                ::size
                                ::type-counts
                                ::specs/coordinates]
                       :opt-un [::home
                                ::blocking-tile]))
(s/def ::slices (s/map-of ::player-key ::slice))

(s/def ::proto (s/keys :req-un [::name
                                ::code
                                ::radius
                                ::fixed-tiles
                                ::home-tiles
                                ::type-counts]
                       :opt-un [::hyperlane-tiles
                                ::blank-coordinates]))

(s/def ::instance (s/merge
                   ::proto
                   (s/keys :opt-un [::slices
                                    ::tts-fingerprint])))
