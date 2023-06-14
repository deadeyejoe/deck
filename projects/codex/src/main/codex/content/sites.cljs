(ns codex.content.sites)

(def marauding-orcs
  {:title "Marauding Orcs"
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place green enemy token face up"}
              {:title "On defeat"
               :body "Discard and gain +1 [[Reputation]]"}]})

(def draconum
  {:title "Draconum"
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place red enemy token face up"}
              {:title "On defeat"
               :body "Discard and gain +2 [[Reputation]]"}]})

(def rampaging-enemy
  {:title "Rampaging enemy"
   :refer-by [:rampaging-enemy :rampaging]
   :style {:list :none}
   :children [{:title "Effects"
               :children ["Can't enter a space containing a rampaging enemy"
                          "Challenge (voluntary action): challenge to combat from an adjacent space"
                          "Provoke (mandatory action): Attacks a player if they move between adjacent spaces"
                          "Multiple rampaging enemies can be challenged/provoked simultaneously"]}
              marauding-orcs
              draconum]})

(def monastery
  {:title "Monastery"
   :refer-by [:monastery]
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place monastery token face up"}
              {:title "Reward"
               :body "Discard and gain +1 [[Reputation]]"}]})

(def village
  {:title "Village"
   :refer-by [:village]
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place village token face up"}
              {:title "Reward"
               :body "Discard and gain +1 [[Reputation]]"}]})

(def inhabited-sites
  {:title "Inhabited Sites"
   :refer-by [:inhabited-site]
   :style {:list :none}
   :body "Includes conquered keeps, mage towers, and cities"
   :children [village
              monastery]})

(def keep-site
  {:title "Keep"
   :refer-by [:keep]
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place grey enemy face-down. Reveal if a player is adjacent during the day"}
              {:title "Unconquered"
               :children [{:title "Assault (mandatory action)"
                           :style {:list  :bullet}
                           :children ["Move onto space to attack the keep"
                                      "Receive -1 [[Reputation]] for assaulting"
                                      "Defending enemies are fortified"]}
                          {:title "On success"
                           :body "Mark with shield as new owner"}]}
              {:title "Conquered (owned by other player))"
               :children [{:title "Assault (mandatory action)"
                           :style {:list  :bullet}
                           :children ["Move onto space to attack the keep"
                                      "Receive -1 [[Reputation]] for assaulting"
                                      "Draw and fight a random grey enemy"
                                      "Defending enemies are fortified"]}
                          {:title "On success"
                           :children ["Half fame reward (round up)"
                                      "Replace owners shield with your own"]}]}
              {:title "Conquered (owned by you)"
               :style {:list :bullet}
               :children ["Recruit units with keep icon"
                          "If you end your turn on or adjacent to a keep you own, hand limit +1 for each keep you own"]}]})

(def mage-tower
  {:title "Mage Tower"
   :refer-by [:mage-tower]
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place purple enemy token face down, reveal if a player is adjacent during the day"}
              {:title "Unconquered"
               :children [{:title "Assault (mandatory action)"
                           :style {:list  :bullet}
                           :children ["Move onto space to attack the mage tower"
                                      "Receive -1 [[Reputation]] for assaulting"
                                      "Defending enemy is fortified"]}
                          {:title "On success"
                           :children ["Mark with shield as new owner"
                                      "[[Gain]] one spell"]}]}
              {:title "Conquered"
               :children ["Recruit units with mage tower icon"
                          "Purchase spells for 7 influence and a mana of the spell's colour"]}]})

(def city
  {:title "City"
   :refer-by [:city]
   :style {:list :none}
   :children [{:title "Revealed"
               :body "Place city token face up"}
              {:title "Reward"
               :body "Discard and gain +3 [[Reputation]]"}]})

(def fortified-sites
  {:title "Fortified Sites"
   :refer-by [:fortified-site]
   :style {:list :none}
   :body "Includes conquered keeps, mage towers, and cities"
   :children [keep-site
              mage-tower
              city]})

(def adventure-sites
  {:title "Adventure Sites"
   :refer-by [:adventure-site]
   :style {:list :none}
   :children []})

(def special-sites
  {:title "Special Sites"
   :refer-by [:special-site]
   :style {:list :none}
   :children []})

(def all
  {:title "Sites"
   :style {:list :none}
   :children [inhabited-sites
              fortified-sites
              rampaging-enemy
              adventure-sites
              special-sites]})
