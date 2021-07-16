(ns deadeye.joe.consensus.channel-test
  (:require  [deadeye.joe.consensus.channel :as channel]
             [clojure.test :as test :refer [deftest is testing]]
             [clojure.core.async :as async :refer [<! >! <!! >!! chan go]]))

(deftest timeout-val
  (testing "contains a value"
    (let [timeout (channel/timeout-val 42 10)]
      (is (= (<!! timeout) 42)))))

(deftest timeout-chan
  (testing "contains a value"
    (let [ch (chan 1)]
      (>!! ch 42)
      (is (= 42 (<!! (channel/timeout-chan ch 10))))))
  (testing "contains nil if the channel is empty"
    (is (nil? (<!! (channel/timeout-chan (chan) 10))))))

(deftest timeout-delayed
  (testing "contains a value if something is put on the channel"
    (let [ch (chan 1)]
      (>!! ch 42)
      (is (= 42 (<!! (channel/timeout-delayed ch 10))))))
  (testing "takes the latest value if available"
    (let [ch (chan 1)
          timeout (channel/timeout-delayed ch 10)]
      (>!! ch 42)
      (>!! ch 43)
      (<!! (async/timeout 20))
      (>!! ch 44)
      (is (= 43 (<!! timeout)))))
  (testing "contains nothing if nothing is put on the channel"
    (let [timeout (channel/timeout-delayed (chan) 10)]
      (<!! (async/timeout 20))
      (is (nil? (async/poll! timeout))))))

(deftest connect
  (testing "passes values between channels"
    (let [from (chan 1)
          to (chan 1)]
      (channel/connect from to)
      (>!! from 42)
      (is (= 42 (<!! to)))))

  (testing "and returns a handle"
    (testing "that can be closed to break the connection"
      (let [from (chan 1)
            to (chan 1)
            handle (channel/connect from to)]
        (async/close! handle)
        (>!! from 42)
        (is (nil? (async/poll! to)))))

    (testing "that can be put to break the connection"
      (let [from (chan 1)
            to (chan 1)
            handle (channel/connect from to)]
        (>!! handle :foo)
        (>!! from 42)
        (is (nil? (async/poll! to))))))

  (testing "accepts a handle"
    (let [from (chan 1)
          to (chan 1)
          handle (chan 1)]
      (channel/connect from to handle)
      (async/close! handle)
      (>!! from 42)
      (is (nil? (async/poll! to))))))

(deftest connect
  (testing "passes values between channels"
    (let [from (chan 1)
          to (chan 1)]
      (channel/connect-once from to)
      (>!! from 42)
      (is (= 42 (<!! to)))

      (testing "one time only"
        (>!! from 42)
        (is (nil? (async/poll! to))))))

  (testing "and returns a handle"
    (testing "that can be closed to break the connection"
      (let [from (chan 1)
            to (chan 1)
            handle (channel/connect-once from to)]
        (async/close! handle)
        (>!! from 42)
        (is (nil? (async/poll! to)))))

    (testing "that can be put to break the connection"
      (let [from (chan 1)
            to (chan 1)
            handle (channel/connect-once from to)]
        (>!! handle :foo)
        (>!! from 42)
        (is (nil? (async/poll! to))))))

  (testing "accepts a handle"
    (let [from (chan 1)
          to (chan 1)
          handle (chan 1)]
      (channel/connect-once from to handle)
      (async/close! handle)
      (>!! from 42)
      (is (nil? (async/poll! to))))))

