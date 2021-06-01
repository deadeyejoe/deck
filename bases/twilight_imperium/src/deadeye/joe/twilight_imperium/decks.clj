(ns deadeye.joe.twilight-imperium.decks
  (:require [deadeye.joe.pack.interface :as pack]))

(def strategy-cards (mapv #(merge {:category :strategy} %)
                          [{:card/name "Leadership"   :property/initiative 1}
                           {:card/name "Diplomacy"    :property/initiative 2}
                           {:card/name "Politics"     :property/initiative 3}
                           {:card/name "Construction" :property/initiative 4}
                           {:card/name "Trade"        :property/initiative 5}
                           {:card/name "Warfare"      :property/initiative 6}
                           {:card/name "Technology"   :property/initiative 7}
                           {:card/name "Imperial"     :property/initiative 8}]))

(def strategy (pack/panel {:category :strategy :cards strategy-cards}))


(comment

  (-> strategy
      (pack/pick #(= 7 (:property/initiative %)))))

