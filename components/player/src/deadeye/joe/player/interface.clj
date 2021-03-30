(ns deadeye.joe.player.interface)


(defn create [name]
  {:player/id name
   :player/decks {}
   :player/hands {}
   :player/tokens {}})