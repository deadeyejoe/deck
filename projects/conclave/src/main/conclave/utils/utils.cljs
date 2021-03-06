(ns conclave.utils.utils)

(defn transform-values [m f]
  (reduce
   (fn [a [k v]] (assoc a k (f v)))
   {}
   m))

(defn segment
  "Splits coll before elements where pred is true.
   Returns a vector of vectors."
  [pred coll]
  (loop [[first & rest :as all] coll intermediate [] final []]
    (if first
      (if (pred first)
        (if (empty? intermediate)
          (recur rest (conj intermediate first) final)
          (recur all [] (conj final intermediate)))
        (recur rest (conj intermediate first) final))
      final)))

(defn format-number
  ([n] (format-number n 2))
  ([n d] (.toLocaleString (or n 0)
                          "en-IN"
                          {:maximumFractionDigits d})))
