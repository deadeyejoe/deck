(ns codex.content.combat)

(def elemental
  {:title "Elemental Attacks, Blocks & Resistance"
   :style {:section true
           :list :bullet}
   :refer-by [:elemental :element :efficient :resistance :resistances :inefficient :cold-fire :fire :ice]
   :children ["There are 4 elemental types in the game: Physical, Ice, Fire and Cold Fire"
              "Attacks and blocks have an elemental type, and enemies may have elemental resistances"
              {:body "Blocks and attacks may be efficient or inefficient against a given attack/enemy"
               :children ["If an attack or block is inefficient, the attack/block value is halved (rounding down)"
                          "If an attack or block is efficient, the full value is used"
                          "When calculating a total attack or block value, the total value of inefficient attacks/blocks is halved (rounding down) and then added to the total efficient value"]}
              "If an attack targets multiple enemies, any resistance that one enemy has applies to the whole attack"
              {:title "Physical"
               :children ["This is the default element of attacks and blocks"
                          {:title "Attack" :body "all blocks are efficient against physical attacks"}
                          {:title "Block" :body "physical block is only efficient against physical attacks"}
                          {:title "Resistance" :body "physical attacks are inefficient"}]}
              {:title "Fire"
               :children [{:title "Attack" :body "only ice and cold fire blocks are efficient"}
                          {:title "Block" :body "only efficient against physical and fire attacks"}
                          {:title "Resistance"
                           :children ["fire attacks are inefficient"
                                      "ignore the non-attack effects of red cards or unit abilities powered by red mana"]}]}
              {:title "Ice"
               :children [{:title "Attack" :body "only fire and cold fire blocks are efficient"}
                          {:title "Block" :body "only efficient against physical and ice attacks"}
                          {:title "Resistance"
                           :children ["ice attacks are inefficient"
                                      "ignore the non-attack effects of blue cards or unit abilities powered by blue mana"]}]}
              {:title "Cold Fire"
               :children [{:title "Attack" :body "only cold fire blocks are efficient"}
                          {:title "Block" :body "efficient against all attacks"}
                          {:title "Resistance"
                           :children ["fire, ice and cold fire attacks are inefficient"
                                      "ignore the non-attack effects of red and blue cards or unit abilities powered by red or blue mana"]}]}
              {:body "Units may have resistances but they are handled differently"
               :children ["If a unit is resistant to the damage assigned to it, reduce the damage by the unit's armour value. If there is no more damage to assign, then it is not wounded, otherwise assign damage to it again following the normal rules"
                          "See [[damage]] for more"]}]})

(def armour
  {:title "Armour"
   :refer-by [:armour]
   :style {:section true
           :list :bullet}
   :children ["Heroes, units, and enemies have armour values, each is handled slightly differently"
              {:title "Hero:"
               :body "armour value is the left number on their level token"
               :children ["Armour increases as the hero levels up, at levels 3 and 7"
                          {:body "Armour dictates how many [[wounds]] a hero takes when assigned damage"
                           :children ["The hero takes wounds equal to the damage assigned divided by the hero's armour value (round fractions up)"]}]}
              {:title "Unit:"
               :body "armour value is shown on the middle right of the card"
               :children [{:body "Armour represents how much damage a unit can absorb when damage is assigned to it"
                           :children ["Units are wounded when damage is assigned to them"
                                      "Units with resistances can absorb double their armour value, and if the damage is low enough will not take a wound"]}]}
              {:title "Enemy:"
               :body "armour value is shown at the top of their token"
               :children [{:body "Armour represents how much [[attack]] is needed to defeat that enemy"
                           :children ["Enemies are defeated when the total attack assigned to them is greater than or equal to their armour value"
                                      "Enemy armour may be reduced by some card effects, but may never be reduced below 1"]}]}]})

(def wounds
  {:title "Wounds & Healing"
   :refer-by [:wound :wounds :heal :healing]
   :style {:section true
           :list :bullet}
   :children [{:title "When a hero takes a wound:"
               :body "the player puts a wound card into their hand."
               :children ["Wounds in your hand count towards your hand limit"
                          "Wounds may not be discarded or played unless explicitly stated by an effect"
                          "Discarded wounds will be shuffled back into the deck in the next round"
                          "If a hero adds wounds equal to their unmodified hand limit during a combat, they are knocked out (see [[damage]])"]}
              {:title "When a [[unit]] takes a wound:"
               :body "put a wound card on the unit"
               :children ["If a unit is wounded by an enemy with the [[poison]] ability, it takes two wounds"
                          "Wounded units may not be spent"
                          "Units that are both spent and wounded may be readied, but may not be spent again until the wound is removed"]}
              {:title "Healing"
               :children ["Healing points may be purchased at a [[village]] or [[monastery]], or obtained through card/unit/skill effects"
                          "When you heal your hero, throw away one wound card from your hand for each point of healing"
                          {:body "To heal a unit, you must spend healing points equal to the unit's level"
                           :children ["A unit that has been poisoned must be healed twice to become unwounded"]}
                          "The [[end of turn]] effect of [[magical glade]]s does not count as healing, and may not be applied to units"]}]})

