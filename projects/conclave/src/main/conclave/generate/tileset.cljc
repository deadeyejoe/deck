(ns conclave.generate.tileset
  (:require [conclave.generate.balance :as balance]
            [conclave.generate.loop :as loop]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [deck.random.interface :as random]))

(defn available-tiles [{:keys [fixed-tiles] :as layout} default-set]
  (remove (comp (->> fixed-tiles
                     (vals)
                     (map :key)
                     (set))
                :key)
          default-set))

(defn init-tiles [{{:keys [pok]} :options
                   :keys [layout] :as context}]
  (assoc context :tiles {:available (available-tiles layout
                                                     (if pok
                                                       tiles/default-set
                                                       tiles/default-base-game))
                         :red []
                         :blue []}))

(defn add-wormholes [{:keys [available] :as tiles}]
  (let [{wormholes true others false} (group-by tiles/wormhole? available)
        {:keys [red blue]} (group-by :type wormholes)]
    (-> tiles
        (assoc :available others)
        (update :red into red)
        (update :blue into blue))))

(defn add-legendaries [{:keys [available] :as tiles}]
  (let [{legendaries true others false} (group-by tiles/legendary? available)]
    (-> tiles
        (assoc :available others)
        (update :blue into legendaries))))

(defn ^:lazy sample-tilesets [seed
                              {target-red :red target-blue :blue :as _type-counts}
                              {:keys [available red blue] :as _tiles}]
  (let [{available-red :red available-blue :blue} (group-by :type available)]
    (map concat
         (tile-set/sample-remaining seed red available-red target-red)
         (tile-set/sample-remaining seed blue available-blue target-blue))))

(defn ->sample-context [map-balance bounds-for-available]
  {:map-balance map-balance
   :bounds-for-available bounds-for-available
   :total 0})

(defn ->next-context [{:keys [map-balance bounds-for-available] :as sample-context} next-tileset]
  (let [actual-res-inf (tile-set/sum-optimal-res-inf next-tileset)]
    (-> sample-context
        (assoc
         :quantities actual-res-inf
         :score (balance/calculate-score map-balance bounds-for-available actual-res-inf)
         :tileset next-tileset)
        (update :total inc))))

(defn halt? [{:keys [map-balance score] :as _sample-context}]
  (balance/halt-sampling? map-balance score))

(defn fill-remaining [{{:keys [available] :as tiles} :tiles
                       {:keys [type-counts]} :layout
                       {:keys [map-balance seed max-samples debug]} :options
                       :as context}]
  (let [bounds-for-available (tile-set/bounds type-counts available [:optimal-resources :optimal-influence])
        samples (->> (sample-tilesets seed type-counts tiles)
                     (take max-samples))
        {:keys [tileset quantities ::loop/total] :as loop-result}
        (loop/optimize {:initial (->sample-context map-balance bounds-for-available)
                        :combine ->next-context
                        :choose loop/pick-higher-score
                        :halt? halt?}
                       samples)]
    (when debug (tap> [::fill-remaining quantities total loop-result]))
    (assoc context :tileset tileset)))

(def steps
  [{:name ::init-tiles
    :exec init-tiles}
   {:name ::add-wormholes
    :when [:include-wormholes]
    :exec #(update % :tiles add-wormholes)}
   {:name ::add-legendaries
    :when #{:pok :include-legendaries}
    :exec #(update % :tiles add-legendaries)}
   {:name ::fill-remaining
    :exec fill-remaining}])
