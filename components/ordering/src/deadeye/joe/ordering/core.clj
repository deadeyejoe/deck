(ns deadeye.joe.ordering.core
  (:require [deadeye.joe.utility.interface :as util]
            [clojure.set :as set]))

(def valid-opts [:ordering/repeat :ordering/current])

(def aliases {:repeat :ordering/repeat
              :cycle :ordering/repeat
              :initial :ordering/current})

(defn build
  ([name items] (build name items {}))
  ([name items options]
   (merge {:crux.db/id (util/uuid)
           :ordering/name name
           :ordering/items items
           :ordering/current nil
           :ordering/repeat false}
          (-> options
              (set/rename-keys aliases)
              (select-keys valid-opts)))))

(defn next-infinite [ordering]
  (let [{items :ordering/items
         current :ordering/current} ordering
        not-current? (complement #{current})]
    (assoc ordering :ordering/current
           (if (not-any? #{current} items)
             (first items)
             (->> items
                  (cycle)
                  (drop-while not-current?)
                  (rest)
                  (first))))))

(comment
  (next-infinite {:ordering/items [1 2 3 4] :ordering/current nil}))


(defn next-finite [ordering]
  (let [[next & rest] (:ordering/items ordering)]
    (if next
      (merge ordering {:ordering/items (into [] rest)
                       :ordering/current next})
      ordering)))

(comment
  (-> {:ordering/items [1 2 3 4]}
      (next-finite)))

(defn next [ordering]
  (if (:ordering/repeat ordering)
    (next-infinite ordering)
    (next-finite ordering)))

(comment (next {:ordering/items [1 2 3 4] :ordering/repeat true}))

(defn done? [ordering]
  (empty (:ordering/items ordering)))

(defn ping-pong
  ([coll] (ping-pong 2 coll))
  ([n coll]
   (->> coll
        (repeat n)
        (map-indexed (fn [idx item] (if (odd? idx) (reverse item) item)))
        (apply concat)
        (into []))))

(comment (ping-pong [1 2 3 4] 4))