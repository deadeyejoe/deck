(ns deck.timer.core
  (:require [deck.timer.utils :as utils]
            [com.rpl.specter :as sr]
            [clojure.spec.alpha :as s]))

(s/def ::id any?)
(s/def ::label string?)
(s/def ::pauseable boolean?)
(s/def ::status #{:init :running :paused})
(s/def ::time number?)
(s/def ::action #{:start :pause :resume})
(s/def ::events (s/coll-of (s/keys :req-un [::time ::action]) :kind vector?))
(s/def ::instance (s/keys :req-un [::id ::pauseable ::status ::events]
                          :opt-un [::label]))

(defn build [{:keys [id label pauseable] :or {pauseable true}}]
  {:id id
   :label (or label (str id))
   :pauseable pauseable
   :status :init
   :events []})

(comment
  (build {:id "test"})
  (build {:id "test" :pauseable false}))

(defn status? [status timer]
  (= status (:status timer)))

(def init? (partial status? :init))
(def running? (partial status? :running))
(def paused? (partial status? :paused))

(defn push [timer now action]
  (sr/setval (sr/before-index 0)
             {:time now
              :action action}
             timer))
(comment
  (sr/setval (sr/before-index 0) 1 [2 3]))

(defn start [timer now]
  (if (init? timer)
    (-> timer
        (assoc :status :running
               :start-time now)
        (push now :start))
    timer))
(s/fdef start :args (s/cat :timer ::instance
                           :now number?)
  :ret ::instance)

(defn pause [timer now]
  (if (and (running? timer) (:pauseable timer))
    (-> timer
        (assoc :status :paused
               :pause-time now)
        (push now :pause))
    timer))
(s/fdef pause :args (s/cat :timer ::instance
                           :now number?)
  :ret ::instance)

(defn resume [timer now]
  (if (paused? timer)
    (-> timer
        (assoc :status :running)
        (dissoc :pause-time)
        (push now :resume))
    timer))
(s/fdef resume :args (s/cat :timer ::instance
                            :now number?)
  :ret ::instance)

(defn time-since-start [timer now]
  (if (init? timer)
    0
    (utils/difference-ms now (:start-time timer))))

(defn time-to-latest [{:keys [start-time] :as timer}]
  (if (init? timer)
    0
    (let [[{latest-event-time :time :as _latest}] (:events timer)]
      (utils/difference-ms latest-event-time start-time))))

(defn pause-resume? [event-pair]
  (= [:resume :pause] (mapv :action event-pair)))

(defn pair->difference
  "Assumes the first event is later in time than the second"
  [event-pair]
  (->> event-pair
       (map :time)
       (apply utils/difference-ms)))

(defn calculate-offset
  "Calculates the offset of all pause-resume pairs"
  [timer]
  (->> timer
       :events
       (partition 2 1)
       (filter pause-resume?)
       (map pair->difference)
       (apply +)))

(defn time-elapsed
  "The total elapsed time, including pauses"
  [timer now]
  (let [offset (calculate-offset timer)]
    (cond
      (running? timer) (- (time-since-start timer now) offset)
      (paused? timer) (- (time-to-latest timer) offset)
      :else 0)))
