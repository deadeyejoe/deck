(ns conclave.data.layouts)

(def eight-player {:name "8 Player"
                   :code "8p"
                   :pok true
                   :radius 4
                   :type-counts {:blue (+ 2 (* 8 4))
                                 :red  (+ 2 (* 8 2))}
                   :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                   :home-tiles [{:coordinate [0   4 -4] :key :P1}
                                {:coordinate [3   1 -4] :key :P2}
                                {:coordinate [4  -2 -2] :key :P3}
                                {:coordinate [3  -4  1] :key :P4}
                                {:coordinate [0  -4  4] :key :P5}
                                {:coordinate [-3 -1  4] :key :P6}
                                {:coordinate [-4  2  2] :key :P7}
                                {:coordinate [-3  4 -1] :key :P8}]})

(def eight-player-warp {:name "8 Player Warp"
                        :code "8pw"
                        :pok true
                        :radius 4
                        :type-counts {:blue (* 8 3)
                                      :red (* 8 2)}
                        :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                        :blank-coordinates [[4 0 -4] [4 -1 -3] [4 -4 0] [-4 0 4] [-4 1 3] [-4 4 0]]
                        :hyperlane-tiles [{:coordinate [0 1 -1] :key :87A :rotation 1}
                                          {:coordinate [1 0 -1] :key :90B :rotation 3}
                                          {:coordinate [0 -1 1] :key :88A :rotation 2}
                                          {:coordinate [-1 0 1] :key :89B :rotation 0}
                                          {:coordinate [3 -2 -1] :key :85B :rotation 5}
                                          {:coordinate [-3 2 1] :key :83B :rotation 5}]
                        :home-tiles [{:coordinate [0   4 -4] :key :P1}
                                     {:coordinate [3   1 -4] :key :P2}
                                     {:coordinate [4  -2 -2] :key :P3}
                                     {:coordinate [3  -4  1] :key :P4}
                                     {:coordinate [0  -4  4] :key :P5}
                                     {:coordinate [-3 -1  4] :key :P6}
                                     {:coordinate [-4  2  2] :key :P7}
                                     {:coordinate [-3  4 -1] :key :P8}]})

(def seven-player {:name "7 Player"
                   :code "7p"
                   :pok true
                   :radius 4
                   :type-counts {:blue (+ 3 (* 7 4))
                                 :red (+ 2 (* 7 2))}
                   :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                   :hyperlane-tiles [{:coordinate [0 -2 2] :key :86A  :rotation 0}
                                     {:coordinate [1 -3 2] :key :88A  :rotation 0}
                                     {:coordinate [1 -4 3] :key :83A  :rotation 0}
                                     {:coordinate [0 -4 4] :key :85A  :rotation 0}
                                     {:coordinate [-1 -3 4] :key :84A :rotation 0}
                                     {:coordinate [-1 -2 3] :key :87A :rotation 0}]
                   :home-tiles [{:coordinate [0   4 -4] :key :P1}
                                {:coordinate [3   1 -4] :key :P2}
                                {:coordinate [4  -2 -2] :key :P3}
                                {:coordinate [3  -4  1] :key :P4}
                                {:coordinate [-3 -1  4] :key :P5}
                                {:coordinate [-4  2  2] :key :P6}
                                {:coordinate [-3  4 -1] :key :P7}]})

(def seven-player-warp {:name "7 Player Warp"
                        :code "7pw"
                        :pok true
                        :radius 4
                        :type-counts {:blue (* 7 3)
                                      :red (* 7 2)}
                        :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                        :blank-coordinates [[2 2 -4] [3 1 -4] [4 0 -4] [4 -1 -3] [4 -2 -2]
                                      [4 -3 -1] [4 -4 0] [3 -4 1] [2 -4 2] [-4 0 4]
                                      [-4 1 3] [-4 4 0]]
                        :hyperlane-tiles [{:coordinate [1 2 -3] :key :88B :rotation 0}
                                          {:coordinate [0 1 -1] :key :85B :rotation 0}
                                          {:coordinate [-3 2 1] :key :83B :rotation 2}
                                          {:coordinate [-1 0 1] :key :90B :rotation 0}
                                          {:coordinate [0 -1 1] :key :84B :rotation 0}
                                          {:coordinate [1 -3 2] :key :86B :rotation 0}]
                        :home-tiles [{:coordinate [0 4 -4]  :key :P1}
                                     {:coordinate [3 0 -3]  :key :P2}
                                     {:coordinate [3 -3 0]  :key :P3}
                                     {:coordinate [0 -4 4]  :key :P4}
                                     {:coordinate [-3 -1 4] :key :P5}
                                     {:coordinate [-4 2 2]  :key :P6}
                                     {:coordinate [-3 4 -1] :key :P7}]})

