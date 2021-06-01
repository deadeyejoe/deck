(ns deadeye.joe.player.core
  (:require [deadeye.joe.utility.interface :as util]))

(defn build [name]
  {:player/id (util/uuid)
   :player/name name})

(defn coerce-to-id [player]
  (if (uuid? player)
    player
    (:player/id player)))

(defn select [player]
  (fn [other]
    (= (coerce-to-id player)
       (coerce-to-id other))))