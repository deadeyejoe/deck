(ns deadeye.joe.user.core
  (:require [deadeye.joe.utility.interface :as util]))

(declare random-name)

(defn build
  ([identifier] (build identifier (random-name)))
  ([identifier name]
   {:crux.db/id (util/uuid)
    :user/id identifier
    :user/name name}))

(defn random-name []
  (let [word (first (shuffle util/words))
        num (+ (rand-int 8999) 1000)]
    (str word "-" num)))

(comment
  (random-name)
  (build "id" "Sven")
  (build "id"))