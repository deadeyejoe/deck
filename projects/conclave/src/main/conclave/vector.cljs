(ns conclave.vector)

(defn scale [point v]
  (mapv (partial * v) point))

(defn add [& points]
  (->> points
       (apply interleave)
       (partition (count points))
       (mapv (partial apply +))))