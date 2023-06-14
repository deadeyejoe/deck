(ns deck.re-frame.core
  (:require [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [re-frame.core :as rf]))

(defn check-and-throw
  "Throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec db _event]
  (when-not (s/valid? a-spec db)
    (let [spec-error (expound/expound-str a-spec db)]
      (.log js/console spec-error)
      (throw (ex-info (str "spec check failed: " spec-error) {})))))

(defn reg-db-spec-check [a-spec]
  (rf/reg-global-interceptor (rf/after (partial check-and-throw a-spec))))

(def now ::now)

(defn now-cofx-handler [coeffect]
  (assoc coeffect ::now (js/Date.)))

(defn reg-now-cofx []
  (rf/reg-cofx ::now now-cofx-handler))
