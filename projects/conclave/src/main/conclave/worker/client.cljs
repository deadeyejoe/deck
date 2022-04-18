(ns conclave.worker.client
  (:require [cljs.core.async :refer [chan sliding-buffer <! >! put!]]
            [conclave.worker.core :as core])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(def script-location (atom "worker.js"))

(defn set-script-location [l]
  (reset! script-location l))

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

(defn spawn [arguments
             {:keys [on-result on-progress on-error]
              :or   {on-progress (constantly nil)
                     on-error (constantly nil)}}]
  (let [worker (core/create @script-location)
        result-chan (do-with-worker! worker arguments)]
    (go-loop [{:keys [state] :as result} (<! result-chan)]
      (case state
        :success    (do  (tap> result)
                         (on-result result)
                         (.terminate worker)
                         result)
        :processing (do
                      (tap> result)
                      (on-progress result)
                      (recur (<! result-chan)))
        :error      (do (tap> result)
                        (on-error result)
                        result)))))
