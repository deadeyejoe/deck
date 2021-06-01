(ns deadeye.joe.table.core
  (:require [deadeye.joe.utility.interface :as util]))

(defn build [name]
  {:crux.db/id (util/uuid)
   :table/name name
   :table/users {}})

(defn join [table user]
  (let [id (:user/id user)]
    (-> table
        (update :table/users assoc id user))))

(defn user-ids [table]
  (-> table
      (:table/users)
      (keys)))
