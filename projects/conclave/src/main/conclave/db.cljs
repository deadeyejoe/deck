(ns conclave.db
  (:require [conclave.generate.options :as options]
            [conclave.layout.directory :as directory]
            [conclave.layout.specs :as layout.specs]
            [conclave.map.core :as map]
            [conclave.map.specs :as map.specs]
            [conclave.player :as player]
            [conclave.specs :as specs]
            [clojure.spec.alpha :as s]))

(s/def ::map ::map.specs/instance)
(s/def ::layout ::layout.specs/instance)
(s/def ::options ::options/instance)
(def overlay-modes [:none
                    :tile-number
                    :coordinates
                    :distance-score
                    :frontier
                    :legendary
                    :res-inf
                    :ring
                    :tech
                    :trait
                    :wormhole])
(s/def ::overlay-mode (set overlay-modes))

(def highlight-modes [:single
                      :adjacent
                      :slice])
(s/def ::highlight-mode (set highlight-modes))
(s/def ::highlight-set (s/coll-of ::specs/coordinate))
(s/def ::hovered ::specs/coordinate)
(s/def ::selected ::specs/coordinate)

(s/def ::processing boolean?)
(s/def ::worker-mode #{:async :sync})

(s/def ::player-edit boolean?)
(s/def ::players (s/map-of ::player/key
                           ::player/instance))

(s/def ::storage-index nat-int?)
(s/def ::storage-total nat-int?)

(s/def ::db (s/keys :req-un [::overlay-mode
                             ::highlight-mode
                             ::worker-mode
                             ::player-edit
                             ::options]
                    :opt-un [::map
                             ::layout
                             ::players
                             ::hovered
                             ::selected
                             ::storage-index
                             ::processing
                             ::storage-total]))

(def default-flags
  {:player-edit false
   :worker-mode :async
   :overlay-mode :none
   :highlight-mode :single})

(defn initialize [options]
  (merge
   {:options (or (not-empty options)
                 (assoc (options/init-db) :optimal-values true))}
   default-flags))

(defn set-map [db new-map]
  (assoc db :map new-map))

(defn set-layout [db layout]
  (assoc db :layout layout))

(defn set-layout-from-code [db layout-code]
  (assoc db :layout (directory/code->layout layout-code)))

(defn processing! [db]
  (assoc db :processing true))

(defn processing? [db]
  (:processing db))

(defn finished! [db]
  (assoc db :processing false))

(defn toggle-overlay [{:keys [overlay-mode] :as db} new-mode]
  (assoc db :overlay-mode
         (if (= overlay-mode new-mode)
           :none
           new-mode)))

(defn highlight-set [{:keys [layout map highlight-mode] :as _db} focus-coordinate]
  (case highlight-mode
    :adjacent (into #{focus-coordinate} (map/adjacent layout map focus-coordinate))
    :slice (into #{focus-coordinate} (get-in map [:slices focus-coordinate]))
    #{focus-coordinate}))

(defn update-player-name [db player-key player-name]
  (assoc-in db [:players player-key :name] player-name))

(defn update-player-race [db player-key player-race]
  (assoc-in db [:players player-key :race] player-race))

(defn selected-races [{:keys [players] :as _db}]
  (keep (comp :race val) players))

(defn delete-player [db player-key]
  (update db :players dissoc player-key))

(defn swap-players [db pk1 pk2]
  (let [p1 (get-in db [:players pk1])
        p2 (get-in db [:players pk2])]
    (assoc db
           pk1 p2
           pk2 p1)))

(defn set-generation-option [db option-kw option-value]
  (assoc-in db [:options option-kw] option-value))

(defn toggle-generation-option [db option-kw]
  (update-in db [:options option-kw] not))

(defn generation-option [db option-kw]
  (get-in db [:options option-kw]))

(defn- pok-layout-selected? [db]
  (-> (get-in db [:options :selected-layout])
      (directory/code->layout)
      :pok))

(defn ensure-layout-pok [db]
  (if (not (generation-option db :pok))
    (cond-> db
      (pok-layout-selected? db) (set-generation-option :selected-layout directory/default-layout-code)
      :always (set-generation-option :include-legendaries false)
      :always (set-generation-option :legendaries-in-equidistants false))
    db))
