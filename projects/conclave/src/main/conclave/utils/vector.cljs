(ns conclave.utils.vector)

(defn scale [v s]
  (mapv (partial * s) v))

(defn add [& vs]
  (->> vs
       (apply interleave)
       (partition (count vs))
       (mapv (partial apply +))))

(defn ->display [v]
  (->> v
       (interpose ", ")
       (apply str)))

(defn distance [v w]
  (/ (->> (map - v w)
          (map Math/abs)
          (apply +))
     2))

(comment
  (distance [-1 1 0] [0 1 -1])
  (distance [0 -3 3] [-2 3 -1])
  (distance [-1 1 0] [1 -1 0]))
