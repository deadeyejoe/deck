(ns conclave.view.tutorial.handlers
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.db :as db]
            [clojure.spec.alpha :as s]
            [re-frame.core :as rf]))

(def elements [:layout-select :generate-button :tutorial-button :player-summary :overlay-button :tile-highlight])
(def stages [:welcome :player :res-inf :map-tile])
(def stage->surface
  {:welcome #{:layout-select :generate-button}
   :player #{:player-summary}})

(s/def ::element (set elements))
(s/def ::surfaced (s/coll-of ::element :kind set?))
(s/def ::highlight ::element)
(s/def ::stage (set stages))
(s/def ::db (s/keys :req-un [::stage]
                    :opt-un [::surfaced
                             ::highlight]))

(defn previous-stage [current-stage]
  (-> (split-with (complement #{current-stage}) stages)
      first
      last))

(defn next-stage [current-stage]
  (-> (split-with (complement #{current-stage}) stages)
      second
      second))

(comment
  (previous-stage :welcome)
  (next-stage :welcome)
  (next-stage :map-tile))

(defn enter-stage [tutorial stage]
  (assoc tutorial
         :stage stage
         :surfaced (stage->surface stage)))

(def start ::start)
(rf/reg-event-db
 start
 (fn [{:keys [map] :as db} _ev]
   (assoc db :tutorial {})))

(def highlight-element ::highlight-element)
(rf/reg-event-db
 highlight-element
 [(rf/path [:tutorial])]
 (fn [tutorial [_en element]]
   (assoc tutorial :highlight element)))

(def clear-highlight ::clear-highlight)
(rf/reg-event-db
 clear-highlight
 [(rf/path [:tutorial])]
 (fn [tutorial [_en]]
   (dissoc tutorial :highlight)))

(def previous-step ::previous-step)
(rf/reg-event-db
 previous-step
 [(rf/path [:tutorial])]
 (fn [{:keys [stage] :as tutorial} [_en]]
   (enter-stage tutorial (previous-stage stage))))

(def next-step ::next-step)
(rf/reg-event-fx
 next-step
 (fn [{{:keys [tutorial map] :as db} :db} [_en]]
   (let [next-stage (next-stage (:stage tutorial))]
     (merge
      {:db (update db :tutorial enter-stage next-stage)}
      (when (and (= :player next-stage) (not map))
        {:fx [[:dispatch [handlers/random-map]]]})))))

(def cancel ::cancel)
(rf/reg-event-db
 cancel
 (fn [db _ev]
   (dissoc db :tutorial)))
