(ns conclave.vector)

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