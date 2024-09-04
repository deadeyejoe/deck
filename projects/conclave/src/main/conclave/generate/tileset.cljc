(ns conclave.generate.tileset
  (:require [conclave.aggregate.palette :as palette]
            [conclave.balance.bounds :as bounds]
            [conclave.balance.goal :as goal]
            [conclave.balance.score :as score]
            [conclave.layout.core :as layout]
            [conclave.process.loop :as loop]
            [conclave.tiles.core :as tiles]))

(defn available-tiles [{:keys [pok] :as _options} layout]
  (->> (if pok
         tiles/default-set
         tiles/default-base-game)
       (remove (comp (partial layout/fixed-tile? layout)))))

(defn init [{{:keys [type-counts] :as layout} :layout
                   {:keys [include-wormholes
                           include-legendaries
                           map-balance] :as options} :options
                   :as context}]
  (let [available (available-tiles options layout)
        bounds (bounds/list->bounds type-counts available)
        goals (goal/tile-set-bounds->balance-goals map-balance bounds)
        palette (cond-> (palette/->instance available)
                  include-wormholes (palette/select-by tiles/wormhole?)
                  include-legendaries (palette/select-by tiles/legendary?))]
    (assoc context ::context 
           {:available available
            :bounds bounds
            :goals goals
            :palette palette})))

(defn do-loop [{{:keys [palette goals]} ::context
                    {:keys [type-counts]} :layout
                    {:keys [seed max-samples]} :options 
                    :as _context}]
  (let [[init & samples] (->> (palette/sample-tilesets seed type-counts palette)
                              (take max-samples))]
    (loop/optimize {:initial {:tiles init
                              :score (->> (score/tiles->scores init)
                                          (goal/evaluate goals))}
                    :combine (fn [current next]
                               (assoc current 
                                      :tiles next
                                      :score (->> (score/tiles->scores next)
                                                  (goal/evaluate goals))))
                    :choose loop/pick-higher-score
                    :halt? (comp (partial goal/satisfied? goals) :score)}
                   samples)))

(defn optimize [{{:keys [debug]} :options :as context}]
  (let [{:keys [tiles quantities ::loop/total] :as loop-result} (do-loop context)]
    (tap> [::post-optimize quantities total loop-result])
    (assoc context :tileset tiles)))

(def steps
  [{:name ::init
    :exec init} 
   {:name ::optimize
    :exec optimize}])
