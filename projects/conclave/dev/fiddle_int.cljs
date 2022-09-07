(ns conclave.fiddle-int
  (:require [conclave.map.beta.build :as map.build]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.distance :as distance]
            [conclave.map.beta.optimization :as optimization]
            [conclave.map.gamma.optimization :as g-opt]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.stake :as stake]
            [conclave.map.beta.starter :as starter]
            [conclave.map.adjacent :as adjacent]
            [conclave.map.summary :as summary]
            [conclave.map.serialization :as serialize]
            [conclave.storage :as storage]
            [conclave.utils.hex :as hex]
            [conclave.map.core :as core]
            [conclave.db :as db]
            [conclave.handlers :as handlers]
            [conclave.layout.core :as layout]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as util-score]
            [clojure.math.combinatorics :as combo]
            [clojure.spec.alpha :as s]
            [deck.random.interface :as random]
            [deck.interceptor.interface :as interceptor]
            [re-frame.core :as rf]
            [re-frame.db :as rfdb]
            [medley.core :as medley]
            [taoensso.tufte :as tufte :refer-macros (profiled)]))

(def layout (layout/code->layout "8pw"))
(def seed "ABCDE")
(def swaps (layout/generate-swap-list seed layout))
(def current-map (map.build/from-layout seed layout))

(def add-foo {:enter (fn [c] (assoc c :foo 1))})

(interceptor/execute {} [add-foo])
