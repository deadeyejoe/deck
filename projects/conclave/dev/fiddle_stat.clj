(ns conclave.fiddle-stat
  (:require [conclave.utils.hex :as hex]
            [conclave.map.core :as core]
            [conclave.layout.core :as layout]
            [conclave.tiles.core :as tile]
            [conclave.utils.score :as util-score]
            [deck.random.interface :as random]
            [clojure.math.combinatorics :as combo]
            [clojure.spec.alpha :as s]
            [medley.core :as medley]))

(->> tile/default-set
     ((juxt (partial map #(get-in % [:total :optimal-resources]))
            (partial map #(get-in % [:total :resources]))
            (partial map #(get-in % [:total :optimal-influence]))
            (partial map #(get-in % [:total :influence]))))
     (map (juxt util-score/mean util-score/median))
     (map (partial map double)))

(def avg-res 1.231)
(def avg-inf 1.157)
(* 20 avg-res)
(* 20 avg-inf)

(def layout (layout/code->layout "8pw"))

(def blue-totals
  (map (comp #(select-keys % [:optimal-resources :optimal-influence]) :total) tile/blues))

(defn blue-tilesets [{{:keys [blue red]} :type-counts :as layout}])

(defn sample-combinations [coll t sample-size]
  (let [total-combinations (combo/count-combinations coll t)]
    (if (< total-combinations sample-size)
      (combo/combinations coll t)
      (->> (repeatedly #(bigint (rand total-combinations)))
           (take (min total-combinations sample-size))
           (map (partial combo/nth-combination coll t))))))

(defn generate-sample [{{:keys [blue red]} :type-counts :as layout} sample-size]
  (sample-combinations blue-totals blue sample-size))

(defn reduce-sample [result next-tileset]
  (let [{:keys [optimal-resources optimal-influence] :as combined} (apply merge-with + next-tileset)]
    (-> result
        (update-in [optimal-resources :resources] (fnil inc 0))
        (update-in [optimal-influence :influence] (fnil inc 0)))))

(defn process-sample [sample]
  (reduce reduce-sample {} sample))

(defn output-row [[amount {:keys [resources influence]
                           :or {resources 0 influence 0}
                           :as frequencies}]]
  (->> [amount resources influence]
       (map float)
       (interpose "\t")
       (apply str)))

(defn output [f result]
  (let [ordered-pairs (sort-by key result)]
    (->> ordered-pairs
         (map output-row)
         (interpose "\n")
         (apply str "frequency\tresources\tinfluence\n")
         (spit f))))

(comment
  (-> blue-totals
      (sample-combinations 34 4000)
      count)
  (->> (generate-sample layout 100000)
       (process-sample)
       (output "8pw.csv"))
  (sample-combinations tile/blues 24 10)
  (count (combo/combinations (range 38) 34))
  (combo/count-combinations blue-totals 34)
  (count tile/blues))


(comment
  "Contiguous segment of shuffled tileset"
  (count blue-totals)
  (->> blue-totals
       (random/seed-shuffle (random/random-seed))
       (partition 18 1)
       (map (partial apply merge-with +))
       (map (partial medley/map-vals int))
       (apply max-key :optimal-influence)))
