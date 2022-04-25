(ns conclave.player
  (:require [clojure.spec.alpha :as s]))

(def races {0  {:key 0  :name "The Arborec"}
            1  {:key 1  :name "The Argent Flight" :pok true}
            2  {:key 2  :name "The Barony of Letnev"}
            3  {:key 3  :name "The Clan of Saar"}
            4  {:key 4  :name "The Embers of Muaat"}
            5  {:key 5  :name "The Emirates of Hacan"}
            6  {:key 6  :name "The Empyrean" :pok true}
            7  {:key 7  :name "The Federation of Sol"}
            8  {:key 8  :name "The Ghosts of Creuss"}
            9  {:key 9  :name "The Lizix Mindnet"}
            10 {:key 10 :name "The Mahact Gene-sorcerers" :pok true}
            11 {:key 11 :name "The Mentak Coalition"}
            12 {:key 12 :name "The Naalu Collective"}
            13 {:key 13 :name "The Naaz-Rokha Alliance" :pok true}
            14 {:key 14 :name "The Nekro Virus"}
            15 {:key 15 :name "The Nomad" :pok true}
            16 {:key 16 :name "Sardakk N'orr"}
            17 {:key 17 :name "The Titans of Ul" :pok true}
            18 {:key 18 :name "The Universities of Jol-Nar"}
            19 {:key 19 :name "The Vuil'raith Cabal" :pok true}
            20 {:key 20 :name "The Winnu"}
            21 {:key 21 :name "The Xxcha Kingdom"}
            22 {:key 22 :name "The Yin Brotherhood"}
            23 {:key 23 :name "The Yssaril Tribes"}})

(s/def ::key keyword?)
(s/def ::name string?)
(s/def ::race (-> races keys set))
(s/def ::instance (s/keys :req-un [::key
                                   ::name
                                   ::race]))
