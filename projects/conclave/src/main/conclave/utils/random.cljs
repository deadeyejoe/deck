(ns conclave.utils.random
  (:require [clojure.string :as str]))

(def modulus (Math/pow 2 32))
(def multiplier 134775813)
(def increment 1)

(defn step [input]
  (let [generated (mod (+ (* multiplier input)
                          increment)
                       modulus)]
    [(bit-shift-right generated 16) generated]))

(defn random-lazy-seq [seed limit]
  (let [[next-result next-seed] (step seed)
        result (if limit (mod next-result limit) next-result)]
    (lazy-seq (cons result (random-lazy-seq next-seed limit)))))

(defn generator
  "Returns a random number generator with the given seed. 
   When optional parameter limit is specified, the return value n will satisfy 0 <= n < limit"
  ([seed] (random-lazy-seq seed nil))
  ([seed limit] (random-lazy-seq seed limit)))

(defn coerce-seed [seed]
  (if (string? seed)
    (hash (str/lower-case seed))
    seed))

(defn sample [collection amount seed]
  (loop [gen (generator (coerce-seed seed) (count collection))
         indices []]
    (if (= (count indices) amount)
      (map #(nth collection %) indices)
      (let [[current-rn & rest-rn] gen
            already-generated? (some #(= current-rn %) indices)]
        (if already-generated?
          (recur rest-rn indices)
          (recur rest-rn (conj indices current-rn)))))))

(defn seed-shuffle [seed collection] (sample collection (count collection) seed))

(defn coin-toss [seed]
  (even? (first (generator (coerce-seed seed)))))

(comment
  (let [l (range 0 10)]
    [(sample l 2 5)
     (sample l 3 5)
     (sample l 4 5)
     (sample l 4 6)
     (sample l 2 "a")
     (sample l 5 "a")
     (sample l 5 1455541201)])
  (seed-shuffle 2 (range 10))
  (seed-shuffle 3 (range 25))
  (seed-shuffle [:foo :bar] 4)
  (sample (range 10) 2 6)
  (map coin-toss (range 100)))
