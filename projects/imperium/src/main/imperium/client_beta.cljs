(ns imperium.client-beta
  (:require [wscljs.client :as ws]
            [wscljs.format :as fmt]
            [re-frame.core :as rf]
            [clojure.edn :as edn]))

(defn log [message data]
  (.log js/console message (.stringify js/JSON (clj->js data))))

(defmulti handle-event :id)

(defn on-message-handler
  [event]
  (log "Received message" event)
  (let [[key data] (-> event (.-data) (edn/read-string))]
    (handle-event {:event key
                   :data data})))

(defmethod handle-event :default
  [{:keys [event]}]
  (log "Unhandled event:" event))

(defmethod handle-event :chsk/recv
  [{:keys [?data]}]
  (log "Push event from server:" ?data))

(defonce socket (atom nil))

(def handlers {:on-message on-message-handler
               :on-open #(prn "Opening a new connection")
               :on-close #(prn "Closing a connection")
               :on-error #(prn "An error occurred")})

(defn send! [event]
  (ws/send @socket event fmt/edn))

(defn websocket-url [uuid]
  (str "ws://localhost:8890/ws?uuid=" uuid))

(defn start! [uuid]
  (reset! socket
          (ws/create (websocket-url uuid) handlers)))

(defn stop! []
  (ws/close @socket)
  (reset! socket nil))

(comment
  (start! #uuid "d2f0b2a8-59f3-48b8-84e1-6148345eeb93")
  (send! [:thing "foo"])
  (stop!))








