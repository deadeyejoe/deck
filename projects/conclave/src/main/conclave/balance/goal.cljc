(ns conclave.balance.goal
  "Construct to capture the goals of a generic balance operation, and to define a (non-total) ordering on the underlying 
   candidate states. We want an ordering so we can progress towards the goals even if we can't satisfy them in the 
   allowed number of steps" 
  (:require [clojure.spec.alpha :as s]))

(def goal-types [:threshold :range :limit :target])
(s/def ::type (set goal-types))
(s/def ::score keyword?) ;; usually a tile-score e.g. :optimal-resources
(s/def ::goal (s/or :threshold-limit number? :range (s/coll-of number? :count 2)))
(s/def ::spec (s/keys :req-un [::type ::score ::goal]))
(s/def ::specs (s/coll-of ::spec))

(defn ->threshold
  "Aim to reach/exceed the goal, expects a single number.
   
   Evaluates to 1 if the score exceeds the threshold, otherwise the difference between the threshold and the score."
  [score goal]
  {:type :threshold
   :satisfiable? true
   :score score
   :goal goal})
(s/fdef ->threshold
        :args (s/cat :score keyword? :goal number?)
        :ret ::spec)

(defn ->range
  "Aim to fall within a range (inclusive), expects a vector of two numbers
   
   Evaluates to 1 if the score is within the range, otherwise the difference between the nearest endpoint and the score."
  [score goal]
  {:type :range
   :satisfiable? true
   :score score
   :goal goal})
(s/fdef ->range
  :args (s/cat :score keyword? :goal (s/cat :lower number? :upper number?))
  :ret ::spec)

(defn ->limit
  "Aim to be less than the goal, expects a single number.
   
   Evaluates to 1 if the score is less than the goal, otherwise the difference between the score and the limit."
  [score goal]
  {:type :limit
   :satisfiable? true
   :score score
   :goal goal})
(s/fdef ->limit
  :args (s/cat :score keyword? :goal number?)
  :ret ::spec)

(defn ->target
  "Aim to be as close to the goal as possible, expects a single number.
   
   Evaluates to the absolute difference between the score and the goal."
  [score goal]
  {:type :target
   :satisfiable? false
   :score score
   :goal goal})
(s/fdef ->target
  :args (s/cat :score keyword? :goal number?)
  :ret ::spec)

(def examples
  [(->threshold :optimal-resources 10)
   (->range :optimal-influence [5 10])
   (->limit :legendary 1)
   (->target :tech 2)])

(defn range-score
  "Returns a positive value if the value is inside the range, zero if it falls on either endpoint and a negative value
   if outside of it."
  [[lower upper] value]
  (min (- upper value)
       (- value lower)))

(defn evaluate
  "Takes a collection of goal-specs and a map of scores, returns a score vector. These numbers can be used to order
   the underlying candidate states to determine whether one is closer to the goals than another. A higher result will 
   be closer to the goal.
   
   If the score is not present in the score-map, it is assumed to be 0."
  [goal-specs score-map]
  (mapv (fn [{:keys [type score goal] :as _goal-spec}]
          (let [relevant-score (get score-map score 0)]
            (case type
              :threshold (if (<= goal relevant-score) 1 (- relevant-score goal))
              :range     (if (<= (first goal) relevant-score (second goal)) 1 (range-score goal relevant-score))
              :limit     (if (<= relevant-score goal) 1 (- goal relevant-score))
              :target    (Math/abs (- goal relevant-score)))))
        goal-specs))

(defn satisfied?
  "Takes a collection of goal-specs and a score vector evaluated from them and returns true if each goal is satisfied."
  [goal-specs score-vector]
  ;; Each goal must be satisfiable, and each evaluated score must be non-negative
  (->> score-vector
       ;; mapping accross both collections
       (map (fn [{:keys [satisfiable?] :as _goal-spec} score]
              (and satisfiable? (<= 0 score)))
            goal-specs)
       (every? true?)))

(defn tile-set-bounds->balance-goals 
  [option {resource-bounds :optimal-resources influence-bounds :optimal-influence :as _bounds-for-available}]
  (case option
    :extreme-resource [(->threshold :optimal-resources (get-in resource-bounds [:extreme-range 0]))]
    :favour-resource [(->range :optimal-resources (get resource-bounds :favour-range))]
    ;; This implicitly values balancing resources over influence, since resources is the first. Might be an idea to 
    ;; allow specifying compound goals? How would you order them though....
    :balanced [(->range :optimal-resources (get resource-bounds :balance-range))
               (->range :optimal-influence (get influence-bounds :balance-range))]
    :favour-influence [(->range :optimal-influence (get influence-bounds :favour-range))]
    :extreme-influence [(->threshold :optimal-influence (get-in influence-bounds [:extreme-range 0]))]))
