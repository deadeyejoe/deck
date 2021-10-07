(ns authority.player.core
  (:refer-clojure :exclude [name]))

(defn build [{:keys [position name]}]
  {:position position
   :name name})

(defn name [player] (:name player))
(defn position [player] (:position player))
(defn initiative [player] (:initiative player))

(defn update-name [player name]
  (assoc player :name name))

(defn update-initiative [player initiative]
  (assoc player :initiative initiative))

(defn reset-initiative [player]
  (dissoc player :initiative))

(defn passed? [player]
  (:passed player))

(def ready? (complement passed?))

(defn pass [player]
  (if (passed? player)
    player
    (assoc player :passed true)))

(defn strategized? [player]
  (:strategized player))

(defn strategize [player]
  (if (strategized? player)
    player
    (assoc player :strategized true)))

(defn ready [player]
  (if (ready? player)
    player
    (-> player
        (dissoc :passed)
        (dissoc :strategized))))

(defn eq [player other]
  (= (:position player) (:position other)))

