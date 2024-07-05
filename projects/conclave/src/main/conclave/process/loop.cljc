(ns conclave.process.loop
  (:require [clojure.spec.alpha :as s]))

(s/def ::total nat-int?) ;; total number of steps taken
(s/def ::halt boolean?) ;; indicates that the loop stopped because the halt condition was met
(s/def ::score any?) ;; score is assumed to have natural ordering (i.e. supports `compare`)
(s/def ::context (s/keys :req-un [::score]
                         :opt [::halt ::total]))

(s/def ::initial ::context)
(s/def ::combine fn?)
(s/def ::choose fn?)
(s/def ::halt? fn?)

(defn pick-higher-score 
  [{current-score :score :as current-context}
   {next-score :score :as next-context}]
  (if current-score
    (if (pos? (compare current-score next-score)) ;;current-context score is greater than next-context score
      current-context
      next-context)
    next-context))

(defn optimize
  "Accepts a loop initialization and a collection of items to iterate over.
   - `initial` is the initial context for the loop (required)
   - Items are combined 1-by-1 with the current context using `combine` (required)
   - the best context is chosen using `choose` (defaults to `pick-higher-score`)
   - the loop can be halted early if the `halt?` function returns true (optional)"
  [{:keys [initial combine choose halt?]
    :or {choose pick-higher-score halt? (constantly false)}
    :as _loop-init} 
   items]
  (reduce (fn [current-context next-item]
            (let [next-context (combine current-context next-item)
                  best-context (choose current-context next-context)]
              (if (halt? best-context)
                (reduced (assoc best-context ::halt true))
                (update best-context ::total inc))))
          (assoc initial ::total 1)
          items))
(s/fdef optimize
  :args (s/cat :loop-init (s/keys :req-un [::initial ::combine]
                                  :opt-un [::choose ::halt?])
               :items (s/coll-of any?))
  :ret ::context)
