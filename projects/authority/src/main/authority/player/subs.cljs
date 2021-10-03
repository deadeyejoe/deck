(ns authority.player.subs
  (:require [re-frame.core :as rf]
            [authority.player.core :as player]
            [authority.player.db :as player-db]))

(rf/reg-sub
 :player/all
 (fn [db _] (player-db/all db)))

(rf/reg-sub
 :player/position-order
 (fn [db _] (player-db/position-order db)))

(rf/reg-sub
 :player/initiative-order
 (fn [db _] (player-db/initiative-order db)))

(rf/reg-sub
 :player/at
 (fn [db [_ position]] (player-db/find-by db position)))

(defn player-signal [[_ position] _]
  (rf/subscribe [:player/at position]))

(rf/reg-sub
 :player/name
 player-signal
 (fn [player _] (player/name player)))

(rf/reg-sub
 :player/initiative
 player-signal
 (fn [player _] (player/initiative player)))

(rf/reg-sub
 :player/passed?
 player-signal
 (fn [player _] (player/passed? player)))

(rf/reg-sub
 :player/ready?
 player-signal
 (fn [player _] (player/ready? player)))