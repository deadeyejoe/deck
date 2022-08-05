(ns conclave.map.tileset
  (:require [conclave.map.core :as core]
            [conclave.map.layout :as layout]
            [conclave.tiles.core :as tiles]
            [clojure.math.combinatorics :as combo]
            [deck.random.interface :as random]))

tiles/wormholes-alpha


(defn generate-tileset
  ([seed] (generate-tileset seed layout/default-layout))
  ([seed {{:keys [red blue]} :type-counts :as _layout}]
   (let [non-wormhole-reds (->> tiles/reds (remove :wormhole) (filter tiles/default?))
         non-wormhole-blues (->> tiles/blues (remove :wormhole) (filter tiles/default?))]
     (->> (concat tiles/wormholes-alpha
                  tiles/wormholes-beta
                  (random/sample non-wormhole-reds (- red 3) seed)
                  (random/sample non-wormhole-blues (- blue 3) seed))))))
