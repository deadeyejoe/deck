(ns deadeye.joe.twilight-imperium.core
  (:require
   [deadeye.joe.twilight-imperium.routes :as ti.routes]
   [deadeye.joe.twilight-imperium.websocket :as ti.ws]
   [io.pedestal.http :as http]
   [integrant.core :as ig])
  (:gen-class))

(def dev-config
  {::server {:env                     :dev
             ::http/port              8890
             ::http/type              :jetty
             ::http/routes            (ig/ref ::ti.routes/routes)
             ::http/join?             false
             ::http/allowed-origins   {:creds true
                                       :allowed-origins (constantly true)}
             ::http/container-options {:context-configurator ti.ws/add-websockets}}
   ::ti.routes/routes {:database (ig/ref ::database)}
   ::database {}})

(defmethod ig/init-key ::server [_ service-options]
  (let [opts (-> service-options
                 (http/default-interceptors)
                 (http/dev-interceptors)
                 (http/create-server))]
    (http/start opts)))

(defmethod ig/halt-key! ::server [_ server]
  (http/stop server))

(defmethod ig/init-key ::database [_ _] (atom {}))

