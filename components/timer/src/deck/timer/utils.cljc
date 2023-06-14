(ns deck.timer.utils)

(defn pad [x opts]
  ;; TODO: implement cross platform padding. takes a length and a padding string
  ;; was using cuerdas for this in js
  x)

(defn difference-ms [from to]
  (-> (- to from)
      int
      Math/abs))

(defn ms->seconds [seconds]
  (int (/ seconds 1000)))

(def difference-s (comp ms->seconds difference-ms))

(defn decompose [seconds]
  [(quot seconds 3600)
   (mod (quot seconds 60) 60)
   (mod seconds 60)])

(defn seconds->display [seconds]
  (->> seconds
       decompose
       (map #(pad (str %) {:length 2 :padding "0"}))
       (interpose ":")
       (apply str)))
