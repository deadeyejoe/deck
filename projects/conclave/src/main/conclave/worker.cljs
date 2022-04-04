(ns conclave.worker
  (:require [clojure.core.async :as async]
            [conclave.worker.client :as client]
            [conclave.worker.core :as worker])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn spawn [arguments
             {:keys [on-result on-progress on-error]
              :or   {on-progress (constantly nil)
                     on-error (constantly nil)}}]
  (let [worker (worker/create "assets/app/js/worker.js")
        result-chan (client/do-with-worker! worker arguments)]
    (go-loop [{:keys [state] :as result} (async/<! result-chan)]
      (case state
        :success    (do  (tap> result)
                         (on-result result)
                         (.terminate worker)
                         result)
        :processing (do
                      (tap> result)
                      (on-progress result)
                      (recur (async/<! result-chan)))
        :error      (do (on-error result)
                        result)))))

(defn generate [seed handlers]
  (spawn {:arguments {:seed seed :profile true :limit 50}}
         handlers))

(comment (generate "FGHIJ" (constantly nil)))
