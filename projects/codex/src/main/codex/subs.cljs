(ns codex.subs
  (:require [superstring.core :as str]
            [re-frame.core :as rf]
            [re-frame.db :as db]))

@db/app-db
@(rf/subscribe [::visible? 2])

(def search-term ::search-term)
(rf/reg-sub
 ::search-term
 (fn [{:keys [search-term] :as _db} _qv]
   search-term))

(def visible-keys ::visible-keys)
(rf/reg-sub
 ::visible-keys
 (fn [{:keys [visible-keys] :as _db} _qv]
   visible-keys))

(def visible? ::visible?)
(rf/reg-sub
 ::visible?
 :<- [search-term]
 :<- [visible-keys]
 (fn [[term visible] [_q key]]
   (or (str/blank? term)
       (contains? visible key))))
