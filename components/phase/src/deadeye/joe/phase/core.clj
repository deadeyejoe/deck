(ns deadeye.joe.phase.core)

(defn build
  ([id] (build id nil))
  ([id name] (build id name {}))
  ([id name opts]
   (merge {:phase/id id
           :phase/name name}
          opts)))

(defn increment-round [phase]
  (update phase :phase/round #(inc (or % 1))))

(defn label [phase]
  (let [{name :phase/name round :phase/round} phase]
    (when name (apply str name (when round [" (Round " round ")"])))))

(comment
  (-> (build :root)
      (increment-round)
      (label))
  (-> (build :game-round "Game Round")
      (increment-round)
      (label)))



