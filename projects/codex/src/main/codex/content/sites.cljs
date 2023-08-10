(ns codex.content.sites)

(def monastery
  {:title "Monastery"
   :refer-by [:monastery]
   :style {:section true
           :list :none}
   :children [{:revealed "Place 1 [[advanced action]] in the unit offer"}
              {:title "Recruiting:"
               :body "Recruit units with monastery icon"}
              {:title "Healing:"
               :body "Buy 1 point for 2 influence"}
              {:title "Training:"
               :body "Purchase an advanced action from the unit offer for 6 influence"}
              {:title "Burning:"
               :body "You may burn the monastery as your action for the turn"
               :style {:list :bullet}
               :children ["Lose 3 [[reputation]]"
                          "Draw and fight a random violet enemy token. Units may not be used"
                          {:title "On sucess:" :body "mark with shield and gain an [[artifact]] as a reward"}
                          {:title "On defeat:" :body "Discard the enemy token"}]}]})

(def village
  {:title "Village"
   :refer-by [:village]
   :style {:section true
           :list :none}
   :children [{:title "Recruiting:"
               :body "Recruit units with village icon"}
              {:title "Healing:"
               :body "Buy 1 point for 3 influence"}
              {:title "Plundering:"
               :body "Once between each of your turns, draw 2 cards and get -1 [[Reputation]]"}]})

(def refugee-camp
  {:title "Refugee Camp"
   :refer-by [:refugee-camp]
   :style {:section true
           :list :none}
   :children [{:title "Recruiting:"
               :body "Recruit units with any icon"
               :style {:list :bullet}
               :children ["[[Keep]], [[Mage Tower]], and [[Monastery]] units costs 1 influence extra"
                          "[[City]] units cost 3 influence extra"
                          "Pay the lowest cost if multiple apply"]}]})

(def inhabited-sites
  {:title "Inhabited Sites"
   :refer-by [:inhabited-site]
   :style {:list :none}
   :body "Includes conquered keeps, mage towers, and cities"
   :children [village
              monastery
              refugee-camp]})

(def keep-site
  {:title "Keep"
   :refer-by [:keep]
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :body "Place grey enemy face-down. Reveal if a player is adjacent during the day"}
              {:title "Unconquered:"
               :body "move onto space to assault the keep (mandatory action once you move onto the space)"
               :style {:list :bullet}
               :children ["Receive -1 [[Reputation]] for assaulting"
                          "Defending enemy is fortified"
                          {:title "On success"
                           :body "mark with shield as new owner"}
                          {:title "On defeat"
                           :body "Enemy token remains, player must [[withdraw]]"}]}
              {:title "Conquered (owned by other player):"
               :body "move onto space to assault the keep (mandatory action once you move onto the space)"
               :style {:list :bullet}
               :children ["Move onto space to attack the keep"
                           "Receive -1 [[Reputation]] for assaulting"
                           "Draw and fight a random grey enemy"
                           "Defending enemy is fortified"
                           {:title "On success:"
                            :children ["Half fame reward (round up)"
                                       "Replace owners shield with your own"]}
                          {:title "On defeat:"
                           :body "Enemy token remains, player must withdraw"}]}
              {:title "Conquered (owned by you):"
               :style {:list :bullet}
               :children ["Recruit units with keep icon"
                          "If you end your turn on or adjacent to a keep you own, hand limit +1 for each keep you own"]}]})

(def mage-tower
  {:title "Mage Tower"
   :refer-by [:mage-tower]
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :body "Place purple enemy token face down, reveal if a player is adjacent during the day"}
              {:title "Unconquered:"
               :body "Move onto space to attack the mage tower (mandatory action once you move onto the space)"
               :style {:list :bullet}
               :children ["Receive -1 [[Reputation]] for assaulting"
                          "Defending enemy is fortified"
                          {:title "On success:"
                           :children ["Mark with shield as new owner"
                                      "[[Gain]] one spell"]}
                          {:title "On defeat:"
                           :body "Enemy token remains, player must [[withdraw]]"}]}
              {:title "Conquered:"
               :style {:list :bullet}
               :children ["Recruit units with mage tower icon"
                          "Purchase spells for 7 influence and a mana of the spell's colour"]}]})

