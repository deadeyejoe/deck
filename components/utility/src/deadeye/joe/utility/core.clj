(ns deadeye.joe.utility.core
  (:require [deadeye.joe.utility.words :as words]))

(defn uuid [] (java.util.UUID/randomUUID))

(defn coerce-to-uuid [record]
  (if (uuid? record) record (:crux.db/id record)))

(defn kv-match
  ([prototype entity] ((kv-match prototype) entity))
  ([prototype]
   (let [kv-eq (fn [k v] (= (prototype k) v))]
     (fn [entity] (when (every? kv-eq entity) entity)))))

(defn random-name []
  (let [word (first (shuffle words/list))
        num (+ (rand-int 8999) 1000)]
    (str word "-" num)))

(comment
  (kv-match {:id 1 :name "Blah"} {:id 1 :name "Blah"})
  (kv-match {:id 1 :name "Blah"} {:id 2 :name "Blah"})
  (kv-match {:id 1 :name "Blah"} {:id 1 :name "Bleh"}))