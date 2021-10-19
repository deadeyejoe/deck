(ns conclave.score)

(defn square [x] (* x x))

(defn mean [xs] (/ (apply + xs) (count xs)))

(defn standard-deviation
  ([xs] (standard-deviation xs (mean xs)))
  ([xs mean]
   (Math/sqrt (/
               (reduce + (map square (map - xs (repeat mean))))
               (- (count xs) 1)))))

(defn variation [xs]
  (let [mean (mean xs)]
    (/ (standard-deviation xs mean) mean)))

(defn quantile [q xs]
  (let [n (dec (count xs))
        i (-> (* n q)
              (+ 0.5)
              (int))]
    (nth (sort xs) i)))

(defn dispersion [xs]
  (let [quartile-1 (quantile 0.25 xs)
        quartile-3 (quantile 0.75 xs)]
    (/ (- quartile-3 quartile-1)
       (+ quartile-3 quartile-1))))