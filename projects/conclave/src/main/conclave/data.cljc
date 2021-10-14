(ns conclave.data)

(def tiles-raw
  {:1 {:type :green
       :race "The Federation of Sol"
       :planets [{:name "Jord"
                  :resources 4
                  :influence 2}]}
   :2 {:type :green
       :race "The Mentak Coalition"
       :planets [{:name "Moll Primus"
                  :resources 4
                  :influence 1}]}
   :3 {:type :green
       :race "The Yin Brotherhood"
       :planets [{:name "Darien"
                  :resources 4
                  :influence 4}]}
   :4 {:type :green
       :race "The Embers of Muaat"
       :planets [{:name "Muaat"
                  :resources 4
                  :influence 1}]}
   :5 {:type :green
       :race "The Arborec"
       :planets [{:name "Nestphar"
                  :resources 3
                  :influence 2}]}
   :6 {:type :green
       :race "The Lizix Mindnet"
       :planets [{:name "[0.0.0]"
                  :resources 5
                  :influence 0}]}
   :7 {:type :green
       :race "The Winnu"
       :planets [{:name "Winnu"
                  :resources 3
                  :influence 4}]}
   :8 {:type :green
       :race "The Nekro Virus"
       :planets [{:name "Mordai II"
                  :resources 4
                  :influence 0}]}
   :9 {:type :green
       :race "The Naalu Collective"
       :planets [{:name "Maaluuk"
                  :resources 2
                  :influence 0}
                 {:name "Druaa"
                  :resources 3
                  :influence 1}]}
   :10 {:type :green
        :race "The Barony of Letnev"
        :planets [{:name "Arc Prime"
                   :resources 4
                   :influence 0}
                  {:name "Wren Terra"
                   :resources 2
                   :influence 1}]}
   :11 {:type :green
        :race "The Clan of Saar"
        :planets [{:name "Lisis II"
                   :resources 1
                   :influence 0}
                  {:name "Ragh"
                   :resources 2
                   :influence 1}]}
   :12 {:type :green
        :race "The Universities of Jol-Nar"
        :planets [{:name "Nar"
                   :resources 2
                   :influence 3}
                  {:name "Jol"
                   :resources 1
                   :influence 2}]}
   :13 {:type :green
        :race "Sardakk N'orr"
        :planets [{:name "Tren'lak"
                   :resources 1
                   :influence 0}
                  {:name "Quinarra"
                   :resources 3
                   :influence 1}]}
   :14 {:type :green
        :race "The Xxcha Kingdom"
        :planets [{:name "Archon Ren"
                   :resources 2
                   :influence 3}
                  {:name "Archon Tau"
                   :resources 1
                   :influence 1}]}
   :15 {:type :green
        :race "The Yssaril Tribes"
        :planets [{:name "Retillion"
                   :resources 2
                   :influence 3}
                  {:name "Shalloq"
                   :resources 1
                   :influence 2}]}
   :16 {:type :green
        :race "The Emirates of Hacan"
        :planets [{:name "Arretze"
                   :resources 2
                   :influence 0}
                  {:name "Hercant"
                   :resources 1
                   :influence 1}
                  {:name "Kamdorn"
                   :resources 0
                   :influence 1}]}
   :17 {:type :green
        :race "The Ghosts of Creuss"
        :wormhole :delta
        :planets []}
   :18 {:type :blue
        :planets [{:name "Mecatol Rex"
                   :resources 1
                   :influence 6}]}
   :19 {:type :blue
        :planets [{:name "Wellon"
                   :resources 1
                   :influence 2
                   :trait :industrial
                   :specialty :cybernetic}]}
   :20 {:type :blue
        :planets [{:name "Vefut II"
                   :resources 2
                   :influence 2
                   :trait :hazardous}]}
   :21 {:type :blue
        :planets [{:name "Thibah"
                   :resources 1
                   :influence 1
                   :trait :industrial
                   :specialty :propulsion}]}
   :22 {:type :blue
        :planets [{:name "Tar'mann"
                   :resources 1
                   :influence 1
                   :trait :industrial
                   :specialty :biotic}]}
   :23 {:type :blue
        :planets [{:name "Saudor"
                   :resources 2
                   :influence 2
                   :trait :industrial}]}
   :24 {:type :blue
        :planets [{:name "Mehar Xull"
                   :resources 1
                   :influence 3
                   :trait :hazardous
                   :specialty :warfare}]}
   :25 {:type :blue
        :wormhole :beta
        :planets [{:name "Quann"
                   :resources 2
                   :influence 1
                   :trait :cultural}]}
   :26 {:type :blue
        :wormhole :alpha
        :planets [{:name "Lodor"
                   :resources 3
                   :influence 1
                   :trait :cultural}]}
   :27 {:type :blue
        :planets [{:name "New Albion"
                   :resources 1
                   :influence 1
                   :trait :industrial
                   :specialty :biotic}
                  {:name "Starpoint"
                   :resources 3
                   :influence 1
                   :trait :hazardous}]}
   :28 {:type :blue
        :planets [{:name "Tequ'ran"
                   :resources 2
                   :influence 0
                   :trait :hazardous}
                  {:name "Torkan"
                   :resources 0
                   :influence 3
                   :trait :cultural}]}
   :29 {:type :blue
        :planets [{:name "Qucen'n"
                   :resources 1
                   :influence 2
                   :trait :industrial}
                  {:name "Rarron"
                   :resources 0
                   :influence 3
                   :trait :cultural}]}
   :30 {:type :blue
        :planets [{:name "Mellon"
                   :resources 0
                   :influence 2
                   :trait :cultural}
                  {:name "Zohbat"
                   :resources 3
                   :influence 1
                   :trait :hazardous}]}
   :31 {:type :blue
        :planets [{:name "Lazar"
                   :resources 1
                   :influence 0
                   :trait :industrial
                   :specialty :cybernetic}
                  {:name "Sakulag"
                   :resources 2
                   :influence 1
                   :trait :hazardous}]}
   :32 {:type :blue
        :planets [{:name "Dal Bootha"
                   :resources 0
                   :influence 2
                   :trait :cultural}
                  {:name "Xxehan"
                   :resources 1
                   :influence 1
                   :trait :cultural}]}
   :33 {:type :blue
        :planets [{:name "Corneeq"
                   :resources 1
                   :influence 2
                   :trait :cultural}
                  {:name "Resulon"
                   :resources 2
                   :influence 0
                   :trait :cultural}]}
   :34 {:type :blue
        :planets [{:name "Centauri"
                   :resources 1
                   :influence 3
                   :trait :cultural}
                  {:name "Gral"
                   :resources 1
                   :influence 1
                   :trait :industrial
                   :specialty :propulsion}]}
   :35 {:type :blue
        :planets [{:name "Bereg"
                   :resources 3
                   :influence 1
                   :trait :hazardous}
                  {:name "Lirta IV"
                   :resources 2
                   :influence 3
                   :trait :hazardous}]}
   :36 {:type :blue
        :planets [{:name "Arnor"
                   :resources 2
                   :influence 1
                   :trait :industrial}
                  {:name "Lor"
                   :resources 1
                   :influence 2
                   :trait :industrial}]}
   :37 {:type :blue
        :planets [{:name "Arinam"
                   :resources 1
                   :influence 2
                   :trait :industrial}
                  {:name "Meer"
                   :resources 0
                   :influence 4
                   :trait :hazardous
                   :specialty :warfare}]}
   :38 {:type :blue
        :planets [{:name "Abyz"
                   :resources 3
                   :influence 0
                   :trait :hazardous}
                  {:name "Fria"
                   :resources 2
                   :influence 0
                   :trait :hazardous}]}
   :39 {:type :red
        :wormhole :alpha
        :planets []}
   :40 {:type :red
        :wormhole :beta
        :planets []}
   :41 {:type :red
        :anomaly :gravity-rift
        :planets []}
   :42 {:type :red
        :anomaly :nebula
        :planets []}
   :43 {:type :red
        :anomaly :supernova
        :planets []}
   :44 {:type :red
        :anomaly :asteroid-field
        :planets []}
   :45 {:type :red
        :anomaly :asteroid-field
        :planets []}
   :46 {:type :red
        :anomaly :empty
        :planets []}
   :47 {:type :red
        :anomaly :empty
        :planets []}
   :48 {:type :red
        :anomaly :empty
        :planets []}
   :49 {:type :red
        :anomaly :empty
        :planets []}
   :50 {:type :red
        :anomaly :empty
        :planets []}
   :51 {:type :green
        :wormhole :delta
        :race "The Ghosts of Creuss"
        :planets [{:name "Creuss"
                   :resources 4
                   :influence 2}]}
   :52 {:type :green
        :pok true
        :race "The Mahact Gene-sorcerers"
        :planets [{:name "Ixth"
                   :resources 3
                   :influence 5}]}
   :53 {:type :green
        :pok true
        :race "The Nomad"
        :planets [{:name "Arcturus"
                   :resources 4
                   :influence 4}]}
   :54 {:type :green
        :pok true
        :race "The Vuil'raith Cabal"
        :planets [{:name "Acheron"
                   :resources 4
                   :influence 0}]}
   :55 {:type :green
        :pok true
        :race "The Titans of Ul"
        :planets [{:name "Elysium"
                   :resources 4
                   :influence 1}]}
   :56 {:type :green
        :pok true
        :race "The Empyrean"
        :planets [{:name "The Dark"
                   :resources 3
                   :influence 4}]}
   :57 {:type :green
        :pok true
        :race "The Naaz-Rokha Alliance"
        :planets [{:name "Naazir"
                   :resources 2
                   :influence 1}
                  {:name "Rokha"
                   :resources 1
                   :influence 2}]}
   :58 {:type :green
        :pok true
        :race "The Argent Flight"
        :planets [{:name "Valk"
                   :resources 2
                   :influence 0}
                  {:name "Avar"
                   :resources 1
                   :influence 1}
                  {:name "Ylir"
                   :resources 0
                   :influence 2}]}
   :59 {:type :blue
        :pok true
        :planets [{:name "Archon Vail"
                   :resources 1
                   :influence 3
                   :trait :hazardous
                   :specialty :propulsion}]}
   :60 {:type :blue
        :pok true
        :planets [{:name "Perimeter"
                   :resources 2
                   :influence 1
                   :trait :industrial}]}
   :61 {:type :blue
        :pok true
        :planets [{:name "Perimeter"
                   :resources 2
                   :influence 0
                   :trait :industrial
                   :specialty :warfare}]}
   :62 {:type :blue
        :pok true
        :planets [{:name "Sem-Lore"
                   :resources 3
                   :influence 2
                   :trait :cultural
                   :specialty :cybernetic}]}
   :63 {:type :blue
        :pok true
        :planets [{:name "Vorhal"
                   :resources 0
                   :influence 2
                   :trait :cultural
                   :specialty :biotic}]}
   :64 {:type :blue
        :pok true
        :wormhole :beta
        :planets [{:name "Atlas"
                   :resources 3
                   :influence 1
                   :trait :hazardous}]}
   :65 {:type :blue
        :pok true
        :planets [{:name "Primor"
                   :resources 2
                   :influence 1
                   :trait :cultural
                   :legendary true}]}
   :66 {:type :blue
        :pok true
        :planets [{:name "Hope's End"
                   :resources 3
                   :influence 0
                   :trait :hazardous
                   :legendary true}]}
   :67 {:type :red
        :pok true
        :anomaly :gravity-rift
        :planets [{:name "Cormund"
                   :resources 2
                   :influence 0
                   :trait :hazardous}]}
   :68 {:type :red
        :pok true
        :anomaly :nebula
        :planets [{:name "Everra"
                   :resources 3
                   :influence 1
                   :trait :cultural}]}
   :69 {:type :blue
        :pok true
        :planets [{:name "Accoen"
                   :resources 2
                   :influence 3
                   :trait :industrial}
                  {:name "Jeol Ir"
                   :resources 2
                   :influence 3
                   :trait :industrial}]}
   :70 {:type :blue
        :pok true
        :planets [{:name "Kraag"
                   :resources 2
                   :influence 1
                   :trait :hazardous}
                  {:name "Siig"
                   :resources 0
                   :influence 2
                   :trait :hazardous}]}
   :71 {:type :blue
        :pok true
        :planets [{:name "Ba'Kal"
                   :resources 3
                   :influence 2
                   :trait :industrial}
                  {:name "Alio Prima"
                   :resources 1
                   :influence 1
                   :trait :cultural}]}
   :72 {:type :blue
        :pok true
        :planets [{:name "Lisis"
                   :resources 2
                   :influence 2
                   :trait :industrial}
                  {:name "Velnor"
                   :resources 2
                   :influence 1
                   :trait :industrial
                   :specialty :warfare}]}
   :73 {:type :blue
        :pok true
        :planets [{:name "Lisis"
                   :resources 0
                   :influence 2
                   :trait :cultural
                   :specialty :cybernetic}
                  {:name "Xanhact"
                   :resources 0
                   :influence 1
                   :trait :hazardous}]}
   :74 {:type :blue
        :pok true
        :planets [{:name "Vega Major"
                   :resources 2
                   :influence 1
                   :trait :cultural}
                  {:name "Vega Minor"
                   :resources 1
                   :influence 2
                   :trait :cultural
                   :specialty :propulsion}]}
   :75 {:type :blue
        :pok true
        :planets [{:name "Loki"
                   :resources 1
                   :influence 2
                   :trait :cultural}
                  {:name "Abaddon"
                   :resources 1
                   :influence 0
                   :trait :cultural}
                  {:name "Ashtroth"
                   :resources 2
                   :influence 0
                   :trait :hazardous}]}
   :76 {:type :blue
        :pok true
        :planets [{:name "Rigel I"
                   :resources 0
                   :influence 1
                   :trait :hazardous}
                  {:name "Rigel II"
                   :resources 1
                   :influence 2
                   :trait :industrial}
                  {:name "Rigel III"
                   :resources 1
                   :influence 1
                   :trait :industrial
                   :specialty :biotic}]}
   :77 {:type :red
        :pok true
        :anomaly :empty
        :planets []}
   :78 {:type :red
        :pok true
        :anomaly :empty
        :planets []}
   :79 {:type :red
        :pok true
        :wormhole :alpha
        :anomaly :asteroid-field
        :planets []}
   :80 {:type :red
        :pok true
        :anomaly :supernova
        :planets []}
   :81 {:type :red
        :pok true
        :race "The Embers of Muaat"
        :anomaly :supernova
        :planets []}
   :82 {:type :blue
        :pok true
        :wormhole :gamma
        :planets [{:name "Mallice"
                   :resources 0
                   :influence 3
                   :trait :cultural
                   :legendary true}]}
   :83A {:type :hyperlane
         :pok true
         :hyperlanes [[1 4]]
         :planets []}
   :83B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 2] [3 5]]
         :planets []}
   :84A {:type :hyperlane
         :pok true
         :hyperlanes [[2 5]]
         :planets []}
   :84B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 4] [1 3]]
         :planets []}
   :85A {:type :hyperlane
         :pok true
         :hyperlanes [[1 5]]
         :planets []}
   :85B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 2] [3 5]]
         :planets []}
   :86A {:type :hyperlane
         :pok true
         :hyperlanes [[1 5]]
         :planets []}
   :86B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 4] [1 3]]
         :planets []}
   :87A {:type :hyperlane
         :pok true
         :hyperlanes [[0 2] [2 4] [2 5]]
         :planets []}
   :87B {:type :hyperlane
         :pok true
         :hyperlanes [[0 2] [0 3]]
         :planets []}
   :88A {:type :hyperlane
         :pok true
         :hyperlanes [[0 4] [1 4] [2 4]]
         :planets []}
   :88B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 2] [3 5]]
         :planets []}
   :89A {:type :hyperlane
         :pok true
         :hyperlanes [[0 2] [0 4] [2 4]]
         :planets []}
   :89B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 4]]
         :planets []}
   :90A {:type :hyperlane
         :pok true
         :hyperlanes [[1 5] [2 4]]
         :planets []}
   :90B {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 4]]
         :planets []}
   :91A {:type :hyperlane
         :pok true
         :hyperlanes [[0 3] [0 4] [1 3]]
         :planets []}
   :91B {:type :hyperlane
         :pok true
         :hyperlanes [[0 2] [0 3]]
         :planets []}})





