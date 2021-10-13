(ns conclave.hex)

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

(defn scale [point v]
  (mapv (partial * v) point))

(defn add [& points]
  (->> points
       (apply interleave)
       (partition (count points))
       (mapv (partial apply +))))

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

(defn ring-coordinates [radius]
  (if (pos? radius)
    (reductions (fn [p direction] (add p direction))
                (scale walk-radius radius)
                (->> radius ring-steps butlast))
    origin))

(defn coordinate->offset [size cube]
  (let [[q r] (cube->axial cube)]
    (add (scale (q-basis size) q)
         (scale (r-basis size) r))))

(ring-steps 1)
(ring-coordinates 2)