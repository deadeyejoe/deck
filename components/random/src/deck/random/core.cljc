(ns deck.random.core
  "Seeded random number generation for cljs (with similar operation in clj)
   Limited to 16 bit numbers."
  (:require [clojure.string :as str]))

(declare sample)

(def modulus (Math/pow 2N 32))
(def multiplier 134775813)
(def increment 1)

(defn step [input]
  (let [generated (mod (+ (* multiplier input)
                          increment)
                       modulus)]
    [(bit-shift-right (long generated) 16) generated]))

(defn random-lazy-seq [seed limit]
  (let [[next-result next-seed] (step seed)
        result (if limit (mod next-result limit) next-result)]
    (lazy-seq (cons result (random-lazy-seq next-seed limit)))))

(defn generator
  "Returns an infinite lazy sequence of 16 bit integers using the given seed. 
   When optional parameter limit is specified, the return value n will satisfy 0 <= n < limit"
  ([seed] (random-lazy-seq seed nil))
  ([seed limit] (random-lazy-seq seed limit)))

(defn coerce-seed [seed]
  (if (string? seed)
    (hash (str/lower-case seed))
    seed))

(defn coin-toss [seed]
  (even? (first (generator (coerce-seed seed)))))

(defn random-seed []
  (->> #?(:cljs (. js/Date now)
          :clj  (System/currentTimeMillis))
       (sample (map char (range 65 91)) 6)
       (apply str)))

(defn take-unique
  "Generates 'amount' unique numbers from the generator.
   Returns a vector containing the generated numbers and the remainder of the generator sequence."
  [amount generator]
  (loop [[current-random-number & rest-rn] generator
         current-index 0
         random->index {}]
    (if (= current-index amount)
      [(->> random->index (sort-by second) (map first))
       rest-rn]
      (if (contains? random->index current-random-number)
        (recur rest-rn current-index random->index)
        (recur rest-rn
               (inc current-index)
               (assoc random->index current-random-number current-index))))))

(defn sample-from-generator [amount generator collection]
  (let [target-amount (min (count collection) amount)
        [sampled-indices new-generator] (take-unique target-amount generator)]
    [(map (partial nth collection)
          sampled-indices)
     new-generator]))

(comment
  (first (take-unique 10 (generator 123 20)))
  (first (sample-from-generator 10 (generator 13 20) (range 10 30))))

(defn sample [collection amount seed]
  (let [generator (generator (coerce-seed seed) (count collection))]
    (first (sample-from-generator amount generator collection))))

(defn seed-shuffle [seed collection] (sample collection (count collection) seed))

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

(defn sample-lazy-seq [amount generator collection]
  (let [[sampled new-generator] (sample-from-generator amount generator collection)]
    (lazy-seq (cons sampled (sample-lazy-seq amount new-generator collection)))))

(defn sample-generator [amount seed collection]
  (let [generator (generator (coerce-seed seed) (count collection))]
    (sample-lazy-seq amount generator collection)))

(defn shuffle-generator [seed collection]
  (sample-generator (count collection) seed collection))

(comment
  (take 2 (sample-generator 10 "ABCDE" (range 10 20)))
  (->> (take 1000000 (shuffle-generator "ABCD" (range 10)))
       (take 10)
       set
       count))
