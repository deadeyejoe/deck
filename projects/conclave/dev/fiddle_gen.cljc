(ns fiddle-gen
  (:require [conclave.generate.balance :as balance]
            [conclave.generate.core :as core]
            [conclave.generate.executor :as executor]
            [conclave.generate.tileset :as tileset]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [conclave.layout.directory :as directory]
            [deck.random.interface :as random]))

(->> (let [layout directory/default-layout
           options {:pok true :include-wormholes true}
           context (core/init-context layout options)]
       (executor/execute context (take 4 tileset/steps)))
     :tileset
     :final
     (tile-set/sum-optimal-res-inf))

(-> executions :tileset :available count)