(def attack-types
  {:title "Attack Types"
   :children [{:title "Multiple attacks"
               :body "each attack is handled separately"
               :children ["Effects that prevent the enemy attacking prevent all attacks"
                          "Enemy is [[successfully blocked]] only if all attacks are blocked"]}
              {:title "Fire"
               :body "Only Ice and Cold Fire blocks are efficient"}
              {:title "Ice"
               :body "Only Fire and Cold Fire blocks are efficient"}
              {:title "Cold Fire"
               :body "Only Cold Fire blocks are efficient"}]})

(def defensive-abilities
  {:title "Defensive Abilities"
   :children [{:title "Fortified"
               :refer-by [:fortified]
               :body "Only siege attacks can target this enemy in the [[ranged attack]] phase"
               :children ["When an attack targets multiple enemies, if any of them are fortified, all of them are fortified"
                          "If an enemy with this ability is defending a [[fortified site]], it may not be targeted in the [[ranged attack]] phase"]}
              {:title "Physical Resistance"
               :body "physical attacks are [[inefficient]]"}
              {:title "Fire Resistance"
               :body "fire attacks are [[inefficient]], ignores the non-attack effects of red cards or unit abilities powered by red mana"}
              {:title "Ice Resistance"
               :body "ice attacks are [[inefficient]], ignores the non-attack effects of blue cards or unit abilities powered by blue mana"}
              {:title "Fire and Ice Resistance"
               :body "counts as the individual resistances, and also makes cold fire attacks [[inefficient]]"}
              {:title "Elusive"
               :body "the enemy has 2 armour values. The lower value is used only in the [[attack phase]] if the enemy is [[successfully blocked]]"
               :children ["The higher value applies in the [[ranged attack]] phase"
                          "Armour modifications apply to both values"]}
              {:title "Unfortified"
               :body "all site fortifications are ignored"}
              {:title "Arcane Immunity"
               :body "enemy is not affected by any non-attack/block effects"
               :children ["Effects that directly affect enemy attacks (e.g. reducing the attack value) still apply"]}
              {:title "Defend"
               :body "enemy will add a bonus to the armour value of the first enemy you attack"
               :children ["Enemies may apply the bonus to themselves if they are the first enemy attacked"
                          "Applies in both the [[ranged attack]] and [[attack phase]]"
                          "If multiple enemies have this ability, each bonus must be applied to a different enemy token, the player chooses which bonus applies to which enemy"
                          "If the enemy is defeated before the bonus is applied, the defend ability is ignored (when there are multiple enemies with defend abilities)"]}]})

(def offensive-abilities
  {:title "Offensive abilities"
   :children [{:title "Summon"
               :refer-by [:summon :summoned :summoning]
               :style {:list :bullet}
               :body "enemy summons a random enemy to attack on its behalf"
               :children ["At the start of the block phase, draw the required number of summoned enemy tokens"
                          {:body "The summoned enemy replaces the summoner during the block and damage phases, no effect may target the summoner during these phases"
                           :children ["Their attacks must be blocked or they will deal damage in the damage phase"
                                      "Their offensive/defensive abilities apply"]}
                          "Once the attack phase begins the summoner returns to play and can be targeted"
                          "If a summoned enemy is destroyed (e.g. using the Exploding Shield spell), no fame is gained"
                          "Effects that prevent a target attacking must be played before the summoned enemy is revealed, and stop the summon from happening. These effects cannot target summoned enemies"]}
              {:title "Swift"
               :refer-by [:swift]
               :body "requires double the attack value to be blocked"}
              {:title "Brutal"
               :refer-by [:brutal]
               :body "does double damage if unblocked"}
              {:title "Poison"
               :refer-by [:poison]
               :children ["If a unit is wounded, place 2 wounds on it, it must be healed twice to become unwounded"
                          "If your hero is wounded, place a wound in the discard pile for each wound you take into your hand"]}
              {:title "Paralyze"
               :refer-by [:paralyze]
               :children ["If a unit is wounded, it is destroyed"
                          "If your hero is wounded, immediately discard all non-wound cards from your hand"]}
              {:title "Assassination"
               :refer-by [:assassination]
               :body "attacks from this enemy cannot be assigned to units, they must be assigned to your hero"}
              {:title "Cumbersome"
               :refer-by [:cumbersome]
               :body "you may spend move points to reduce the attack value of this enemy"
               :children ["Each move point spent reduces the attack value by 1"
                          "May not used unused move points from the movement phase"
                          "Attacks reduced to zero are considered successfully blocked"]}
              {:title "Vampiric"
               :refer-by [:vampiric]
               :body "increase the armour value of the enemy by 1 for the rest of the combat for each unit it wounds and each wound it adds to your hand"}]})

