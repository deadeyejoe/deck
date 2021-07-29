(ns authority.storage
  (:require [akiroz.re-frame.storage :as storage]))

(storage/reg-co-fx! :authority {:fx :persist-local
                                :cofx :local-store})