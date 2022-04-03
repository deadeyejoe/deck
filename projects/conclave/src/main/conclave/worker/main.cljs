(ns conclave.worker.main
  (:require [conclave.worker.instance :as worker]
            [conclave.map.core :as map]
            [conclave.map.distance :as distance]
            [conclave.map.layout :as layout]
            [conclave.map.optimization :as opt]
            [conclave.tiles.core :as tile]
            [taoensso.tufte :as tufte :refer-macros [defnp profiled]]))

(defn progress [swaps remaining-swaps]
  (let [total (count swaps)
        remaining (count remaining-swaps)]
    {:total total
     :remaining remaining
     :done (- total remaining)
     :progress (->> (/ remaining total)
                    (* 100)
                    int
                    (- 100))}))

(defn initialize-map [seed {:keys [movement-score] :or {movement-score :static} :as opts}]
  (let [new-map (-> (map/build layout/eight-player)
                    (map/populate seed))]
    (if (= movement-score :static)
      (assoc new-map :hs-distances (distance/hs-distances new-map opts))
      new-map)))

(defnp generate [{:keys [seed limit] :or {limit 10}}]
  (let [galaxy-map (initialize-map seed {:movement-score :static})
        swaps (map/generate-swap-list galaxy-map seed)]
    (loop [[optimized remaining-swaps constraint-score variance-score] (opt/go galaxy-map swaps limit)]
      (if (seq remaining-swaps)
        (do
          (worker/respond! (merge {:state :processing
                                   :map optimized
                                   :constraint constraint-score
                                   :variance variance-score}
                                  (progress swaps remaining-swaps)))
          (recur (opt/go optimized remaining-swaps limit constraint-score variance-score)))
        {:map optimized
         :constraint constraint-score
         :variance variance-score}))))

(defn profile-request [f]
  (let [[result pstats] (profiled {} (f))]
    (assoc result
           :pstats
           (tufte/format-pstats pstats {:columns [:n-calls :p50 :mean :clock :total]}))))

(defn handler [{:keys [profile] :as request}]
  (if profile
    (profile-request #(generate request))
    (generate request)))

(defn main []
  (worker/bootstrap handler))
