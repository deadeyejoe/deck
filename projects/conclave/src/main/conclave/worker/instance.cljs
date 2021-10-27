(ns conclave.worker.instance
  (:require [cljs.core.async :refer [<!]]
            [conclave.worker.core :as core])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def handlers
  (atom {:reflect identity}))

(defn register [id f]
  (swap! handlers assoc id f))

(defn- chan?
  [x]
  (satisfies? cljs.core.async.impl.protocols/ReadPort x))

(defn respond! [data]
  (try
    (core/post-message data)

    (catch js/Object e
      (when-let [c js/console] (.error c e))
      (core/post-message {:state :error, :message (.toString e)}))))

(defn- handle-request [event]
  (try
    (let [{:keys [handler arguments]} (core/unwrap event)
          handler-fn   (get @handlers handler)
          result    (assoc (handler-fn arguments) :state :success)]
      (if (chan? result)
        (go (respond! (<! result)))
        (respond! result)))

    (catch js/Object e
      (when-let [c js/console] (.error c e))
      (core/post-message {:state :error, :message (.toString e)}))))

(defn bootstrap
  []
  (aset js/self "onmessage" handle-request))