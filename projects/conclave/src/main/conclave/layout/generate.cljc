(ns conclave.layout.generate
  (:require [conclave.layout.core :as core]
            [conclave.tiles.core :as tiles]
            [deck.random.interface :as random]))

(defn generate-tileset
  ([seed] (generate-tileset seed core/default-layout))
  ([seed {{:keys [red blue]} :type-counts :as _layout}]
   (let [non-wormhole-reds (->> tiles/reds (remove :wormhole) (filter tiles/default?))
         non-wormhole-blues (->> tiles/blues (remove :wormhole) (filter tiles/default?))]
     (->> (concat tiles/wormholes-alpha
                  tiles/wormholes-beta
                  (random/sample non-wormhole-reds (- red 3) seed)
                  (random/sample non-wormhole-blues (- blue 3) seed))))))

(defn generate-coordinate-map
  ([seed] (generate-coordinate-map seed core/default-layout))
  ([seed layout]
   (merge (zipmap (random/seed-shuffle seed (free-spaces layout))
                  (random/seed-shuffle seed (generate-tileset seed layout)))
          (:fixed-tiles layout)
          (:home-tiles layout)
          (:hyperlane-tiles layout))))

(comment
  (count (generate-tileset "ABCDE"))
  (generate-coordinate-map "ABCDE"))

(defn generate-swap-list
  ([seed] (generate-swap-list seed core/default-layout))
  ([seed layout]
   (random/seed-shuffle seed
                        (-> (free-spaces layout)
                            (comb/combinations 2)))))
