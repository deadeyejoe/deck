(ns deadeye.joe.consensus.core-test
  (:require  [deadeye.joe.consensus.core :as core]
             [clojure.test :as test :refer [deftest testing is]]
             [clojure.core.async :as async :refer [<! >! <!! >!! chan go]]))


(deftest tally-ch
  (testing "tallies by user-id"
    (let [tally (core/tally-ch)]
      (>!! tally {:user/id 1})
      (is (= {1 {:user/id 1}} (<!! tally)))))
  (testing "accumulates values"
    (let [tally (core/tally-ch)]
      (>!! tally {:user/id 1})
      (<!! tally)
      (>!! tally {:user/id 2})
      (is (= {1 {:user/id 1}
              2 {:user/id 2}}
             (<!! tally))))))








