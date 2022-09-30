(ns conclave.generate.loop)

(defn pick-higher-score [{current-score :score :as current-context}
                         {next-score :score :as next-context}]
  (if current-score
    (if (pos? (compare current-score next-score)) ;;current-context score is greater than next-context score
      current-context
      next-context)
    next-context))

(defn optimize [{:keys [initial combine choose halt?] :as _loop-context} items]
  (reduce (fn [current-context next-item]
            (let [next-context (combine current-context next-item)
                  best-context (choose current-context next-context)]
              (if (halt? best-context)
                (reduced (assoc best-context ::halt true))
                (update best-context ::total inc))))
          (assoc initial ::total 1)
          items))
