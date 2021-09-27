(ns authority.timer.db-test
  (:require [authority.timer.db :as db]
            [cljs.test :refer (deftest is testing)]))

(deftest build
  (is (= "id" (-> {:id "id"} db/build :label)))
  (is (= "label" (-> {:id "id" :label "label"} db/build :label))))

(deftest start
  (let [now (js/Date.)
        fresh (db/build {})
        started (-> fresh (db/start now))]
    (is (= :running (:status started)))
    (is (= started (db/start started now)))))

(deftest pause
  (let [now (js/Date.)
        pauseable (db/build {:pauseable true})
        paused (-> pauseable (db/start now) (db/pause now))
        not-pauseable (-> {} db/build (db/start now))]
    (testing "sets status to paused"
      (is (= :paused (:status paused))))
    (testing  "no-op if not running"
      (is (= paused (db/pause paused now)))
      (is (= pauseable (db/pause pauseable now))))
    (testing "no-op if not pauseable"
      (is (= not-pauseable (db/pause not-pauseable now))))))

(deftest resume
  (let [now (js/Date.)
        running (-> {} db/build (db/start now))
        paused (-> {:pauseable true} db/build (db/start now) (db/pause now))]
    (testing "sets status to running"
      (is (= :running (:status (db/resume paused now)))))
    (testing "no-op if not paused"
      (is (= running (db/resume running now))))))
