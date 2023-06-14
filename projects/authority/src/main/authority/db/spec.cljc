(ns authority.db.spec
  (:require [clojure.spec.alpha :as s]))


(s/def :game/state #{:player-select})
(s/def :game/start inst?)
(s/def ::db (s/keys :req [:game/state]
                    :opt [:game/start]))
