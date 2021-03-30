(ns deadeye.joe.ordering.core)

(defn shuffle [orderable]
  (shuffle orderable))

(defn position [orderable starting]
  (let [not-start  (if (fn? starting) (complement starting) #(not= % starting))]
    (->> (cycle orderable)
         (drop-while not-start)
         (take (count orderable)))))

(comment
  (position [1 2 3 4 5] #(>= % 3))
  (position [1 2 3 4 5] 3))

