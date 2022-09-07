(ns conclave.fiddle-opt
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



(comment
  (count (layout/generate-swap-list seed layout/default-layout)))

(defn set-map [{:keys [galaxy-map] :as context}]
  (rf/dispatch [handlers/map-generated {:map galaxy-map}]))

(defn ->opt-context [galaxy-map weights swaps]
  (-> (g-opt/->context galaxy-map weights)
      (assoc :swaps swaps
             :go true)))

(def default-weights {:optimal-resources 2
                      :optimal-influence 2
                      :tech 1
                      :supernova -4})

(comment
  (score/tile-scores default-weights current-map)
  (score/compute-variance current-map)
  (score/compute-variance {:weights default-weights} current-map)
  (:score (g-opt/->context current-map default-weights))
  (-> current-map
      (g-opt/->context default-weights)
      (g-opt/perform-swap (first swaps))
      :score))

(defn opt-step [{:keys [galaxy-map weights swaps score go] :as context}]
  (if go
    (let [{opt-map :galaxy-map opt-score :score} (g-opt/optimize galaxy-map weights swaps)
          halt? (= score opt-score)]
      (doto
       (assoc context
              :galaxy-map opt-map
              :score opt-score
              :go (not halt?))
        (set-map)))
    context))

(defn lock-tiles [tile-pred {:keys [:galaxy-map] :as context}]
  (let [locked-coords (set (core/coordinates-by-tile tile-pred galaxy-map))]
    (update context :swaps #(remove (partial apply (some-fn locked-coords)) %))))

(comment
  (count swaps)
  (count (:swaps (lock-tiles tile/wormhole? (->opt-context current-map default-weights swaps))))
  (let [layout (layout/code->layout "8pw")
        seed "ABCDE"
        swaps (layout/generate-swap-list seed layout)
        current-map (map.build/from-layout seed layout)]
    (rf/dispatch [handlers/clear-local-store])
    (->> (->opt-context current-map default-weights swaps)
         (opt-step)
         (lock-tiles tile/wormhole?)
         (opt-step)
     ;;     (opt-step)
         :go)))

(def weights [{:optimal-resources 8
               :optimal-influence 8
               :tech 4
               :supernova -20
               :nebula -5
               :asteroid-field -5}
              {:optimal-resources 2
               :optimal-influence 2
               :tech 1
               :supernova -4}
              {:optimal-resources 2
               :optimal-influence 4
               :tech 1
               :supernova -4}
              {:optimal-resources 4
               :optimal-influence 2
               :tech 1
               :supernova -4}])
(comment

  (count (let [layout (layout/code->layout "8pw")
               seed "ABCDEFGHIJKL"
               swaps (layout/generate-swap-list seed layout)
               current-map (map.build/from-layout seed layout)]
           (map (fn [weight]
                  (->> (->opt-context current-map weight swaps)
                       (opt-step)))
                weights))))