(def enemy-abilities
  {:title "Enemy Abilities"
   :refer-by [:enemy-abilities :enemy-ability :abilities :ability]
   :style {:section true
           :list :none}
   :children [attack-types
              defensive-abilities
              offensive-abilities]})

(def combat-concepts
  {:title "Combat Concepts"
   :style {:section true
           :list :none}
   :children [elemental
              armour
              wounds
              enemy-abilities]})

(def ranged
  {:title "Ranged and Siege Attack Phase"
   :refer-by [:ranged-attack :siege-attack]
   :style {:section true
           :list :item}
   :body "Make any number of attacks, or move to the block phase"
   :children [{:body "For each attack:"
               :children [{:body "Choose one or more enemies as a target"
                           :children ["Enemies that are fortified (they have the fortified ability or they are defending a fortified [[site]]) may only be targeted by siege attacks"
                                      "Enemies that are double fortified (they have the ability AND they are defending a fortified site) may not be targeted in this phase"
                                      "If any targeted enemy is fortified, then all targeted enemies are fortified (same for double fortified)"]}
                          "Play any number of ranged or siege ranged attacks of any elements"
                          {:body "Total your attack value"
                           :children ["If any targeted enemy is resistant to the element of one of the attacks used, that damage is [[inefficient]]"
                                      "[[Cold Fire]] attacks are halved only when used against enemies that are resistant to both cold and fire"
                                      "Total all inefficient damage and divide by 2 (rounding down), and add to the total efficient damage"]}
                          {:body "Resolve attack"
                           :children ["If the attack value is greater than or equal to the total [[armour]] value of target enemies, the targeted enemies are [[defeated]]"
                                      "Otherwise the attack does nothing, damage is not carried over to subsequent phases"]}]}]})
(def block
  {:title "Block Phase"
   :refer-by [:block]
   :style {:section true
           :list :item}
   :children [{:body "If any enemies have the [[summon]] ability, draw the required summoned enemy tokens now"
               :children ["The summoned enemy replaces the summoner during the block and damage phases"
                          "No effect may target the summoner during these phases"
                          "Once the attack phase begins the summoner returns to play and can be targeted"]}
              {:body "Make any number of blocks, one attack at a time, or move to the damage phase"
               :children ["Each enemy not defeated in the [[ranged attack]] phase may be blocked"
                          "Unblocked attacks will deal damage in the next phase"
                          "Each attack of each enemy must be blocked separately"]}
              {:body "For each attack you wish to block:"
               :children [{:body "Play any number of blocks of any elemental types"
                           :children ["Cards played sideways provide 1 physical block"]}
                          {:body "Determine the total block value"
                           :children ["If the attack is elemental, blocks may be [[inefficient]]"
                                      "Total all inefficient blocks and divide by 2 (rounding down), and add to the total efficient blocks"]}
                          {:body "Resolve block"
                           :children ["If the block value is greater than or equal to the attack value, the attack is blocked and does no damage in the next phase"
                                      "Enemies with the [[swift]] ability require double the attack value to be blocked"
                                      "Otherwise the block does nothing, the enemy will deal full damage in the the next phase, block may not be carried over to subsequent phases"]}]}
              {:title "Successful block"
               :refer-by [:successful-block :successfully-blocked :blocked-successfully]
               :children ["An enemy is blocked successfully if all of their attacks are blocked"
                          "An enemy that doesn't attack (e.g. due to the Whirlwind spell) is not considered successfully blocked"
                          "An enemy that has its attack value reduced to 0 (for all attacks) is considered successfully blocked"
                          "Sometimes blocking cards have effects other than adding to block value (e.g. the Ice Shield [[advanced action]] card), these effects apply even if the block is unsuccessful"
                          "Some cards have effects that apply if an enemy is blocked, but do not provide block themselves (e.g. the Cure/Disease spell, or the Delphana Masters unit). These effects require a successful block"]}]})

