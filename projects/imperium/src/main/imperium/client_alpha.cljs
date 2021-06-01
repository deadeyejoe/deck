(ns imperium.client-alpha
  (:require [taoensso.sente :as sente]
            [imperium.ws-handlers :as handlers]
            [clojure.core.async :as async]))

(defonce receive-channel (atom nil))
(defonce send! (atom nil))
(defonce ws-state (atom nil))
(defonce router (atom nil))

(def sente-config {:type     :auto
                   :packer   :edn
                   :protocol :http
                   :host     "localhost"
                   :port     8890})

(defn state-watcher [_key _atom _old-state new-state]
  (.warn js/console "New state" new-state))

(defn create-client! []
  (let [{:keys [ch-recv send-fn state]} (sente/make-channel-socket-client! "/ws" nil sente-config)]
    (reset! receive-channel ch-recv)
    (reset! send! send-fn)
    (reset! ws-state state)
    (add-watch state :state-watcher state-watcher)))

(defn stop-router! []
  (when-let [stop-f @router] (stop-f)))

(defn start-router! []
  (stop-router!)
  (reset! router (sente/start-client-chsk-router! @receive-channel handlers/event-msg-handler)))

(defn start! []
  (create-client!)
  (start-router!))

(defn send [message]
  (@send! message))

(comment
  (start!)
  (@send! [:imperium/b {:text "thing"}])
  (:uid @ws-state))