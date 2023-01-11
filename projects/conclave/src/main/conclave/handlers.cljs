(ns conclave.handlers
  (:require [conclave.coeffects :as cofx]
            [conclave.db :as db]
            [conclave.generate.core :as generate]
            [conclave.interceptors :as ix]
            [conclave.layout.directory :as directory]
            [conclave.storage :as storage]
            [conclave.worker.client :as worker]
            [re-frame.core :as rf]
            [conclave.map.core :as map]))

(declare start-tutorial load-external-map load-internal-map generate-map)

(def initialize ::initialize)
(rf/reg-event-fx
 initialize
 [(rf/inject-cofx cofx/read-map-from-location) (rf/inject-cofx cofx/local-store)]
 (fn [{:keys [layout-and-map-from-location local-store] :as _cofx} [_en]]
   (let [options (storage/retrieve-options local-store)]
     {:db (db/initialize options)
      :fx (cond
            layout-and-map-from-location [[:dispatch [load-external-map layout-and-map-from-location]]]
            (storage/has-maps? local-store) [[:dispatch [load-internal-map (storage/retrieve-map local-store)]]]
            :else [[:dispatch [start-tutorial]]])})))

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
 (fn [db [_en [{:keys [map layout] :as _internal-map-entry} index total]]]
   (-> db
       (db/set-map map)
       (db/set-layout layout)
       (assoc :storage-index index)
       (assoc :storage-total total))))

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
         retrieved-map-details (storage/retrieve-map local-store new-index)]
     (when retrieved-map-details {:fx [[:dispatch [load-internal-map retrieved-map-details]]]}))))

(comment
  (rf/dispatch [navigate-map :next])
  (rf/dispatch [navigate-map :previous]))

(def clear-local-store ::clear-local-store)
(rf/reg-event-fx
 clear-local-store
 (fn [{:keys [db] :as _cofx} _ev]
   (storage/clear!)
   {:db (dissoc db :map :storage-index :storage-total)}))

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

(defn sync-generate [{{:keys [selected-layout] :as options} :options :as db}]
  (let [layout (directory/code->layout selected-layout)
        generated (-> (generate/generate layout options)
                      :galaxy-map)]
    (db/set-map db generated)))

(defn async-generate [{{:keys [selected-layout] :as options} :options :as db}]
  (let [layout (directory/code->layout selected-layout)]
    (worker/spawn {:action :generate :layout layout :options options}
                  {:on-result #(rf/dispatch [map-generated %])
                   :on-error #(rf/dispatch [stop-processing])}))
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

(def start-player-edit ::start-player-edit)
(rf/reg-event-db
 start-player-edit
 (fn [{:keys [map] :as db} _ev]
   (-> db
       (assoc :player-edit true)
       (assoc :player-backup (map/player-map map)))))

(def cancel-player-edit ::cancel-player-edit)
(rf/reg-event-db
 cancel-player-edit
 (fn [{:keys [player-backup] :as db} _ev]
   (-> db
       (assoc :player-edit false)
       (update :map map/import-player-map player-backup)
       (dissoc :player-backup))))

(def confirm-player-edit ::confirm-player-edit)
(rf/reg-event-db
 confirm-player-edit
 [ix/write-map-to-location ix/store-map-locally]
 (fn [db _ev]
   (-> db
       (assoc :player-edit false)
       (dissoc :player-backup))))

(def set-player-name ::set-player-name)
(rf/reg-event-db
 set-player-name
 (fn [db [_en player-key name]]
   (update db :map map/set-player-name player-key name)))

(def set-player-race ::set-player-race)
(rf/reg-event-db
 set-player-race
 (fn [db [_en player-key race]]
   (update db :map map/set-player-race player-key race)))

(def swap-players ::swap-players)
(rf/reg-event-db
 swap-players
 (fn [db [_en pk1 pk2]]
   (update db :map map/swap-players pk1 pk2)))

(def set-generation-option ::set-generation-option)
(rf/reg-event-db
 set-generation-option
 [ix/store-options-locally]
 (fn [db [_en option-name option-value]]
   (db/set-generation-option db option-name option-value)))

(def toggle-generation-option ::toggle-generation-option)
(rf/reg-event-db
 toggle-generation-option
 [ix/store-options-locally]
 (fn [db [_en option-name]]
   (db/toggle-generation-option db option-name)))

(def toggle-pok ::toggle-pok)
(rf/reg-event-db
 toggle-pok
 [ix/store-options-locally]
 (fn [db _ev]
   (-> db
       (db/toggle-generation-option :pok)
       (db/ensure-layout-pok))))

(def show-modal ::show-modal)
(rf/reg-event-db
 show-modal
 (fn [db [_en modal-key]]
   (db/show-modal db modal-key)))

(def hide-modal ::hide-modal)
(rf/reg-event-db
 hide-modal
 (fn [db _ev]
   (db/hide-modal db)))