(def damage
  {:title "Damage Phase"
   :refer-by [:damage]
   :style {:section true
           :list :item}
   :children ["Assign damage from each unblocked attack"
              "Skip to the attack phase if there are no attacks"
              {:body "For each unblocked attack"
               :children [{:body "The attack does damage equal to its value"
                           :children ["Enemies with the [[brutal]] ability deal double their attack value"
                                      "The damage of summoned enemies has the abilities shown on the token (e.g. a summoned medusa still has paralyze)"]}
                          "All damage must be assigned to one or more unwounded units and/or to your hero"
                          {:body "When assigning damage to a unit"
                           :children ["The unit must not be wounded, it may be spent"
                                      {:body "If the unit is not resistant to the element of the attack"
                                       :children ["Place a wound card on the unit, it is now wounded (even if it took less damage than its armour value)"
                                                  "Reduce the damage by the units' [[armour]] value"
                                                  "Any remaining damage must be assigned to another unit or your hero"]}
                                      {:body "If the unit is resistant to the element of the attack"
                                       :children ["Reduce the damage by the unit's armour value"
                                                  "If all damage is assigned, nothing further happens"
                                                  "If there is still damage to be assigned, place a wound card on the unit, it is now wounded"
                                                  "Reduce the damage by the unit's armour value a second time"
                                                  "Any remaining damage must be assigned to another unit or your hero"]}
                                      "If a unit is wounded by an enemy with the [[poison]] ability, it takes 2 wounds"
                                      "If a unit is wounded by an enemy with the [[paralyze]] ability, it is destroyed"]}
                          {:body "When assigning damage to your hero"
                           :children ["Divide the damage by your hero's [[armour]] value (rounding any fractions up)"
                                      "Put that number of wounds into your hand"
                                      "Enemies with the poison ability require you to put a wound into your discard pile for each wound you put into your hand"
                                      "If you are wounded by an enemy with the paralyze ability, you must discard all non-wound cards from your hand"]}]}
              {:title "Knockout"
               :refer-by [:knockout :knocked-out]
               :style {:list :bullet}
               :children ["After assigning damage from an attack, if you have added wound cards to your hand equal to or greater than your unmodified hand limit this combat, you are knocked out"
                          "When you are knocked out, immediately discard all non-wound cards from your hand"
                          "Wounds received from other sources (e.g. through card effects) count towards knockout"
                          "Wounds added to your discard pile via the poison ability do not count towards knockout"
                          "Wounds present in your hand at the start of combat do not count towards knockout"
                          {:body "While knocked out:"
                           :children ["Your units may continue to fight"
                                      "You may use skills"
                                      "You may assign damage to your hero and take further wounds as normal"]}]}
              "The damage phase ends once damage has been assigned from all attacks"]})
(def attack
  {:title "Attack Phase"
   :refer-by [:attack :attack-phase]
   :style {:section true
           :list :item}
   :children [{:body "The attack phase follows the same procedure as the [[ranged attack]] phase, except:"
               :children ["You can combine any attacks; ranged attack, siege attacks and/or regular attacks may be used"
                          "Fortifications no longer apply"
                          "Any non-wound card may be played sideways to provide 1 physical attack"]}
              "You may make any number of attacks against any combination of targets. The rules for enemy [[resistances]] are the same"]})

(def outcome
  {:title "Combat Outcomes"
   :style {:section true
           :list :item}
   :children ["Combat ends after the attack phase, you might defeat none, one or more enemies during the combat"
              {:body "For each enemy you defeated during the combat, gain the fame reward listed on the token"
               :children ["Summoned enemies do not provide fame"
                          "Some enemy tokens have [[reputation]] symbols beside the fame reward, gain or lose reputation as indicated"
                          "In some situations your fame reward may be halved (e.g. attacking another player's [[keep]])"
                          "Level ups do not happen until the [[end of turn]]"]}
              "If you defeated all enemies at the site, gain the reward listed on the site"
              "If you did not defeat all enemies at the site, follow the instructions listed on the site"]})

(def combat-phases
  {:title "Combat vs Enemies"
   :style {:section true
           :list :item}
   :children ["Reveal all enemies"
              ranged
              block
              damage
              attack
              outcome]})

(def all [combat-concepts
          combat-phases])
