(ns conclave.generate.core
  (:require [conclave.layout.specs :as layout-specs]
            [conclave.generate.arrangement :as arrangement]
            [conclave.generate.balance]
            [conclave.generate.executor :as executor]
            [conclave.generate.optimize :as optimize]
            [conclave.generate.options :as options]
            [conclave.generate.loop]
            [conclave.generate.score]
            [conclave.generate.slice]
            [conclave.generate.tileset :as tileset]
            [conclave.map.core :as map]
            [deck.random.interface :as random]
            [clojure.spec.alpha :as s]
            [superstring.core :as str]))

(s/def ::layout ::layout-specs/instance)
(s/def ::galaxy-map ::map/galaxy)
(s/def ::tileset map?)
(s/def ::slices map?)
(s/def ::arrangment map?)
(s/def ::options ::options/instance)
(s/def ::generation-context (s/keys :req-un [::layout
                                             ::options]
                                    :opt-un [::tileset
                                             ::slices
                                             ::arrangment
                                             ::galaxy-map]))

(defonce last-context (atom nil))

(defn generation-steps []
  (concat tileset/steps
          optimize/steps
          arrangement/steps))

(defn conform-options [{:keys [seed] :as options}]
  (merge {:pok true
          :max-samples 200}
         options
         {:seed (if (str/some? seed)
                  seed
                  (random/random-seed))}))

(defn generate [layout options]
  (let [effective-options (conform-options options)]
    #?(:cljs (.log js/console "Generating map with options: " (clj->js effective-options))
       :clj (println "Generating map with options: " effective-options))
    (let [generated (executor/execute {:layout layout
                                       :options options}
                                      (generation-steps))]
      (reset! last-context generated)
      generated)))
