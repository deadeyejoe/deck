(ns conclave.player.core
  (:require [conclave.player.race :as race]
            [clojure.spec.alpha :as s]
            [superstring.core :as str]))

(def player-prefix "P")

(s/def ::key (->> (range 1 8)
                  (map (fn [i]
                         (keyword (str player-prefix i))))
                  (set)))
(s/def ::name string?)
(s/def ::race ::race/index)
(s/def ::instance (s/keys :req-un [::key]
                          :opt-un [::name
                                   ::race]))

(defn customized? [{:keys [name race] :as _player}]
  (and (str/some? name)
       (number? race)))
