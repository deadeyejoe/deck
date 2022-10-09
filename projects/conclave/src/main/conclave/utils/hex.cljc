(ns conclave.utils.hex
  (:require [conclave.utils.vector :as vect]
            [clojure.set :as set]
            [medley.core :as medley]))

(def sqr3 (Math/sqrt 3))

(defn height [size]
  (* sqr3 size))

(defn height->side [height]
  (/ height sqr3))

(defn width [size]
  (* 2 size))

(defn width->side [width]
  (/ width 2))

(defn side->dimension [side]
  {:height (height side)
   :width (width side)})

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

(defn ring
  "Returns the ring of the given coordinate"
  [x]
  (vect/distance origin x))

(defn direction
  "Warning doesn't play nice with non-adjacent hexes"
  [from to]
  (mapv -  from to))

(def direction->vector
  (array-map
   :north [0 1 -1]
   :north-west [-1 1 0]
   :south-west [-1 0 1]
   :south [0 -1 1]
   :south-east [1 -1 0]
   :north-east [1 0 -1]))

(def compass->num
  {:north      0
   :north-east 1
   :south-east 2
   :south      3
   :south-west 4
   :north-west 5})

(def num->compass
  (set/map-invert compass->num))

(def num->directions (medley/map-keys compass->num direction->vector))

(comment
  (keys direction->vector))

(def walk-radius
  "Direction to walk away from origin such that walk-perimeter will center on origin"
  (:north direction->vector))

(def walk-perimeter
  "Directions to walk clockwise around the perimeter of a ring of radius 1, starting from north"
  (map direction->vector [:south-east
                          :south
                          :south-west
                          :north-west
                          :north
                          :north-east]))

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

(defn neighbours? [c1 c2]
  (= 1 (vect/distance c1 c2)))

(comment (neighbours [0 4 -4]))

(comment
  (ring-coordinates 2))

(defn map-coordinates
  ([radius] (mapcat ring-coordinates (range (inc radius)))))

(comment
  (map-coordinates 3))

(defn coordinate->offset [size cube]
  (let [[q r] (cube->axial cube)]
    (vect/add (vect/scale (q-basis size) q)
              (vect/scale (r-basis size) r))))

(defn rotate-clockwise
  ([coordinate] (-> coordinate
                    (vect/scale -1)
                    (vect/shift-left)))
  ([coordinate times]
   (nth (iterate rotate-clockwise coordinate) (mod times 6))))

(comment
  (range 1)
  (:north direction->vector)
  (rotate-clockwise (:north direction->vector))
  (rotate-clockwise (:north direction->vector) 2)
  (rotate-clockwise (:north direction->vector) 3)
  (rotate-clockwise (:north direction->vector) 4)
  (rotate-clockwise (:north direction->vector) 5)
  (rotate-clockwise (:north direction->vector) 6))
