(ns conclave.map.beta.specs
  (:require [conclave.tiles.core :as tile]
            [conclave.map.layout :as layout]
            [clojure.spec.alpha :as s]))

(s/def ::tiles (s/map-of ::layout/coordinate ::layout/tile))
(s/def ::tiles-reverse (s/map-of ::tile/key ::layout/coordinate))

(s/def ::distances (s/map-of ::layout/coordinate
                             (s/map-of ::layout/coordinate
                                       nat-int?)))

(s/def ::stakes (s/map-of ::layout/coordinate
                          (s/map-of ::layout/coordinate
                                    number?)))

(s/def ::instance (s/keys :req-un [::tiles
                                   ::tiles-reverse]
                          :opt-un [::distances
                                   ::stakes]))
