(ns conclave.worker
  (:require [clojure.core.async :as async]
            [conclave.worker.client :as client]
            [conclave.worker.core :as worker])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn spawn [arguments result-handler]
  (let [worker (worker/create "assets/app/js/worker.js")
        result-chan (client/do-with-worker! worker arguments)]
    (go
      (let [result (async/<! result-chan)]
        (tap> result)
        (result-handler result)
        (.terminate worker)
        result))))

(defn generate [seed]
  (spawn {:handler :generate :arguments {:seed seed :profile true}}
         (constantly nil)))

(comment (generate "FGHIJ"))