(ns deck.random.interface
  (:require [deck.random.core :as core]))

(defn generator
  "Returns a lazy infinite seq of random 16 bit numbers using the given seed.
   When optional parameter limit is specified, the returned values will satisfy 0 <= n < limit"
  ([seed] (core/generator seed))
  ([seed limit] (core/generator seed limit)))

(defn random-seed []
  (core/random-seed))

(defn coin-toss [seed]
  (core/coin-toss seed))

(defn sample [collection amount seed]
  (core/sample collection amount seed))

(defn seed-shuffle [seed collection]
  (core/seed-shuffle seed collection))

(defn sample-generator
  "Returns a lazy infinite seq of samples of the collection."
  [amount seed collection]
  (core/sample-generator amount seed collection))

(defn shuffle-generator
  "Returns a lazy infinite seq of shuffles of the collection."
  [seed collection]
  (core/shuffle-generator seed collection))
