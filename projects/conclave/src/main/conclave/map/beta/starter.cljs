(ns conclave.map.beta.starter
  (:require [conclave.map.core :as core]))

(defn starter-data-for-player [galaxy-map home-system-coordinate]
  (let [slice (get-in galaxy-map [:slices home-system-coordinate])
        tiles (map (partial core/coordinate->tile galaxy-map) slice)
        total-optimal-resources (->> tiles
                                     (map (comp :optimal-resources :total))
                                     (apply +))
        total-optimal-influence (->> tiles
                                     (map (comp :optimal-influence :total))
                                     (apply +))]
    {:optimal-resources total-optimal-resources
     :optimal-influence total-optimal-influence
     :optimal-total (+ total-optimal-influence
                       total-optimal-resources)
     :specialties (->> tiles
                       (mapcat (comp :specialties :total)))}))

(defn problems-with-slice [{:keys [optimal-resources
                                   optimal-influence
                                   optimal-total
                                   specialties] :as starter-data}]
  (cond-> []
    (< optimal-resources 2.5) (conj "Not enough resources")
    (< optimal-influence 4.0) (conj "Not enough influence")
    (< optimal-total 9)    (conj "Total res/inf too low")
    (< 13 optimal-total)    (conj "Total res/inf too high")
    (< 2 (count specialties)) (conj "Too many techs")
    (and (seq specialties)
         (not (apply distinct? specialties))) (conj "Degenerate Techs")))

(defn problems-with-start [galaxy-map home-system-coordinate]
  (-> (starter-data-for-player galaxy-map home-system-coordinate)
      problems-with-slice))

(defn satisfactory? [galaxy-map home-system-coordinate]
  (-> (starter-data-for-player galaxy-map home-system-coordinate)
      problems-with-slice
      empty?))

(defn score [galaxy-map]
  (->> (core/home-coordinates galaxy-map)
       (remove (partial satisfactory? galaxy-map))
       (count)))
