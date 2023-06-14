(ns codex.content.summaries)

(def prepare-steps
  {:title "Prepare Round"
   :body "At the beginning of each round after the first:"
   :children [{:title "Flip [[Day/Night board]]"}
              {:title "Reroll mana dice"
               :body "roll #players + 2 dice, reroll any black/gold until half show basic colours"}
              {:title "Prepare new unit offer"
               :children ["Discard existing cards to corresponding decks"
                          "Deal regular units, #players + 2 cards"
                          "If at least one core tile has been explored, alternate regular and elite units instead"
                          "For each monastery, add an Advanced action"]}
              {:title "Refresh Advanced action and Spell offers"
               :body "Discard lowest, slide remaining down, add new card to top"}
              {:title "Collect [[Tactic cards]] from last round"}
              {:title "Refresh player components"
               :children ["Flip [[banners]] and skills (may discard banners)"
                          "Ready all units"
                          "Shuffle all deed cards (including wounds)"
                          "Draw to hand limit"]}]})

(def round-steps
  {:title "Order of Play"
   :style {:list :item
           :section true}
   :refer-by [:order-of-play]
   :children [prepare-steps
              {:title "Choose Tactic cards"
               :children ["Players choose in reverse fame order (reverse round order for ties)"
                          "Rearrange round order tokens, lowest tactic number first"]}
              {:title "Players take turns"
               :body "in round order until player with empty deed deck forfeits their turn to announce the end of the round. Other players take one last turn"}
              {:title "Check scenario for game end"}]})

(def announce-round-end
  {:title "Announce end of round"
   :style {:section true
           :list :item}
   :children ["Only if deed deck is empty, and not already announced"
              "Forfeit turn to announce end of round"
              "Must announce if hand is empty"
              "Other players take one last turn"
              "Round ends, see [[Order of play]]"]})

(def regular-turn
  {:title "Regular turn"
   :style {:section true
           :list :item}
   :children ["[[Move]] (optional) - must be done before action"
              "Perform one action. Actions are either mandatory or voluntary"
              {:title "Mandatory actions"
               :children ["Player vs. Player: end move on space occupied by other player"
                          "Entering a [[Fortified site]]"
                          "Attacked by [[rampaging]] enemies"]}
              {:title "Voluntary actions"
               :children ["[[Interact with locals]]"
                          "Explore [[Adventure site]]"
                          "Challenge adjacent [[rampaging]] enemies"
                          "Burn monastery"
                          "Do nothing"]}]})

(def resting
  {:title "Rest"
   :style {:section true
           :list :item}
   :children [{:title "Standard Rest"
               :body "discard 1 non-wound card and any number of wound cards, must have at least one non-wound card "}
              {:title "Slow recovery"
               :body "discard 1 wound card"}]})

(def end-of-turn
  {:title "End of player turn"
   :style {:section true
           :list :item}
   :children ["Reroll mana dice used (if any) and return to the source"
              {:title "Forced withdraw"
               :body "If not on a safe space, backtrack move until safe, take 1 wound per space moved"}
              "Return mana tokens and discard played cards"
              {:title "Use space benefit"
               :children [{:title "[[Magic Glade]]"
                           :body "Throw away 1 wound from hand or discard pile (does not count as a healing effect)"}
                          {:title "[[Mine]]"
                           :body "gain crystal of matching colour"}]}
              {:title "Rewards from combat: multiple rewards may be [[gained]] in any order"
               :children [{:title "Crystals"
                           :body "gain crystals of matching colour. If random, roll mana dice to determine colour. Choose any basic colour for gold, gain 1 fame for black"}
                          {:title "Artifacts"
                           :body "draw reward + 1. Return one to the bottom of the artifact deck, place remainder on top of deed deck"}
                          {:title "Spell/Advanced action"
                           :body "Choose from offer, place on top of deed deck. May not take advanced actions from the unit offer"}
                          {:title "Units"
                           :body "Take any unit, ignoring cost. Disband a unit if no open command token. May postpone gaining unit until after level up."}]}
              {:title "Level up: once for each line crossed on the fame track this turn. Reward is either"
               :style {:list :bullet}
               :children ["Place the top Level token in your play area as a Command token"
                          {:body "reveal top 2 skills and either:"
                           :style {:list :bullet}
                           :children ["Take 1 and place the other in common area. Take 1 advanced action from the offer"
                                      "Take a skill token from the common area. Place both tokens you drew in the common area. Take lowest advanced action from the offer"]}]}
              {:title "Draw new cards"
               :children [{:title "Discard cards"
                           :style {:list :bullet}
                           :children ["discard any number of non-wound cards"
                                      "must discard if no cards were played this turn "
                                      "there is no need to discard if over hand limit"]}
                          {:title "Draw cards to hand limit"
                           :style {:list :bullet}
                           :children ["do not shuffle deck if it runs out"
                                      "if on or next to a [[keep]] you own, limit is increased by the number of keeps you own"
                                      "if on or next to a conquered [[city]] with your shields, +1 or +2 if leader"
                                      "if both keep and city, use higher bonus, they do not stack"
                                      "the Planning [[Tactic card]] can increase the limit"
                                      "the Long Night [[Tactic card]] can be used if the deck runs out during this step"]}]}]})

(def player-turn
  {:title "Player turns"
   :style {:list :none
           :section true}
   :children [{:style {:list :item}
               :children ["Use 'before your turn' or 'on another player's turn' now"
                          "Previous turn skill tokens expire"
                          "If round token is flipped, then flip it and skip turn"
                          {:title "Choose one"
                           :children ["Announce end of round"
                                      "Regular turn"
                                      "Rest"]}
                          "End of turn"]}
              announce-round-end
              regular-turn
              resting
              end-of-turn]})