(def six-player {:name "6 Player"
                 :code "6p"
                 :radius 3
                 :type-counts {:blue (* 6 3)
                               :red (* 6 2)}
                 :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                 :home-tiles [{:coordinate [0 3 -3] :key :P1}
                              {:coordinate [3 0 -3] :key :P2}
                              {:coordinate [3 -3 0] :key :P3}
                              {:coordinate [0 -3 3] :key :P4}
                              {:coordinate [-3 0 3] :key :P5}
                              {:coordinate [-3 3 0] :key :P6}]})

(def six-player-large {:name "6 Player Large"
                       :code "6pl"
                       :radius 4
                       :type-counts {:blue (* 6 6)
                                     :red (* 6 3)}
                       :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                       :home-tiles [{:coordinate [0 4 -4] :key :P1}
                                    {:coordinate [4 0 -4] :key :P2}
                                    {:coordinate [4 -4 0] :key :P3}
                                    {:coordinate [0 -4 4] :key :P4}
                                    {:coordinate [-4 0 4] :key :P5}
                                    {:coordinate [-4 4 0] :key :P6}]})

(def five-player {:name "5 Player"
                  :code "5p"
                  :radius 3
                  :type-counts {:blue (* 5 4)
                                :red (+ 1 (* 5 2))}
                  :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                  :home-tiles [{:coordinate [-1 3 -2] :key :P1}
                               {:coordinate [3 0 -3] :key :P2}
                               {:coordinate [3 -3 0] :key :P3}
                               {:coordinate [0 -3 3] :key :P4}
                               {:coordinate [-3 1 2] :key :P5}]})

(def five-player-warp {:name "5 Player Warp"
                       :pok true
                       :code "5pw"
                       :radius 3
                       :type-counts {:blue (* 5 3)
                                     :red (* 5 2)}
                       :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                       :hyperlane-tiles [{:coordinate [0 -1 1] :key :86A  :rotation 0}
                                         {:coordinate [1 -2 1] :key :88A  :rotation 0}
                                         {:coordinate [1 -3 2] :key :83A  :rotation 0}
                                         {:coordinate [0 -3 3] :key :85A  :rotation 0}
                                         {:coordinate [-1 -2 3] :key :84A :rotation 0}
                                         {:coordinate [-1 -1 2] :key :87A :rotation 0}]
                       :home-tiles [{:coordinate [0 3 -3] :key :P1}
                                    {:coordinate [3 0 -3] :key :P2}
                                    {:coordinate [3 -3 0] :key :P3}
                                    {:coordinate [-3 0 3] :key :P4}
                                    {:coordinate [-3 3 0] :key :P5}]})

(def four-player {:name "4 Player"
                  :code "4p"
                  :radius 3
                  :type-counts {:blue (* 4 5)
                                :red (* 4 3)}
                  :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                  :home-tiles [{:coordinate [-1 3 -2] :key :P1}
                               {:coordinate [3 -1 -2] :key :P2}
                               {:coordinate [1 -3 2] :key :P3}
                               {:coordinate [-3 1 2] :key :P4}]})

(def three-player {:name "3 Player"
                   :code "3p"
                   :radius 3
                   :type-counts {:blue (* 3 6)
                                 :red (* 3 2)}
                   :fixed-tiles [{:coordinate [0 0 0] :key :18}]
                   :blank-coordinates [[-1 3 -2] [0 3 -3] [1 2 -3]
                                 [3 -2 -1] [3 -3 0] [2 -3 1]
                                 [-2 -1 3] [-3 0 3] [-3 1 2]]
                   :home-tiles [{:coordinate [3 0 -3] :key :P1}
                                {:coordinate [0 -3 3] :key :P2}
                                {:coordinate [-3 3 0] :key :P3}]})
