(ns conclave.generate.balance)

(defn range-score
  "Returns a positive value if the value is inside the range, and a negative value if outside of it."
  [[lower upper] value]
  (min (- upper value)
       (- value lower)))

(defn extreme-resource-score [bounds-for-available {:keys [optimal-resources] :as _actual-quantities}]
  (let [[lower-resource _upper-resource :as _extreme-range] (get-in bounds-for-available [:optimal-resources :extreme-range])]
    (- optimal-resources lower-resource)))

(defn favour-resource-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [favour-range (get-in bounds-for-available [:optimal-resources :favour-range])
        inf-midpoint (get-in bounds-for-available [:optimal-influence :midpoint])]
    [(range-score favour-range optimal-resources)
     (- inf-midpoint optimal-influence)]))

(defn balanced-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [res-balance-range (get-in bounds-for-available [:optimal-resources :balance-range])
        inf-balance-range (get-in bounds-for-available [:optimal-influence :balance-range])]
    [(range-score res-balance-range optimal-resources)
     (range-score inf-balance-range optimal-influence)]))

(defn favour-influence-score [bounds-for-available {:keys [optimal-resources optimal-influence] :as _actual-quantities}]
  (let [favour-range (get-in bounds-for-available [:optimal-influence :favour-range])
        res-midpoint (get-in bounds-for-available [:optimal-resources :midpoint])]
    [(range-score favour-range optimal-influence)
     (- res-midpoint optimal-resources)]))

(defn extreme-influence-score [bounds-for-available {:keys [optimal-influence] :as _actual-quantities}]
  (let [[lower-influence _upper-influence :as _extreme-range] (get-in bounds-for-available [:optimal-influence :extreme-range])]
    (- optimal-influence lower-influence)))

(defn calculate-score [option bounds-for-available actual-quantities]
  ((case option
     :extreme-resource extreme-resource-score
     :favour-resource favour-resource-score
     :balanced balanced-score
     :favour-influence favour-influence-score
     :extreme-influence extreme-influence-score
     balanced-score)
   bounds-for-available actual-quantities))

(defn balanced-score-halt? [[res-range-score inf-range-score]]
  (and (not (neg? res-range-score))
       (not (neg? inf-range-score))))
(defn favour-score-halt? [[range-score unfavoured-diff]]
  (and (not (neg? range-score))
       (not (neg? unfavoured-diff))))
(def extreme-score-halt? (complement neg?))

(defn halt-sampling? [option score]
  ((case option
     :extreme-resource extreme-score-halt?
     :favour-resource favour-score-halt?
     :balanced balanced-score-halt?
     :favour-influence favour-score-halt?
     :extreme-influence extreme-score-halt?
     balanced-score-halt?) score))
