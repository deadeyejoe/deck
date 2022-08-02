(ns conclave.map.beta.serialization
  (:require [conclave.map.beta.build :as build]
            [conclave.tiles.core :as tile]
            [conclave.utils.hex :as hex]
            [cognitect.transit :as t]
            [goog.crypt.base64 :as b64]
            [medley.core :as medley]
            [superstring.core :as str]))


(def bit 2r101)
(def counting [2r1 2r10 2r11 2r100 2r101])

(def bit-ranges
  [{:key :type
    :offset 0
    :bits 3
    :test 7}
   {:key :tile-code
    :offset 3
    :bits 8
    :test 255}
   {:key :fixed?
    :offset 11
    :bits 1
    :test 1}
   {:key :orientation
    :offset 13
    :bits 3
    :test 7}])

(defn test-number [bit-count]
  (dec (Math/pow 2 bit-count)))

(bit-or 2r0 11)

(defn construct-binary [{:keys [type tile-code fixed? side orientation] :as tile}]
  (reduce (fn [result {:keys [name offset bits] :as range}]
            (let []))
          0
          (reverse bit-ranges)))
