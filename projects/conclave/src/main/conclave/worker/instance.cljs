(ns conclave.worker.instance
  (:require [cljs.core.async :refer [<!]]
            [conclave.worker.core :as core])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def handler
  (atom identity))

(defn register [f]
  (swap! handler f))

(defn- chan?
  [x]
  (satisfies? cljs.core.async.impl.protocols/ReadPort x))

(defn respond! [data]
  (try
    (core/post-message data)

    (catch js/Error e
      (when-let [c js/console] (.error c e))
      (core/post-message {:state :error, :message (.toString e)}))))

(defn- handle-request [handler event]
  (try
    (let [payload (core/unwrap event)
          result (handler payload)]
      (if (chan? result)
        (go (respond! (assoc (<! result) :state :success)))
        (respond! (assoc result :state :success))))

    (catch js/Error e
      (when-let [c js/console] (.error c e))
      (core/post-message {:state :error, :message (.toString e)}))))

(defn bootstrap
  [f]
  (aset js/self "onmessage" #(handle-request f %)))
