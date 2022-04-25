(ns conclave.player
  (:require [clojure.spec.alpha :as s]))

(def races {0  {:key 0  :name "The Arborec" :code "arborec"}
            1  {:key 1  :name "The Argent Flight" :pok true :code "argent"}
            2  {:key 2  :name "The Barony of Letnev" :code "letnev"}
            3  {:key 3  :name "The Clan of Saar" :code "saar"}
            4  {:key 4  :name "The Embers of Muaat" :code "muaat"}
            5  {:key 5  :name "The Emirates of Hacan" :code "hacan"}
            6  {:key 6  :name "The Empyrean" :pok true :code "empyrean"}
            7  {:key 7  :name "The Federation of Sol" :code "sol"}
            8  {:key 8  :name "The Ghosts of Creuss" :code "creuss"}
            9  {:key 9  :name "The Lizix Mindnet" :code "l1z1x"}
            10 {:key 10 :name "The Mahact Gene-sorcerers" :pok true :code "mahact"}
            11 {:key 11 :name "The Mentak Coalition" :code "mentak"}
            12 {:key 12 :name "The Naalu Collective" :code "naalu"}
            13 {:key 13 :name "The Naaz-Rokha Alliance" :pok true :code "naaz-rokha"}
            14 {:key 14 :name "The Nekro Virus" :code "nekro"}
            15 {:key 15 :name "The Nomad" :pok true :code "nomad"}
            16 {:key 16 :name "Sardakk N'orr" :code "sardakk"}
            17 {:key 17 :name "The Titans of Ul" :pok true :code "titans"}
            18 {:key 18 :name "The Universities of Jol-Nar" :code "jol-nar"}
            19 {:key 19 :name "The Vuil'raith Cabal" :pok true :code "vuilraith"}
            20 {:key 20 :name "The Winnu" :code "winnu"}
            21 {:key 21 :name "The Xxcha Kingdom" :code "xxcha"}
            22 {:key 22 :name "The Yin Brotherhood" :code "yin"}
            23 {:key 23 :name "The Yssaril Tribes" :code "yssaril"}})

(s/def ::key keyword?)
(s/def ::name string?)
(s/def ::race (-> races keys set))
(s/def ::instance (s/keys :req-un [::key
                                   ::name
                                   ::race]))
