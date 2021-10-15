(ns conclave.hex
  (:require [conclave.vector :as vect]))

(def sqr3 (Math/sqrt 3))

(defn height [size]
  (* sqr3 size))

(defn width [size]
  (* 2 size))

(defn q-basis [size]
  [(* (/ 3 2) size)
   (* (/ sqr3 2) size)])

(defn r-basis [size]
  [0
   (* sqr3 size)])

(defn cube->axial [[x _y z]]
  [x z])

(defn axial->cube [[q r]]
  [q (- 0 q r) r])

(def origin [0 0 0])

(def directions
  (array-map
   :north [0 1 -1]
   :north-west [-1 1 0]
   :south-west [-1 0 1]
   :south [0 -1 1]
   :south-east [1 -1 0]
   :north-east [1 0 -1]))

(comment
  (keys directions))

(def walk-radius
  "Direction to walk away from origin such that walk-perimeter will center on origin"
  (:south-east directions))

(def walk-perimeter
  "Directions to walk clockwise around the perimeter of a ring of radius 1"
  (vals directions))

(defn ring-steps [radius]
  (mapcat (fn [direction] (repeat radius direction)) walk-perimeter))

(comment
  (ring-steps 1))

(defn ring-coordinates [radius]
  (if (pos? radius)
    (reductions vect/add
                (vect/scale walk-radius radius)
                (->> radius ring-steps butlast))
    (list origin)))

(defn neighbours [coordinate]
  (let [steps (ring-steps 1)]
    (reductions vect/add
                (vect/add coordinate walk-radius)
                steps)))

(comment (neighbours [0 4 -4]))

(comment
  (ring-coordinates 2))

(defn map-coordinates [radius]
  (mapcat ring-coordinates (range (inc radius))))

(comment
  (map-coordinates 3))

(defn coordinate->offset [size cube]
  (let [[q r] (cube->axial cube)]
    (vect/add (vect/scale (q-basis size) q)
              (vect/scale (r-basis size) r))))