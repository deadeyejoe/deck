(ns conclave.db
  (:require [clojure.spec.alpha :as s]
            [conclave.map.beta.build :as map.build]
            [conclave.map.beta.constraint :as constraint]
            [conclave.map.beta.score :as score]
            [conclave.map.beta.specs :as map.specs]
            [conclave.map.core :as map.core]
            [conclave.map.layout :as layout]
            [conclave.player :as player]
            [medley.core :as medley]))

(s/def ::map ::map.specs/instance)
(s/def ::seed (s/and string?
                     not-empty))
(def overlay-modes [:none
                    :tile-number
                    :coordinates
                    :res-inf
                    :wormhole
                    :tech
                    :legendary
                    :distance-score
                    :tile-score
                    :tile-share
                    :highest-stake])
(s/def ::overlay-mode (set overlay-modes))

(def highlight-modes [:single
                      :adjacent
                      :slice])
(s/def ::highlight-mode (set highlight-modes))
(s/def ::highlight-set (s/coll-of ::layout/coordinate))
(s/def ::hovered ::layout/coordinate)
(s/def ::selected ::layout/coordinate)

(s/def ::processing boolean?)
(s/def ::worker-mode #{:async :sync})
(s/def ::constraint-score number?)
(s/def ::variance-score number?)

(s/def ::player-edit boolean?)
(s/def ::players (s/map-of ::player/key
                           ::player/instance))

(s/def ::storage-index nat-int?)
(s/def ::storage-total nat-int?)

(s/def ::db (s/keys :req-un [::seed
                             ::map
                             ::overlay-mode
                             ::highlight-mode
                             ::worker-mode
                             ::hovered
                             ::selected
                             ::constraint-score
                             ::variance-score
                             ::processing
                             ::player-edit]
                    :opt-un [::players
                             ::storage-index
                             ::storage-total]))

(def default-flags
  {:player-edit false
   :worker-mode :sync
   :overlay-mode :none
   :highlight-mode :single})

(defn initialize []
  (merge
   {:layout layout/default-layout}
   default-flags))

(defn set-map [db new-map]
  (-> db
      (assoc :map new-map
             :variance-score (score/compute-variance new-map)
             :constraint-score (constraint/compute-score new-map))))

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

(defn highlight-set [{:keys [map highlight-mode] :as db} focus-coordinate]
  (case highlight-mode
    :adjacent (into #{focus-coordinate} (map.core/adjacent map focus-coordinate))
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
