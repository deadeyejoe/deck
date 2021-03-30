(ns deadeye.joe.deck.core)

(defn create [id cards & {:keys [ordering-fn]}]
  (let [ordering-fn (or ordering-fn shuffle)
        owned-cards (map (fn [card] (merge card {:deck/id id})) cards)]
    {:deck/id id
     :deck/cards owned-cards
     :deck/stack (vec (ordering-fn owned-cards))
     :deck/discard []
     :deck/ordering ordering-fn}))

(defn remaining [deck] (count (:deck/stack deck)))

(defn reshuffle [deck]
  (assoc deck :deck/stack ((:deck/ordering deck) (:deck/stack deck))))

(defn stack-draw [stack n]
  (map vec (split-at n stack)))

(defn draw
  ([deck] (draw deck 1))
  ([deck n]
   (let [[cards-drawn remainder] (stack-draw (:deck/stack deck) n)]
     [cards-drawn (assoc deck :deck/stack remainder)])))

(defn refresh [deck]
  (let [ordering (:deck/ordering deck)]
    (merge deck {:deck/stack (vec (ordering (concat (:deck/stack deck) (:deck/discard deck))))
                 :deck/discard []})))

(defn draw-refresh [deck n]
  "Draw n cards from the deck. If the stack is empty, refresh the deck once and draw the remainder"
  (let [[first-draw first-deck] (draw deck n)
        remainder (- n (count first-draw))]
    (if (zero? remainder)
      [first-draw first-deck]
      (let [[second-draw second-deck] (-> first-deck (refresh) (draw remainder))]
        [(into first-draw second-draw) second-deck]))))

(comment
  (create :test (map (fn [n] {:card/id n}) [1 2 3 4 5]) :ordering-fn identity)
  (let [deck {:deck/stack [1 2 3 4 5] :deck/discard [6 7 8 9] :deck/ordering shuffle}]
    (draw-refresh deck 6))
  (let [deck {:deck/stack [1 2 3 4 5] :deck/discard [6 7 8 9] :deck/ordering shuffle}]
    (draw-refresh deck 3))
  (let [deck {:deck/stack [] :deck/discard [6 7 8 9] :deck/ordering shuffle}]
    (draw-refresh deck 10)))
