(ns codex.content.action-reference)

(def basic-actions
  {:title "Basic actions"
   :refer-by [:action-card]
   :style {:section true
           :list :bullet}
   :children ["Each player starts with 16 basic action cards"
              "2 of the cards are unique to each hero"
              "Each card has a colour of mana associated with it"
              {:title "Effect costs"
               :children ["Playing an action card for its basic effect is free"
                          "Playing an action card for its strong effect costs 1 mana of the cards colour"]}]})

(def advanced-action
  {:title "Advanced actions"
   :refer-by [:advanced-action]
   :style {:section true
           :list :bullet}
   :children ["Advanced actions have the same properties as basic action cards, but their effects are stronger"
              {:body "Advanced actions may be gained by"
               :children ["Leveling up (each even-numbered level)"
                          "Purchasing from the unit offer (when there is a monastery on the map)"
                          "Purchasing from a conquered green [[city]] for 6 influence"]}
              "Some advanced actions have 2 colours of mana associated with them, either colour may be used to pay for the strong effect, and they may count as a card of either colour"]})

(def spell
  {:title "Spells"
   :refer-by [:spell :spells]
   :style {:section true
           :list :bullet}
   :children ["Each spell has a colour of mana associated with it"
              {:title "Effect costs"
               :children ["Playing a spell for its basic effect costs 1 mana of the spells colour"
                          "Playing a spell for its strong effect costs 1 mana of the spells colour and one black mana, this may only be done at night"
                          "Spells may be played for their basic effect at night"]}
              {:body "Spells may be obtained by"
               :children ["gaining as a reward for some [[sites]]"
                          "purchasing from a conquered [[Mage Tower]] or blue [[city]] for 7 [[influence]] and one mana of the matching colour"]}
              {:title "Note:"
               :body "Enemies with Fire/Ice [[resistance]] are immune to red/blue spells respectively"}]})

(def artifact
  {:title "Artifacts"
   :refer-by [:artifact :artifacts :banner :banners]
   :style {:section true
           :list :bullet}
   :children ["Artifacts do not have an associated colour of mana"
              {:title "Effect costs"
               :children ["Playing an artifact for its basic effect is free"
                          "Playing an artifact for its strong effect requires throwing it away after use"]}
              {:body "Artifacts may be obtained by"
               :children ["gaining as a reward for some [[sites]]"
                          "purchasing from a conquered red [[city]] for 12 [[influence]]"]}
              {:title "Banner Artifacts"
               :body "This is a subtype of artifact that augments your [[units]]"
               :children ["Banner artifacts may be assigned to a unit at any time during your turn, the basic effect applies to the assigned unit"
                          {:body "Once assigned the banner stays assigned to the unit until the end of the round"
                           :children ["You may decide at the end of the round whether to keep the banner assigned to that unit or discard it to add it to your deed deck for the next round"
                                      "If you wish to assign a different banner to that unit, you must first discard the current banner"
                                      "Some banners may only be used once per round. Flip them to indicate they have been used"
                                      "Flipped banners can be refreshed at the end of the round"]}
                          "The strong effect is inaccessible while the banner is assigned to a unit, it can only be triggered by throwing it away from your hand"
                          "If a unit is destroyed or disbanded, the banner is discarded"]}]})

(def playing-cards
  {:title "Playing Cards"
   :style {:list :bullet
           :section true}
   :children ["Cards must be played from your hand"
              "Each card has a type which dictates when in the turn it may be played see [[timing]]"
              {:body "All cards may be played for either a basic effect or a strong effect"
               :children ["You must decide on the weak or strong effect when you play the card"
                          "Costs for basic/strong effects vary, see [[Deed cards]]"
                          "Any costs must be paid in full"]}
              {:body "All non-wound cards may be played sideways to gain 1 [[movement]], [[influence]], [[attack]] , or [[block]]"
               :children ["Cards played sideways may only provide these 4 effects (e.g. they can't be used for [[healing]] or [[ranged attack]])"]}
              "[[Wound]] cards may never be played or discarded as part of any effect unless explicitly stated"
              "Any unused points (movement, influence, etc.) granted by effects are lost at the end of each (movement/action/combat) phase"]})

