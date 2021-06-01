(ns deadeye.joe.twilight-imperium.websocket
  (:require [clojure.core.async :as async]
            [integrant.core :as ig]
            [io.pedestal.log :as log]
            [io.pedestal.http.jetty.websockets :as ws]
            [ring.middleware.params :as rparams]
            [clojure.edn :as edn]))

(def ws-clients (atom {}))

(defn register-client [uuid]
  (fn [ws-session send-channel]
    (swap! ws-clients assoc uuid {:session ws-session
                                  :channel send-channel})))

(defn unregister-client [uuid]
  (swap! ws-clients dissoc uuid))

(defmulti handle-ws-message :message/type)

(defmethod handle-ws-message :default [message]
  (log/info :msg "Unhandled message type" :payload message))

(defn on-text [uuid]
  (fn [msg]
    (log/info :msg (str "Client identified by " uuid " sent - " msg))
    (handle-ws-message (merge (edn/read-string msg)
                              {:user/id uuid}))))

(defn on-close [uuid]
  (fn [num-code reason-text]
    (log/info :msg (str "WS Closed: " num-code) :reason reason-text)
    (unregister-client uuid)))

(defn construct-handler-map [uuid]
  {:on-connect (ws/start-ws-connection (register-client uuid))
   :on-text (on-text uuid)
   :on-binary (fn [payload offset length] (log/info :msg "Binary Message!" :bytes payload))
   :on-error (fn [t] (log/error :msg "WS Error happened" :exception t))
   :on-close (on-close uuid)})

(defn construct-request-map [upgrade-req]
  (let [base-request-map {:query-string (.getQueryString upgrade-req)}]
    (-> base-request-map
        (rparams/assoc-query-params "UTF-8"))))

(defn handle-upgrade-request [upgrade-request response ws-map]
  (let [req-map (construct-request-map upgrade-request)]
    (log/info :msg (str "Upgrade request received: " req-map))
    (if-let [uuid (get-in req-map [:params "uuid"])]
      (ws/make-ws-listener (construct-handler-map uuid))
      (log/error :msg "Anonymous upgrade request received"))))

(defn add-websockets [context]
  (ws/add-ws-endpoints context
                       {"/ws" {}}
                       {:listener-fn handle-upgrade-request}))