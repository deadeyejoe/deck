(ns conclave.generate.slice
  (:require [conclave.layout.slice :as layout-slice]
            [conclave.tiles.core :as tiles]
            [conclave.tiles.set :as tile-set]
            [conclave.specs :as specs]
            [clojure.spec.alpha :as s]))

(s/def ::range (s/coll-of nat-int? :kind vector :count 2))
(s/def ::weights (s/map-of ::specs/quantities number?))
(s/def ::tiles (s/coll-of ::tiles/instance))
(s/def ::balance number?)
(s/def ::score number?)
(s/def ::summary (s/map-of keyword? number?))
(s/def ::slice (s/merge ::layout-slice/instance
                        (s/keys :opt-un [::range
                                         ::weights
                                         ::tiles
                                         ::balance
                                         ::score
                                         ::summary])))

(def favoured-weight (/ 1 2))
(def unfavoured-weight (/ 3 2))

(def invert-balance
  {:balanced :balanced
   :resource :influence
   :influence :resource})

(defn weights [key equidistant-balance]
  (let [balance (if (= :equidistant key)
                  equidistant-balance
                  (invert-balance equidistant-balance))]
    {:optimal-resources (case balance
                          :resource favoured-weight
                          :influence unfavoured-weight
                          1)
     :optimal-influence (case balance
                          :resource unfavoured-weight
                          :influence favoured-weight
                          1)
     :legendary 2
     :tech 2}))

(defn constraint-mask [slice-array
                       {:keys [legendaries-in-equidistants planets-in-equidistants] :as _options}]
  (let [default (constantly true)
        no-legendaries (complement tiles/legendary?)]
    (vec (mapcat (fn [{:keys [key size]}]
                   (repeat size
                           (or (if (= :equidistant key)
                                 (when planets-in-equidistants tiles/has-planets?)
                                 (when legendaries-in-equidistants no-legendaries))
                               default)))
                 slice-array))))

(defn init-slice-array [slices {:keys [equidistant-balance] :as _options}]
  (loop [[{:keys [size key] :as next-slice} & rest] (layout-slice/with-equidistant-first slices)
         slices []
         index 0]
    (if (nil? next-slice)
      slices
      (recur rest
             (conj slices (assoc next-slice
                                 :range [index (+ index size)]
                                 :weights (weights key equidistant-balance)))
             (+ index size)))))

(defn apply-weight [weight slice-sum]
  (merge-with *
              (select-keys slice-sum (keys weight))
              weight))

(defn slice->score [{:keys [size weights] :as _slice} summary]
  (/ (->> (apply-weight weights summary)
          (vals)
          (apply +))
     size))

(defn add-summary-to-slice [tile-array {:keys [range] :as slice}]
  (let [tiles (apply subvec tile-array range)
        {:keys [optimal-resources optimal-influence] :as summary} (tile-set/collect-totals tiles)]
    (merge slice {:tiles tiles
                  :summary summary
                  :balance (- optimal-resources optimal-influence)
                  :score (slice->score slice summary)})))

(defn add-summary-to-slices [{:keys [tile-array slice-array] :as _slice-context}]
  (map (partial add-summary-to-slice tile-array) slice-array))
