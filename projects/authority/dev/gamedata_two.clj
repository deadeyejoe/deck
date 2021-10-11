(ns dev.gamedata-two
  (:require [clojure.edn :as edn]
            [clojure.string :as str]
            [java-time :as time]))

(defonce data (-> "projects/authority/dev/game-2-data.edn"
                  slurp
                  edn/read-string))

(defn event-type [e]
  (cond
    (nil? (:round/phase e)) "game"
    (nil? (:position e)) "round"
    :else "player"))

(defn format-event [e]
  (str/join ", "
            (map str ((juxt event-type
                            :round/phase
                            :round/number
                            :player
                            (comp name :action)
                            :time) e))))


(->> data
     :stream
     reverse
     (map format-event)
     (str/join "\n")
     (spit "projects/authority/dev/game-2.csv"))