(ns conclave.handlers
  (:require [conclave.coeffects :as cofx]
            [conclave.db :as db]
            [conclave.generate.core :as generate]
            [conclave.interceptors :as ix]
            [conclave.map.core :as map]
            [conclave.storage :as storage]
            [conclave.worker.client :as worker]
            [deck.random.interface :as random]
            [re-frame.core :as rf]))

(declare start-tutorial load-external-map load-internal-map)

(def initialize ::initialize)
(rf/reg-event-fx
 initialize
 [(rf/inject-cofx cofx/read-map-from-location) (rf/inject-cofx cofx/local-store)]
 (fn [{:keys [layout-and-map-from-location local-store] :as _cofx} [_en _seed]]
   {:db (db/initialize)
    :fx (cond
          layout-and-map-from-location [[:dispatch [load-external-map layout-and-map-from-location]]]
          (storage/has-maps? local-store) [[:dispatch [load-internal-map (storage/retrieve-map local-store)]]]
          :else [[:dispatch [start-tutorial]]])}))

(def start-tutorial ::start-tutorial)
(rf/reg-event-db
 start-tutorial
 (fn [db _ev]
   (assoc db :tutorial {})))

(def location-changed ::location-changed)
(rf/reg-event-fx
 location-changed
 [(rf/inject-cofx cofx/read-map-from-location)]
 (fn [{:keys [map-from-location] :as _cofx} _ev]
   (when map-from-location
     {:fx [[:dispatch [load-external-map map-from-location]]]})))

(def load-external-map ::load-external-map)
(rf/reg-event-db
 load-external-map
 [ix/store-map-locally]
 (fn [db [_en {:keys [map layout] :as _external-map}]]
   (-> db
       (db/set-map map)
       (db/set-layout layout))))

(def load-internal-map ::load-internal-map)
(rf/reg-event-db
 load-internal-map
 [ix/write-map-to-location]
 (fn [db [_en {:keys [index map layout] :as _internal-map-entry}]]
   (tap> [::load-internal _internal-map-entry])
   (-> db
       (db/set-map map)
       (db/set-layout layout)
       (assoc :storage-index index))))

(def map-generated ::map-generated)
(rf/reg-event-db
 map-generated
 [ix/write-map-to-location ix/store-map-locally]
 (fn [db [_en {:keys [map layout-code] :as _worker-result}]]
   (-> db
       (db/finished!)
       (db/set-map map)
       (db/set-layout-from-code layout-code))))

(def navigate-map ::navigate-map)
(rf/reg-event-fx
 navigate-map
 [(rf/inject-cofx cofx/local-store)]
 (fn [{:keys [local-store db] :as _cofx} [_en direction quantity]]
   (let [current-index (:storage-index db)
         new-index (case direction
                     :next (+ current-index quantity)
                     :previous (- current-index quantity))
         retrieved-map-entry (storage/retrieve-map local-store new-index)]
     (when retrieved-map-entry {:fx [[:dispatch [load-internal-map retrieved-map-entry]]]}))))

(comment
  (rf/dispatch [navigate-map :next])
  (rf/dispatch [navigate-map :previous]))

(def clear-local-store ::clear-local-store)
(rf/reg-event-fx
 clear-local-store
 (fn [{:keys [db] :as _cofx} _ev]
   (storage/clear!)
   {:db (dissoc db :map :storage-index :storage-total)}))

(def set-seed ::set-seed)
(rf/reg-event-db
 set-seed
 (fn [db [_en seed]]
   (assoc db :seed seed)))

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

(defn sync-generate [{:keys [seed selected-layout] :as db}]
  (let [generated (-> (generate/generate selected-layout {:seed seed})
                      :galaxy-map)]
    (db/set-map db generated)))

(defn async-generate [{:keys [seed selected-layout] :as db}]
  (worker/spawn {:action :generate :seed seed :layout selected-layout}
                {:on-result #(rf/dispatch [map-generated %])
                 :on-error #(rf/dispatch [stop-processing])})
  (-> db
      (db/processing!)))

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

(def set-overlay ::set-overlay)
(rf/reg-event-db
 set-overlay
 (fn [db [_ new-mode]]
   (db/toggle-overlay db new-mode)))

(def set-highlight ::set-highlight)
(rf/reg-event-db
 set-highlight
 (fn [db [_ mode]]
   (assoc db :highlight-mode mode)))

(def set-value-mode ::set-value-mode)
(rf/reg-event-db
 set-value-mode
 (fn [{:keys [value-mode] :as db} [_ mode]]
   (assoc db :value-mode (or mode
                             ({:optimal :normal
                               :normal :optimal} value-mode)))))

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
 (fn [{:keys [layout] :as db} [_en player-key]]
   (let [slice (get-in layout [:slices player-key :coordinates])]
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

(def select-layout ::select-layout)
(rf/reg-event-db
 select-layout
 (fn [db [_en code]]
   (db/set-selected-layout db code)))
