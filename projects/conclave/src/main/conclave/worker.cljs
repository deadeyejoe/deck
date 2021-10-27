(ns conclave.worker
  (:require [clojure.core.async :as async]
            [conclave.worker.client :as client]
            [conclave.worker.core :as worker])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn generate [seed]
  (let [worker (worker/create "assets/app/js/worker.js")
        result-chan (client/do-with-worker! worker {:handler :generate :arguments {:seed seed}})]
    (go (tap> (async/<! result-chan))
        (.terminate worker))))

(comment (generate "ABCDE")
         (+ 1 1))