(def timing
  {:title "Timing"
   :refer-by [:timing]
   :style {:list :bullet
           :section true}
   :children ["There are 6 different deed card types, indicated by a symbol in the upper left corner"
              "Card types restrict when the card may be played during your turn"
              "Some cards have multiple types since they can produce multiple effects, timing restrictions must be obeyed depending on which effect is chosen at play time"
              {:body "The 6 types are"
               :children ["[[Special]] provides a wide variety of effects, may be played at any time during your turn"
                          "[[Healing]] allows you to throw away wound cards, may not be played during combat, but otherwise follows the restrictions for [[special]]"
                          {:body "[[Move]] provides movement points, may be played at any time"
                           :children ["Generally played during the movement phase, but can be used to trigger non-movement effects at other times"
                                      "Unspent movement points do not carry over from the phase (movement/action) they were gained"]}
                          {:body "[[Influence]] provides influence points, may be played at any time"
                           :children ["Generally played during [[interaction]], but can be used to trigger some effects at other times"
                                      "Unspent influence points do not carry from the phase (movement/action) they were gained"]}
                          {:body "[[Combat]] provides block/damage/ranged damage/siege ranged damage, only played during combat"
                           :children [""]}
                          "[[Action]] provides a variety of effects, must be taken as the action for that turn"]}
              {:title "Note:"
               :body "[[Special]], [[Healing]], [[Move]], and [[Influence]] cards can be played any time after your turn starts and before you announce its end, including before deciding whether to take a regular turn or rest"}]})

(def discarding {:title "Discarding & Throwing away"
                 :refer-by [:discard :throw-away]
                 :style {:list :bullet
                         :section true}})

(def deed-cards
  {:title "Deed Cards"
   :style {:section true
           :list :bullet}
   :refer-by [:deed-cards]
   :children [playing-cards
              timing
              discarding
              {:title "Card types"
               :style {:list :none
                       :section true}
               :children [basic-actions
                          advanced-action
                          spell
                          artifact
                          {:title "Wounds"
                           :body "See [[wounds]] for more"}]}]})

(def movement
  {:title "Movement"
   :body "Movement can only be performed when you are taking a regular turn, not when resting"
   :style {:section true
           :list :item}
   :refer-by [:movement :move]
   :children ["Play any amount of movement effects, and total the number of move points"
              {:body "Spend movement points to move or explore as many times as you wish"
               :children ["The cost depends on the terrain type you are moving into, you must pay the full cost to enter"
                          "You may play any number of additional movement effects as you move and explore (e.g. you can explore and then decide whether to play a card to move further)"
                          "Unspent movement points are lost at the end of the movement, they cannot be carried forward to the action phase"]}
              {:title "Limitations"
               :children ["Movement ends and assault begins after entering unconquered [[fortified site]], or opponent's [[keep]]"
                          "Can't enter [[rampaging]] enemy's space"
                          "Attacked if move is between spaces adjacent to [[rampaging]] enemy"
                          "Spaces marked with X on the day/night board are inaccessible"]}
              {:title "Explore"
               :refer-by [:explore]
               :children ["reveal top map tile for 2 move points if adjacent to an empty valid space"
                          "Corner symbols must line up and orientation must match starting tile"
                          "Can't be added behind coastline"
                          "Country tile must be adjacent to or border a tile adjacent to at least 2 tiles"
                          "Core tile must be adjacent to at least 2 tiles"
                          "If no tiles, use random country tile removed during setup or non-city core tile if no country tiles. Must be adjacent to at least three tiles. No more exploring when no more tiles in the box"]}
              {:title "Modifications"
               :children ["Terrain reduced to zero can be entered for free"
                          "Jumping spaces doesn't provoke [[rampaging]] enemy"]}
              {:title "Other players"
               :children ["May pass through or explore on another player's space, this does not count as an attack"
                          "Ending move on a space occupied by another player is an attack"
                          "Ending move or entering a [[Keep]] owned by another player is an attack"
                          "Multiple figures allowed on [[Portal]] space (place figure in front of you) or conquered [[City]] (place figure on city card)"
                          {:body "Forced withdraw applies if you end on space occupied by another player and:"
                           :children ["Final turns after [[end of round]] announced"
                                      "Last turn of game"
                                      "Cooperative scenario or teammate"]}]}
              {:title "Note"
               :body "Unless stated otherwise you cannot move or explore outside the movement phase. Any effect that allows for this is ignored outside the movement phase"}]})

