(ns conclave.specs
  (:require [clojure.spec.alpha :as s]))

(s/def ::coordinate (s/coll-of int? :kind vector? :count 3))
(s/def ::coordinates (s/coll-of ::coordinate))
