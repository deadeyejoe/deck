(ns conclave.map.specs
  (:require [conclave.tiles.core :as tile]
            [conclave.specs :as specs]
            [clojure.spec.alpha :as s]))

(s/def ::tiles (s/map-of ::specs/coordinate ::tile/instance))
(s/def ::tiles-reverse (s/map-of ::tile/key ::specs/coordinate))

(s/def ::distances (s/map-of ::specs/coordinate
                             (s/map-of ::specs/coordinate
                                       nat-int?)))

(s/def ::stakes (s/map-of ::specs/coordinate
                          (s/map-of ::specs/coordinate
                                    number?)))

(s/def ::instance (s/keys :req-un [::tiles
                                   ::tiles-reverse]
                          :opt-un [::distances
                                   ::stakes]))
