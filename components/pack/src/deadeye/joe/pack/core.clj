(ns deadeye.joe.pack.core)

(def type-opts {:deck   {:pack/visibility :private
                         :pack/ownership :common}
                :stack  {:pack/visibility :public
                         :pack/ownership :common}
                :panel  {:pack/visibility :public
                         :pack/ownership :common}
                :supply {:pack/visibility :public
                         :pack/ownership :owned}
                :hand   {:pack/visibility :private
                         :pack/ownership :owned}})

(def start-alias #{:first :top :beginning})
(def end-alias #{:last :bottom :end})

(defn build [type opts]
  (merge
   {:pack/type type
    :pack/cards (vec (:cards opts))
    :pack/limit (or (:limit opts) :unlimited)}
   (select-keys opts [:category])
   (type-opts type)))

(defn deck
  "A pack of cards common to the table. Cards are not visible to players. Does not include discard."
  [opts]
  (build :deck opts))

(defn stack
  "A pack of cards common to the table. Starts empty. Cards are publicly visible. Usually a discard pile."
  [opts]
  (build :stack opts))

(defn panel
  "A pack of cards common to the table. Cards are publicly visible Usually a marketplace."
  [opts]
  (build :panel opts))

(defn hand
  "A player's hand of cards, privately held. Starts empty. Usually limited in size."
  [owner opts]
  (merge (build :hand opts)
         {:pack/ownership owner}))

(defn supply
  "A public pack belonging to a player. Publicly visible, used to construct hands or decks for the players."
  [owner opts]
  (merge (build :supply opts)
         {:pack/ownership owner}))

;; Take cards

(defn draw [pack]
  (let [[first & rest] (:pack/cards pack)]
    [first (assoc pack :pack/cards (vec rest))]))

(defn pick-last [pack]
  (let [cards (:pack/cards pack)
        rest (butlast cards)
        last (last cards)]
    [last (assoc pack :pack/cards (vec rest))]))

(defn pick-at [pack split-fn]
  (let [[before [target & after]] (->> pack
                                       (:pack/cards)
                                       (split-fn))]
    [target (assoc pack :pack/cards (vec (concat before after)))]))

(defn pick [pack location]
  (cond
    (start-alias location) (draw pack)
    (end-alias location)   (pick-last pack)
    (int? location)        (pick-at pack #(split-at location %))
    (ifn? location)        (pick-at pack #(split-with (complement location) %))))

(comment
  (-> test-pack
      (pick 5)))

;; Add Cards

(defn add [pack card]
  (update pack :pack/cards #(into [card] %)))

(defn place [pack card location]
  (update pack :pack/cards
          (cond
            (start-alias location) #(into [card] %)
            (end-alias location)   #(conj % card)
            (int? location)        #(let [[pre post] (split-at location %)]
                                      (vec (concat pre [card] post))))))

;; Rearrange Cards

(defn sort [f pack]
  (update pack :pack/cards (comp vec #(sort-by f %))))

(defn shuffle [pack]
  (update pack :pack/cards (comp vec clojure.core/shuffle)))

(comment (shuffle test-pack))

;; Limits

(defn size [pack]
  (-> pack
      (:pack/cards)
      (clojure.core/count)))

(defn full? [pack]
  (let [limit (or (:pack/limit pack) :unlimited)]
    (when-not (= :unlimited limit)
      (< limit (size pack)))))

(comment (full? (assoc test-pack :pack/limit 1)))


