(ns deck.re-frame.interface
  (:require [deck.re-frame.core :as core]))

(defn reg-db-spec-check
  "Register an interceptor that logs and throws an exception if `db` doesn't match the Spec `a-spec`."
  [a-spec]
  (core/reg-db-spec-check a-spec))
