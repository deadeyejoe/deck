(ns fiddle-balance
  (:require [conclave.aggregate.palette :as palette]
            [conclave.balance.bounds :as bounds]
            [conclave.balance.goal :as goal]
            [conclave.balance.score :as score]
            [conclave.layout.core :as layout]
            [conclave.layout.directory :as directory]
            [conclave.process.loop :as loop]
            [conclave.tiles.core :as tile]
            [conclave.tiles.set :as tile-set]
            [medley.core :as medley]))



(comment

  "Checking the effect of balance options on the tiles res/inf balance using the goals framework"
  (let [{:keys [type-counts] :as layout-6p} (directory/code->layout "6p")
        tiles tile/default-set
        bounds-for-all (bounds/list->bounds type-counts tiles)
        option->goals (->> [:extreme-resource :favour-resource :balanced :favour-influence :extreme-influence]
                           (map (juxt identity #(goal/tile-set-bounds->balance-goals % bounds-for-all)))
                           (into {}))
        [init & samples] (take 20 (tile-set/samples type-counts tiles))]
    (medley/map-vals (fn [goals-for-option]
                       {:goals goals-for-option
                        :res-inf (->> (loop/optimize {:initial {:tiles init
                                                                ;; 'score' is an awkward name, because tiles also have a
                                                                ;; concept of score (the sum of res-inf and related
                                                                ;; quantities). But this is also a score in that it's used
                                                                ;; to compare candidates in the optimization loop
                                                                :score (->> (tile-set/sum-optimal-res-inf init)
                                                                            (goal/evaluate goals-for-option))}
                                                      :combine (fn [{:keys [score] :as current} next]
                                                                 (let [next-score (->> (tile-set/sum-optimal-res-inf next)
                                                                                       (goal/evaluate goals-for-option))]
                                                                   (cond-> current
                                                                     (neg? (compare score next-score))
                                                                     (assoc :tiles next
                                                                            :score next-score))))
                                                      :halt? (comp (partial goal/satisfied? goals-for-option) :score)}
                                                     samples)
                                      :tiles
                                      tile-set/sum-optimal-res-inf)})
                     option->goals))

  "As above but just for a single option"
  (let [{:keys [type-counts] :as layout-6p} (:fixed-tiles (directory/code->layout "6p"))
        tiles tile/default-set
        bounds-for-all (bounds/list->bounds type-counts tiles)
        tile-set-balance-option :balanced

        goals (goal/tile-set-bounds->balance-goals tile-set-balance-option bounds-for-all)
        [init & samples] (take 20 (tile-set/samples type-counts tiles))]
    {:goals goals
     :res-inf (->> (loop/optimize {:initial {:tiles init
                                             :score (->> (score/tiles->scores init)
                                                         (goal/evaluate goals))}
                                   :combine (fn [{:keys [score] :as current} next]
                                              (let [next-score (->> (score/tiles->scores next)
                                                                    (goal/evaluate goals))]
                                                (cond-> current
                                                  (neg? (compare score next-score))
                                                  (assoc :tiles next
                                                         :score next-score))))
                                   :halt? (comp (partial goal/satisfied? goals) :score)}
                                  samples)
                   :tiles
                   score/tiles->scores)})
  
  "As above but for extrem"
  (let [{:keys [type-counts] :as layout-6p} (directory/code->layout "6p")
        tiles tile/default-set
        bounds-for-all (bounds/list->bounds type-counts tiles)
        tile-set-balance-option :extreme-resource

        goals (goal/tile-set-bounds->balance-goals tile-set-balance-option bounds-for-all)
        [init & samples] (take 20 (tile-set/samples type-counts tiles))]
    (-> (loop/optimize {:initial {:tiles init
                                  :score (->> (score/tiles->scores init)
                                              (goal/evaluate goals))
                                  :goals goals}
                        
                        :combine (fn [{:keys [score goals] :as current} next]
                                   (let [next-score (->> (score/tiles->scores next)
                                                         (goal/evaluate goals))]
                                     (cond-> current
                                       (neg? (compare score next-score))
                                       (assoc :tiles next
                                              :score next-score))))
                        :halt? (comp (partial goal/satisfied? goals) :score)}
                       samples)
        (update :tiles score/tiles->scores)))
  
  ;;incorporate palette
  (let [{:keys [type-counts] :as layout} (directory/code->layout "6p")
        ;; Generally the only fixed tile in a layout is mecatol, which is already
        ;; excluded from the default set, but other tiles could be fixed
        all-available-tiles (remove (partial layout/fixed-tile? layout)
                                    tile/default-set)
        ;; I considered changing this so it accounts for only the 'free' tiles;
        ;; those not fixed in the layout OR by the options (e.g. include wormholes)
        ;; but it muddies the waters a lot. The reason to do this would be to avoid
        ;; weird states like there being so few free tiles left you can't satisfy some 
        ;; extreme balance goal, but it doesn't seem that likely an occurrence, and the goal
        ;; framework should still get as close as possible
        bounds (bounds/list->bounds type-counts all-available-tiles)
        tile-set-balance-option :balanced
        goals (goal/tile-set-bounds->balance-goals tile-set-balance-option bounds)

        
        palette (-> (palette/->instance all-available-tiles)
                    (palette/select-by (some-fn tile/wormhole?)))
        [init & samples] (take 20 (palette/sample-tilesets "ABCDEFGHIJ" type-counts palette))]
    (-> (loop/optimize {:initial {:tiles init
                                  :score (->> (score/tiles->scores init)
                                              (goal/evaluate goals))}
                        :combine (fn [current next]
                                   (assoc current 
                                          :tiles next
                                          :score (->> (score/tiles->scores next)
                                                      (goal/evaluate goals))))
                        :halt? (comp (partial goal/satisfied? goals) :score)}
                       samples)
        (update :tiles score/tiles->scores)))
  )
