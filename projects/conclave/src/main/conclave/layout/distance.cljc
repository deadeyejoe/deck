(ns conclave.layout.distance
  (:require #?(:clj [taoensso.tufte :as tufte :refer [defnp]]
               :cljs [taoensso.tufte :as tufte :refer-macros (defnp)])))

(defn ->queue [element]
  #?(:clj (conj clojure.lang.PersistentQueue/EMPTY element)
     :cljs #queue [element]))

(defnp distances-from
  ([adjacent-map start-coordinate]
   (loop [result {}
          visit-queue (->queue [0 start-coordinate (get adjacent-map start-coordinate)])]
     (let [[distance coordinate neighbours :as current-visit] (peek visit-queue)]
       (if (nil? current-visit)
         result
         (if (< distance (get result coordinate ##Inf))
           (let [updated-distance (inc  distance)]
             (recur (assoc result coordinate distance)
                    (reduce (fn [q coord] (conj q [updated-distance coord (get adjacent-map coord)]))
                            (pop visit-queue)
                            neighbours)))
           (recur result
                  (pop visit-queue))))))))

(defnp all-distances [{:keys [adjacents] :as layout}]
  (->> (keys adjacents)
       (map (juxt identity (partial distances-from adjacents)))
       (into {})))