(def city
  {:title "City"
   :refer-by [:city]
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :style {:list :bullet}
               :children ["Place city figure on map"
                          "Place city card on table"
                          "Put enemy tokens depicted on base face down on table"
                          "Reveal enemies when player is adjacent"]}
              {:title "Unconquered:"
               :body "One or more players may move onto space to assault the city (mandatory action)"
               :style {:list :bullet}
               :children ["Move cost for all cities is 2"
                          "Receive -1 [[Reputation]] for assaulting"
                          {:body "Defenders are fortified and receive a bonus depending on the city:"
                           :children [{:title "Red"
                                       :body "physical attackers gain [[brutal]] ability"}
                                      {:title "Green"
                                       :body "physical attackers gain [[poison]] ability"}
                                      {:title "White"
                                       :body "all enemies gain +1 armour"}
                                      {:title "Blue"
                                       :body "enemies gain +2 to ice and fire attacks, +1 to [[cold fire]] attacks"}]}
                          "For each enemy defeated, place 1 shield on the city card"
                          {:title "If all enemies defeated:"
                           :body "leader is player with most shields (ties broken by player who placed first shield)"}
                          {:title "If any enemies remain:"
                           :body "enemy tokens remain, player must [[withdraw]]"}]}
              {:title "Conquered"
               :style {:list :bullet}
               :children ["Multiple players may occupy, no PvP combat"
                          "When interacting, gain +1 [[reputation per shield]]"
                          {:body "If you end your turn on or adjacent to a city you own, hand limit +2 if you are the leader, or +1 if you have at least one shield"
                           :children ["Does not stack with [[keep]] bonus, choose which bonus to use"]}
                          {:title "Recruiting:"
                           :body "Recruit units with city icon"}
                          {:title "Interacting:"
                           :body "Each city provides a different unique interaction"
                           :children [{:title "Red"
                                       :body "buy an [[artifact]] for 12 influence"}
                                      {:title "Green"
                                       :body "pay 6 influence to purchase an [[advanced action]] from the offer, or from the top of the advanced action deck"}
                                      {:title "White"
                                       :children ["recruit [[units]] of any type"
                                                  "pay 2 influence to add a gold unit to the offer"]}
                                      {:title "Blue"
                                       :body "purchase a [[spell]] for 7 influence and a mana of the spell's colour"}]}]}]})

(def fortified-sites
  {:title "Fortified Sites"
   :refer-by [:fortified-site]
   :style {:section true
           :list :none}
   :body "Includes conquered keeps, mage towers, and cities"
   :children [keep-site
              mage-tower
              city]})

(def marauding-orcs
  {:title "Marauding Orcs"
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :body "Place green enemy token face up"}
              {:title "On success:"
               :body "Discard and gain +1 [[Reputation]]"}
              {:title "On defeat:"
               :body "token remains on the map"}]})

(def draconum
  {:title "Draconum"
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :body "Place red enemy token face up"}
              {:title "On success:"
               :body "Discard and gain +2 [[Reputation]]"}
              {:title "On defeat:"
               :body "token remains on the map"}]})

(def rampaging-enemy
  {:title "Rampaging enemies"
   :refer-by [:rampaging-enemy :rampaging]
   :style {:section true
           :list :none}
   :children [{:title "Effects"
               :style {:list :bullet}
               :children ["Can't enter a space containing a rampaging enemy"
                          {:title "Challenge (voluntary action):"
                           :body "challenge to combat from an adjacent space"}
                          {:title "Provoke (mandatory action):"
                           :body "Attacks a player if they move between adjacent spaces"}
                          "Multiple rampaging enemies can be challenged/provoked simultaneously"]}
              marauding-orcs
              draconum]})

