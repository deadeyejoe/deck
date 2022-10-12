(ns fiddle-db
  (:require [re-frame.db :as rfdb]))

(keys @rfdb/app-db)
(get @rfdb/app-db :layout)
(get @rfdb/app-db :map)
(get @rfdb/app-db :options)

(get-in @rfdb/app-db [:map :players])
