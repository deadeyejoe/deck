(ns conclave.worker.client
  (:require [cljs.core.async :refer [chan sliding-buffer <! >! put!]]
            [conclave.worker.core :as core])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn- response-handler [result-chan]
  (fn [event]
    (go
      (>! result-chan (core/unwrap event)))))

(defn do-with-worker! [worker request]
  (let [result-chan (chan (sliding-buffer 1))]
    (aset worker "onmessage" (response-handler result-chan))

    (try
      (core/post-message worker request)

      (catch js/Object e
        (put! result-chan {:state :error, :error e})))

    result-chan))