(def ancient-ruins
  {:title "Ancient Ruins"
   :refer-by [:ancient-ruins]
   :style {:section true
           :list :none}
   :children [{:title "Revealed:"
               :body "Place yellow ruins token face up if day, face down if night. A face down token is revealed at the start of the next day, or if a player enters the space"}
              {:title "Unconquered:"
               :body "Enter the ruins (voluntary action)"
               :style {:list :bullet}
               :children [{:title "Altar:"
                           :body "Pay the depicted mana, mark with a shield and gain reward"}
                          {:title "Enemies:"
                           :children ["Draw depicted enemies and fight"
                                      "Successful if all enemies defeated"
                                      {:title "On success:"
                                       :body "mark with a shield and gain depicted reward"}
                                      {:title "On defeat:"
                                       :body "Undefeated enemies remain"}]}]}]})

(def dungeon
  {:title "Dungeon"
   :refer-by [:dungeon]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the dungeon (voluntary action)"
               :style {:list :bullet}
               :children ["Draw brown enemy token and fight"
                          "Night rules apply (may use black mana and cast strong effect of spells)"
                          "May not use [[units]]"
                          {:title "On success:"
                           :body "mark with shield and roll mana die for reward"
                           :children ["Gold/black gain a spell"
                                      "Otherwise gain an artifact"]}
                          {:title "On defeat:" 
                           :body "discard enemy token. Next player fights a different enemy"}]}
              {:title "Conquered:"
               :body "Enter the dungeon (voluntary action)"
               :style {:list :bullet}
               :children ["Draw brown enemy token and fight"
                          "Night rules apply"
                          "May not use units"
                          {:title "On success:"
                           :body "gain fame reward only"}
                          {:title "On defeat:"
                           :body "discard enemy token"}]}]})

(def tomb
  {:title "Tomb"
   :refer-by [:tomb]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the tomb (voluntary action)"
               :style {:list :bullet}
               :children ["Draw red enemy token and fight"
                          "Night rules apply (may use black mana and cast strong effect of spells)"
                          "May not use [[units]]"
                          {:title "On success:"
                           :body "mark with shield and gain a spell and an artifact"}
                          {:title "On defeat:"
                           :body "discard enemy token"}]}
              {:title "Conquered:"
               :body "Enter the tomb (voluntary action)"
               :style {:list :bullet}
               :children ["Draw red enemy token and fight"
                          "Night rules apply"
                          "May not use units"
                          {:title "On success:"
                           :body "gain fame reward only"}
                          {:title "On defeat:"
                           :body "discard enemy token"}]}]})

(def monster-den
  {:title "Monster Den"
   :refer-by [:monster-den]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the den (voluntary action)"
               :style {:list :bullet}
               :children ["Draw brown enemy token and fight"
                          {:title "On success:"
                           :body "mark with shield and [[gain]] 2 random crystals"}
                          {:title "On defeat:"
                           :body "enemy token remains"}]}]})

(def spawning-grounds
  {:title "Spawning Grounds"
   :refer-by [:spawning-grounds]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the spawning grounds (voluntary action)"
               :style {:list :bullet}
               :children ["Draw 2 brown enemy tokens and fight"
                          "Successful if both enemies defeated"
                          {:title "On success:"
                           :body "mark with shield and [[gain]] an artifact and 3 random crystals"}
                          {:title "On defeat:"
                           :body "undefeated enemy tokens remain, defeated tokens are replaced with a new token"}]}]})

