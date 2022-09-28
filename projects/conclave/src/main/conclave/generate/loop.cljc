(ns conclave.generate.loop)

(defn optimize [{:keys [initial combine choose halt?] :as _loop-context} items]
  (reduce (fn [current-context next-item]
            (let [next-context (combine current-context next-item)
                  best-context (choose current-context next-context)]
              (if (halt? best-context)
                (reduced (assoc best-context ::halt true))
                (update best-context ::total inc))))
          (assoc initial ::total 1)
          items))
