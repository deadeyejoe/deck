(ns codex.handlers
  (:require [codex.search :as search]
            [re-frame.core :as rf]))

(def initialize ::initialize)
(rf/reg-event-db
 ::initialize
 (fn [_db _]
   {:visible-keys #{}}))

(def set-search-term ::set-search-term)
(rf/reg-event-db
 ::set-search-term
 (fn [db [_e term]]
   (-> db
       (assoc :search-term term)
       (assoc :visible-keys (search/exact-search term)))))
