(ns conclave.player.race
  (:require [conclave.data.races :refer [races]]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(s/def ::key (set (map :key races)))
(s/def ::index (set (map :index races)))
(s/def ::name string?)

(def directory
  (map-indexed (fn [idx race]
                 (assoc race :index idx))
               races))

(def index->race (medley/index-by :index directory))
(def key->race (medley/index-by :key directory))
