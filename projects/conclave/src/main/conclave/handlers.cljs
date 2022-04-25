(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.db :as db]
            [conclave.map.core :as map]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.optimization :as map.opt]
            [conclave.map.layout :as layout]
            [conclave.utils.random :as random]
            [conclave.tiles.core :as tile]
            [conclave.worker.client :as worker]))

(def initialize ::initialize)
(rf/reg-event-fx
 initialize
 (fn [_con [_en seed]]
   {:db (db/initialize seed)}))

(def set-seed ::set-seed)
(rf/reg-event-db
 set-seed
 (fn [db [_en seed]]
   (assoc db :seed seed)))

(def raw-map ::raw-map)
(rf/reg-event-db
 raw-map
 (fn [{:keys [seed] :as db} _ev]
   (->> seed
        (map.build/create)
        (db/set-map db))))

(def map-generated ::map-generated)
(rf/reg-event-db
 map-generated
 (fn [db [_en {:keys [map] :as worker-result}]]
   (-> db
       (db/finished!)
       (db/set-map map))))

(def stop-processing ::stop-processing)
(rf/reg-event-db
 stop-processing
 (fn [db [_en map]]
   (db/finished! db)))

(def set-worker-mode ::set-worker-mode)
(rf/reg-event-db
 set-worker-mode
 (fn [db [_en mode]]
   (assoc db :worker-mode mode)))

(defn sync-generate [{:keys [seed] :as db}]
  (let [galaxy-map (map.build/create seed)
        swaps (map/generate-swap-list galaxy-map seed)
        [new-map _ _] (map.opt/optimize galaxy-map swaps)]
    (db/set-map db new-map)))

(defn async-generate [{:keys [seed] :as db}]
  (do
    (worker/spawn {:action :generate :seed seed}
                  {:on-result #(rf/dispatch [map-generated %])
                   :on-error #(rf/dispatch [stop-processing])})
    (db/processing! db)))

(def generate-map ::generate-map)
(rf/reg-event-db
 generate-map
 (fn [{:keys [worker-mode seed] :as db} [_en mode-override]]
   (let [mode (or mode-override worker-mode)]
     (cond
       (= :sync mode)      (sync-generate db)
       (db/processing? db) db
       :when-async-ready   (async-generate db)))))

(def random-map ::random-map)
(rf/reg-event-fx
 random-map
 (fn [{:keys [db] :as ctx} _ev]
   {:db (assoc db :seed (random/random-seed))
    :fx [[:dispatch [generate-map :async]]]}))

(defn sync-optimize [{:keys [map seed] :as db}]
  (let [swaps (map/generate-swap-list map seed)
        [new-map _ _] (map.opt/optimize map swaps)]
    (db/set-map db new-map)))

(defn async-optimize [{:keys [map seed] :as db}]
  (do
    (worker/spawn {:action :optimize :map map :seed seed}
                  {:on-result #(rf/dispatch [map-generated %])
                   :on-error #(rf/dispatch [stop-processing])})
    (db/processing! db)))

(def optimize-map ::optimize-map)
(rf/reg-event-db
 optimize-map
 (fn [{:keys [worker-mode seed] :as db} _ev]
   (cond
     (= :sync worker-mode) (sync-optimize db)
     (db/processing? db)   db
     :when-async-ready     (async-optimize db))))

(def set-overlay ::set-overlay)
(rf/reg-event-db
 set-overlay
 (fn [{:keys [overlay-mode] :as db} [_ new-mode]]
   (assoc db :overlay-mode
          (if (= overlay-mode new-mode)
            :none
            new-mode))))

(def set-highlight ::set-highlight)
(rf/reg-event-db
 set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight-mode mode)))

(def set-stake ::set-stake)
(rf/reg-event-db
 set-stake
 (fn [db [_ mode]]
   (assoc db :stake-mode mode)))

(def set-hover ::set-hover)
(rf/reg-event-db
 set-hover
 (fn [db [_name coordinate]]
   (-> db
       (assoc :hovered coordinate)
       (assoc :highlight-set
              (db/highlight-set db coordinate)))))

(def highlight-player ::highlight-player)
(rf/reg-event-db
 highlight-player
 (fn [{:keys [map] :as db} [_en player-key]]
   (let [home-coordinate (map/tile->coordinate map player-key)
         slice (get-in map [:slices home-coordinate])]
     (assoc db :highlight-set (set slice)))))

(def clear-hover ::clear-hover)
(rf/reg-event-db
 clear-hover
 (fn [db _event]
   (dissoc db :hovered :highlight-set)))

(def select-tile ::select-tile)
(rf/reg-event-db
 select-tile
 (fn [db [_en coordinate]]
   (assoc db :selected coordinate)))
