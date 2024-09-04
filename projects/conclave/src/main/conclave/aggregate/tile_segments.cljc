(ns conclave.aggregate.tile-segments
  "Balance segments of the tileset by abstracting away position details"
  (:require [conclave.tiles.core :as tile]
            [clojure.spec.alpha :as s]))

(def ::id keyword?)
(def ::size nat-int?)
(def ::weights (s/map-of keyword? number?))
(def ::segment (s/keys :req-un [::id
                                ::size
                                ::weights]))


(def ::tile-array (s/coll-of ::tile/instance))
(def ::owner-mask (s/coll-of keyword?))
(def ::segments (s/coll-of ::segment))
(def ::instance (s/keys :req-un [::tile-array
                                 ::owner-mask
                                 ::segments]))




(defn init [tiles segments]
  {:tile-array tiles
   :owner-mask (into []
                     (map (fn [{:keys [id size]}] (repeat size id)))
                     segments)
   :segments segments})
(s/fdef init
  :args (s/cat :segments ::segment)
  :ret ::instance)


;; init loop
;;  - shuffle swaps
;;  - compute score
;; Loop over swaps
;;  - check constraints ('constrained' if not met)
;;  - compute scores
;;  - 'passed' if scores improve
;;  - 'failed' if scores don't improve
