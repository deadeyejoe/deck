(ns conclave.handlers
  (:require [re-frame.core :as rf]
            [conclave.coeffects :as cofx]
            [conclave.db :as db]
            [conclave.interceptors :as ix]
            [conclave.map.core :as map]
            [conclave.map.layout :as layout]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.optimization :as map.opt]
            [conclave.utils.random :as random]
            [conclave.worker.client :as worker]))

(def initialize ::initialize)
(rf/reg-event-fx
 initialize
 [(rf/inject-cofx cofx/read-map-from-location)]
 (fn [{:keys [map-from-location] :as coeffects} [_en seed]]
   {:db (if map-from-location
          (db/initialize-with-map map-from-location)
          (db/initialize (or seed
                             (random/random-seed))))}))

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
        (map.build/from-layout)
        (db/set-map db))))

(def map-generated ::map-generated)
(rf/reg-event-db
 map-generated
 [ix/write-map-to-location]
 (fn [db [_en {:keys [map] :as _worker-result}]]
   (-> db
       (db/finished!)
       (db/set-map map))))

(def stop-processing ::stop-processing)
(rf/reg-event-db
 stop-processing
 (fn [db [_en _map]]
   (db/finished! db)))

(def set-worker-mode ::set-worker-mode)
(rf/reg-event-db
 set-worker-mode
 (fn [db [_en mode]]
   (assoc db :worker-mode mode)))

(defn sync-generate [{:keys [seed] :as db}]
  (let [galaxy-map (map.build/from-layout seed)
        swaps (layout/generate-swap-list seed)
        [new-map _ _] (map.opt/optimize galaxy-map swaps)]
    (db/set-map db new-map)))

(defn async-generate [{:keys [seed layout] :as db}]
  (worker/spawn {:action :generate :seed seed :layout layout}
                {:on-result #(rf/dispatch [map-generated %])
                 :on-error #(rf/dispatch [stop-processing])})
  (db/processing! db))

(def generate-map ::generate-map)
(rf/reg-event-db
 generate-map
 (fn [{:keys [worker-mode] :as db} [_en mode-override]]
   (let [mode (or mode-override worker-mode)]
     (cond
       (= :sync mode)      (sync-generate db)
       (db/processing? db) db
       :else               (async-generate db)))))

(def random-map ::random-map)
(rf/reg-event-fx
 random-map
 (fn [{:keys [db] :as _ctx} _ev]
   {:db (assoc db :seed (random/random-seed))
    :fx [[:dispatch [generate-map :async]]]}))

(defn sync-optimize [{:keys [map seed] :as db}]
  (let [swaps (layout/generate-swap-list seed)
        [new-map _ _] (map.opt/optimize map swaps)]
    (db/set-map db new-map)))

(defn async-optimize [{:keys [map seed] :as db}]
  (worker/spawn {:action :optimize :map map :seed seed}
                {:on-result #(rf/dispatch [map-generated %])
                 :on-error #(rf/dispatch [stop-processing])})
  (db/processing! db))

(def optimize-map ::optimize-map)
(rf/reg-event-db
 optimize-map
 (fn [{:keys [worker-mode _seed] :as db} _ev]
   (cond
     (= :sync worker-mode) (sync-optimize db)
     (db/processing? db)   db
     :else     (async-optimize db))))

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
 (fn [{:keys [selected] :as db} [_en coordinate]]
   (if (= selected coordinate)
     (dissoc db :selected)
     (assoc db :selected coordinate))))

(def toggle-player-edit ::toggle-player-edit)
(rf/reg-event-db
 toggle-player-edit
 (fn [db [_en]]
   (update db :player-edit not)))

(def set-player-name ::set-player-name)
(rf/reg-event-db
 set-player-name
 (fn [db [_en player-key name]]
   (db/update-player-name db player-key name)))

(def set-player-race ::set-player-race)
(rf/reg-event-db
 set-player-race
 (fn [db [_en player-key race]]
   (db/update-player-race db player-key race)))

(def swap-players ::swap-players)
(rf/reg-event-db
 swap-players
 (fn [db [_en pk1 pk2]]
   (db/swap-players db pk1 pk2)))

(def set-layout ::set-layout)
(rf/reg-event-db
 set-layout
 (fn [db [_en code]]
   (assoc db :layout (layout/code->layout code))))
