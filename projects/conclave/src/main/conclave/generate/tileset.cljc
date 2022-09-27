(ns conclave.generate.tileset
  (:require [conclave.tiles.core :as tiles]
            [conclave.generate.balance :as balance]
            [deck.random.interface :as random]
            [medley.core :as medley]))

(defn available-tiles [{:keys [fixed-tiles] :as layout} default-set]
  (remove (comp (->> fixed-tiles
                     (vals)
                     (map :key)
                     (set))
                :key)
          default-set))

(defn init-tileset [{{:keys [pok]} :options
                     :keys [layout] :as context}]
  (assoc context :tileset {:available (available-tiles layout
                                                       (if pok
                                                         tiles/default-set
                                                         tiles/default-base-game))
                           :red []
                           :blue []}))

(defn add-wormholes [{:keys [available] :as tileset}]
  (let [{wormholes true others false} (group-by tiles/wormhole? available)
        {:keys [red blue]} (group-by :type wormholes)]
    (-> tileset
        (assoc :available others)
        (update :red into red)
        (update :blue into blue))))

(defn add-legendaries [{:keys [available] :as tileset}]
  (let [{legendaries true others false} (group-by tiles/legendary? available)]
    (-> tileset
        (assoc :available others)
        (update :blue into legendaries))))

(defn ^:lazy sample-remaining [seed existing available target-number]
  (map
   (partial into existing)
   (random/sample-generator (- target-number
                               (count existing))
                            seed
                            available)))

(defn fill-remaining [{{:keys [available red blue]} :tileset
                       {:keys [type-counts]} :layout
                       {:keys [map-balance seed]} :options
                       :as context}]
  (let [{available-red :red available-blue :blue} (group-by :type available)
        {target-red :red target-blue :blue} type-counts
        balance-predicate (balance/tile-set-pred map-balance type-counts available)]
    (assoc context :tileset
           (->> (map concat
                     (sample-remaining seed red available-red target-red)
                     (sample-remaining seed blue available-blue target-blue))
                (medley/find-first balance-predicate)))))

(def steps
  [{:name ::init-tileset
    :exec init-tileset}
   {:name ::add-wormholes
    :when [:include-wormholes]
    :exec #(update % :tileset add-wormholes)}
   {:name ::add-legendaries
    :when #{:pok :include-legendaries}
    :exec #(update % :tileset add-legendaries)}
   {:name ::fill-remaining
    :exec fill-remaining}])
