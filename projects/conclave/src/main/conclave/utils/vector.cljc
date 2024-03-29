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
          (map #(Math/abs %))
          (apply +))
     2))

(comment
  (distance [-1 1 0] [0 1 -1])
  (distance [0 -3 3] [-2 3 -1])
  (distance [-1 1 0] [1 -1 0]))

(defn shift-left [[first & rest]]
  (conj (vec rest) first))

(defn shift-right [v]
  (->> v
       (butlast)
       (cons (last v))
       (vec)))

(defn swap-indices [v [from to]]
  (-> v
      (assoc to (get v from))
      (assoc from (get v to))))

(comment
  (swap-indices [1 2 3 4 5] [0 3]))
