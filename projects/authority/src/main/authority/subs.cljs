(ns authority.subs
  (:require [re-frame.core :as rf]
            [clojure.set :as set]
            [authority.constants :as const]
            [authority.utils :as utils]
            [cuerdas.core :as str]))

;; COMMON

(rf/reg-sub
 :game/state
 (fn [db _] (:game/state db)))

(rf/reg-sub
 :positions
 (fn [db _] (:positions db)))

(rf/reg-sub
 :players
 (fn [db _] (:players db)))

(rf/reg-sub
 :phase
 (fn [db _] (:round/phase db)))

(rf/reg-sub
 :round/number
 (fn [db _] (:round/number db)))

(rf/reg-sub
 :round/stream
 (fn [db _] (:round/stream db)))

(rf/reg-sub
 :initiative-order
 (fn [db _] (:round/initiative-order db)))

;; TIMERS

(rf/reg-sub
 :heartbeat
 (fn [db _] (:timer/heartbeat db)))

(rf/reg-sub
 :time/base
 (fn [db [_ nspace]] ((keyword nspace :start) db)))

(defn elapsed-seconds [from to]
  (-> (- to from)
      (/ 1000)
      int
      Math/abs))

(defn seconds->display [seconds]
  (->> [(quot seconds 3600)
        (mod (quot seconds 60) 60)
        (mod seconds 60)]
       (map #(str/pad (str %) {:length 2 :padding "0"}))
       (interpose ":")
       (apply str)))

(rf/reg-sub
 :time/elapsed-seconds
 (fn [[_ nspace] _]
   [(rf/subscribe [:heartbeat])
    (rf/subscribe [:time/base nspace])])
 (fn [[heartbeat start] _]
   (elapsed-seconds heartbeat start)))

(rf/reg-sub
 :time/display
 (fn [[_ nspace] _]
   (rf/subscribe [:time/elapsed-seconds nspace]))
 (fn [elapsed _]
   (seconds->display elapsed)))

;; PLAYER

(rf/reg-sub
 :player
 (fn [db [_ position]] (get-in db [:players position])))

(defn player-signal [[_ position] _]
  (rf/subscribe [:player position]))

(rf/reg-sub
 :player/name
 player-signal
 (fn [player _] (:name player)))

(rf/reg-sub
 :player/initiative
 player-signal
 (fn [player _] (:initiative player)))

;; STRATEGY

(rf/reg-sub
 :strategy/picked
 :<- [:players]
 (fn [players _]
   (->> players
        vals
        (map :initiative)
        (remove nil?)
        set)))

(rf/reg-sub
 :strategy/available
 :<- [:strategy/picked]
 (fn [picked _]
   (clojure.set/difference const/initiatives picked)))

(rf/reg-sub
 :strategy/pending
 :<- [:positions]
 :<- [:strategy/picked]
 (fn [[positions picked] _]
   (< (count picked) (count positions))))

;; ACTION

(rf/reg-sub
 :action/current-player
 (fn [db _] (:action/current-player db)))

(rf/reg-sub
 :action/is-current
 (fn [[_ position] _]
   [(rf/subscribe [:action/current-player])
    (rf/subscribe [:player position])])
 (fn [[current other] _]
   (utils/player= current other)))

(rf/reg-sub
 :action/current-stream
 :<- [:action/current-player]
 :<- [:round/stream]
 (fn [[current-player stream] _]
   (take-while (partial utils/player= current-player) stream)))

(defn compute-offset [[first-event second-event]]
  (let [transition (vector (:action first-event) (:action second-event))]
    (case transition
      [:start :end] 0
      [:start :pause] 0
      [:pause :resume] (elapsed-seconds (:time second-event) (:time first-event))
      [:resume :end] 0
      (do
        (println "Unrecognized transition: " transition)
        0))))

(rf/reg-sub
 :action/current-time-offset
 :<- [:action/current-stream]
 (fn [stream _]
   (->> stream
        reverse
        (partition 2 1)
        (reduce (fn [total event-pair]
                  (+ total (compute-offset event-pair)))
                0))))

(rf/reg-sub
 :action/current-status
 :<- [:action/current-stream]
 (fn [stream _] (-> stream first :action)))

(rf/reg-sub
 :action/current-event-time
 :<- [:action/current-stream]
 (fn [stream _] (-> stream first :time)))

(rf/reg-sub
 :action/current-turn-start
 :<- [:action/current-stream]
 (fn [stream _] (-> stream last :time)))

(rf/reg-sub
 :action/current-time-total
 :<- [:heartbeat]
 :<- [:action/current-status]
 :<- [:action/current-turn-start]
 :<- [:action/current-event-time]
 (fn [[heartbeat status turn-start event-time] _]
   (if (= status :pause)
     (elapsed-seconds event-time turn-start)
     (elapsed-seconds heartbeat turn-start))))

(rf/reg-sub
 :action/current-time-elapsed
 :<- [:action/current-time-total]
 :<- [:action/current-time-offset]
 (fn [[total offset]] (- total offset)))

(rf/reg-sub
 :action/current-elapsed-in-range
 :<- [:action/current-time-elapsed]
 (fn [elapsed [_ from to]]
   (if to
     (< from elapsed to)
     (<= from elapsed))))

(rf/reg-sub
 :action/current-time-display
 :<- [:action/current-time-elapsed]
 (fn [elapsed] (seconds->display elapsed)))