(def maze
  {:title "Maze"
   :refer-by [:maze]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the maze (voluntary action)"
               :style {:list :bullet}
               :children ["Choose one unit to bring into the maze, other units cannot be used"
                          {:title "Choose path:"
                           :body "pay 2, 4 or 6 movement (cannot use remaining movement points from movement phase)"}
                          "Draw a brown enemy token and fight"
                          {:title "On sucess:"
                           :body "mark the path with a shield, and gain a reward depending on the path chosen"
                           :children [{:title "2:"
                                       :body "2 crystals of choice"}
                                      {:title "4:"
                                       :body "Spell"}
                                      {:title "6:"
                                       :body "Artifact"}]}
                          {:title "On defeat:"
                           :body "discard enemy token"}]}
              {:title "Partially Conquered:"
               :body "Enter the maze (voluntary action)"
               :style {:list :bullet}
               :children ["Must choose an unconquered path"
                          "Players may not enter a maze they have conquered before"]}]})

(def labyrinth
  {:title "Labyrinth"
   :refer-by [:labyrinth]
   :style {:section true
           :list :none}
   :children [{:title "Unconquered:"
               :body "Enter the labyrinth (voluntary action)"
               :style {:list :bullet}
               :children ["Choose one unit to bring into the labyrinth, other units cannot be used"
                          {:title "Choose path:"
                           :body "pay 2, 4 or 6 movement (cannot use remaining movement points from movement phase)"}
                          "Draw a red enemy token and fight"
                          {:title "On success:"
                           :body "mark the path with a shield, gain an [[advanced action]] and a reward depending on the path chosen"
                           :children [{:title "2:"
                                       :body "2 crystals of choice"}
                                      {:title "4:"
                                       :body "Spell"}
                                      {:title "6:"
                                       :body "Artifact"}]}
                          {:title "On defeat:"
                           :body "discard enemy token"}]}
              {:title "Partially Conquered:"
               :body "Enter the labyrinth (voluntary action)"
               :style {:list :bullet}
               :children ["Must choose an unconquered path"
                          "Players may not enter a labyrinth they have conquered before"]}]})

(def adventure-sites
  {:title "Adventure Sites"
   :refer-by [:adventure-site]
   :style {:section true
           :list :none}
   :children [ancient-ruins
              dungeon
              tomb
              monster-den
              spawning-grounds
              maze
              labyrinth]})

(def mine
  {:title "Mine"
   :refer-by [:mine]
   :style {:section true
           :list :none}
   :children [{:title "Mining:"
               :body "At end of turn gain one crystal of the colour shown"}]})

(def deep-mine
  {:title "Deep Mine"
   :refer-by [:deep-mine]
   :style {:section true
           :list :none}
   :children [{:title "Mining:"
               :body "At end of turn gain a crystal of one of the colours shown"}]})

(def magical-glade
  {:title "Magical Glade"
   :refer-by [:magical-glade :glade]
   :style {:section true
           :list :none}
   :children [{:title "Healing Essence:"
               :body "At end of turn throw away one [[wound]] from hand or discard pile. This cannot be combined with healing effects"}
              {:title "Imbued with Magic:"
               :body "At the beginning of your turn, gain 1 gold mana token during the day, or one black mana token at night"}]})

(def walls
  {:title "Walls"
   :refer-by [:walls]
   :style {:section true
           :list :none}
   :children [{:title "Movement:"
               :body "to cross a wall pay 1 extra movement above the terrain cost"
               :style {:list :bullet}
               :children ["Terrain discounts cannot reduce this cost"
                          "Ignore if an effect allows you to move directly"]}
              {:title "Combat:"
               :style {:list :bullet}
               :children ["[[Rampaging enemies]] challenged across a wall are fortified"
                          "When assaulting a [[fortified site]] across a wall are double [[fortified]]"
                          "Movement does not provoke [[rampaging enemies]] across a wall"]}]})

(def special-sites
  {:title "Special Sites"
   :refer-by [:special-site]
   :style {:section true
           :list :none}
   :children [mine
              deep-mine
              magical-glade
              walls]})

(def all
  {:title "Sites"
   :refer-by [:site :sites]
   :style {:section true
           :list :none}
   :children [inhabited-sites
              fortified-sites
              rampaging-enemy
              adventure-sites
              special-sites]})