(def interacting
  {:title "Interact with locals"
   :style {:section true
           :list :item}
   :refer-by [:interact :interaction :interact-with-locals :influence]
   :children ["No interaction allowed if on X space of reputation track"
              {:body "Apply bonuses"
               :style {:list :bullet}
               :children ["+/- for position on the reputation track"
                          "While in a conquered [[City]]: +1 for each of your shields in this city"
                          "Bonuses are applied once per turn, when you start the interaction, before you play cards for influence"]}
              "Play influence effects for influence points"
              {:body "Spend influence points. You may purchase any number and variety of things, so long as you have enough influence"
               :style {:list :bullet}
               :children ["Recruit a [[unit]] if type matches site."
                          "Healing (costs 3 at [[Village]] or 2 at [[Monastery]])"
                          "Pay 6 at [[Monastery]] to Learn [[advanced action]] from offer"
                          "Pay 7 and mana of same color at [[Mage Tower]] to learn [[spell]] from offer"
                          "Each [[City]] has a unique interaction"]}]})

(def units
  {:title "Units"
   :refer-by [:unit :units]
   :style {:section true
           :list :bullet}
   :children ["Cannot have more units than command tokens"
              {:body "Units can have the following states"
               :children [{:title "Ready"
                           :body "Units with their command token above them"}
                          {:title "Spent"
                           :body "Units with their command token on top of them"}
                          {:title "Wounded"
                           :body "Units with a [[wound]] card on top of them"}]}
              {:body "Units can be recruited during [[interaction]], or [[gained]] as a reward for some [[sites]]"
               :children ["Newly recruited units are ready"
                          {:body "If all command tokens are occupied, you may disband a unit to make room for a new one"
                           :children ["Wounded/spent units may be disbanded"
                                      "The disbanded unit is thrown away"
                                      "May not be done if you have unoccupied command tokens"]}]}
              {:body "Ready, unwounded units can be spent to activate one of their effects"
               :children ["Move the units command token on top of it to indicate it is spent"
                          "Spent units may not be spent again until they are refreshed"
                          "Some unit abilities have an additional cost (usually mana), this must be paid in full"
                          "Timing restrictions apply to unit effects (e.g. no healing in combat)"]}
              "Units are refreshed at the end of each round. Some card effects allow units to be refreshed."
              "Wounded units may be refreshed, but cannot be spent until they are healed"
              "Units may be equipped with banner [[artifacts]]"]})

(def skills
  {:title "Skills"
   :refer-by [:skill :skills]
   :style {:section true
           :list :bullet}
   :children ["Each player starts with no skills"
              "One skill is gained at each even numbered [[level]]"
              "Skills are unique to each character, other characters skills may be gained from the common skill offer"
              {:body "Skills have 3 basic types:"
               :children [{:body "Once per round: flip to indicate the skill has been used. Flip it back at the end of the round"
                           :children ["Some once per round skills have a cost that can be paid to be flip them back"]}
                          {:body "Interactive: as for once per round, but persist until the start of your next turn"
                           :children ["When you use an interactive skill announce it to the other players and place the token in the center"
                                      "Other players may return the token to you to trigger an effect, flip it face down"
                                      "If the skill is not returned to you before your turn starts, take it back and flip it face down"]}
                          "Once per turn: may be used once per turn"]}]})

(def mana
  {:title "Mana"
   :refer-by [:mana]
   :style {:section true
           :list :bullet}
   :children ["There are 4 basic colours of mana: red, blue, white, green"
              {:body "There are 2 special colours of mana:"
               :children [{:title "Gold"
                           :body "Gold mana may be used as any basic colour, it may only be used during the day"}
                          {:title "Black"
                           :body "Black mana may only be used at night to power effects that require it"}]}
              {:body "Mana comes in two forms"
               :children [{:title "Pure mana"
                           :body "Represented by a mana token or die in a player's play area, disappears at the end of the turn if not used"
                           :children ["Special mana can only be in pure form"]}
                          {:title "Crystals"
                           :body "Represented by a mana token in your inventory"
                           :children ["Crystals can be turned into a pure mana of the same colour at any point during your turn"]}]}
              {:body "The source represents pure mana present in the world"
               :children ["Each turn a player may take one die from the source and use it as mana of the matchin colour"
                          "Any dice taken from the source is rerolled at the end of the turn"
                          "Mana dice are taken at the moment they are used. Players can't take a die from the source and choose not to use it"]}]})

(def gain
  {:title "Gain effects"
   :refer-by [:gain :gained]
   :style {:section true
           :list :bullet}})

(def all-content [deed-cards
                  movement
                  interacting
                  units
                  skills
                  mana
                  gain])
