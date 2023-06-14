(ns codex.content.components)

(def spells
  {:title ["Spells"]
   :children ["Each spell has a colour, and a basic and strong effect"
              "The basic effect requires 1 mana of the spell's colour"
              "The strong effect requires 1 mana of the spell's colour and a black mana"
              "The spell can be played for its basic effect at night, but the strong effect can only be played at night, "
              {:body "Spells can be obtained by:"
               :children ["Gaining a combat reward e.g. after conquering a [[Mage Tower]]"
                          "Spending 7 influence and a mana of the spell's colour at a conquered [[Mage Tower]]"]}
              "When you gain a spell, place it on the top of your deed deck unless specified otherwise"
              "The spell offer contains three spells, the offer is refreshed when a spell is removed from it"]})
