(ns fiddle-db
  (:require [conclave.subs :as subs]
            [re-frame.db :as rfdb]
            [re-frame.core :as rf]))

(keys @rfdb/app-db)
(get @rfdb/app-db :layout)
(get @rfdb/app-db :map)
(get @rfdb/app-db :options)

(get-in @rfdb/app-db [:active-modal])
@(rf/subscribe [subs/modal-active?])

(get-in @rfdb/app-db [:map :players])
(get-in @rfdb/app-db [:player-backup])
[@(rf/subscribe [subs/player-race :P1])
 @(rf/subscribe [subs/selected-race-indices])
 @(rf/subscribe [subs/races-with-availability])]
