(ns authority.subs
  (:require [re-frame.core :as rf]
            [clojure.set :as set]
            [authority.constants :as const]
            [authority.utils :as utils]
            [authority.timer.subs]
            [authority.player.subs]
            [authority.player.core :as player]
            [authority.db.summary :as summary]))

;; COMMON

(rf/reg-sub
 :game/state
 (fn [db _] (:game/state db)))

(rf/reg-sub
 :round/phase
 (fn [db _] (:round/phase db)))

(rf/reg-sub
 :round/number
 (fn [db _] (:round/number db)))

;; STRATEGY

(rf/reg-sub
 :strategy/picked
 :<- [:player/all]
 (fn [players _]
   (->> players
        (map player/initiative)
        (remove nil?)
        set)))

(rf/reg-sub
 :strategy/available
 :<- [:strategy/picked]
 (fn [picked _]
   (clojure.set/difference const/initiatives picked)))

(rf/reg-sub
 :strategy/pending
 :<- [:player/position-order]
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
    (rf/subscribe [:player/at position])])
 (fn [[current other] _]
   (utils/player= current other)))

(rf/reg-sub
 :action/strategizing?
 (fn [db _] (:action/strategizing? db)))

;; SUMMARY

(rf/reg-sub
 :round/summary
 (fn [db _]
   (summary/round-summary db (:round/number db))))























