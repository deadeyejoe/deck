(ns deadeye.joe.twilight-imperium.routes
  (:require [clojure.core.async :as async]
            [integrant.core :as ig]
            [io.pedestal.log :as log]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.jetty.websockets :as ws]
            [deadeye.joe.utility.interface :as util]
            [deadeye.joe.table.interface :as table]
            [ring.middleware.params :as rparams]))

(defn response [status body & {:as headers}]
  {:status status :body body :headers headers})

(def ok (partial response 200))

(def echo
  {:name :echo
   :enter (fn [context]
            (let [request (:request context)
                  response (ok request)]
              (assoc context :response response)))})

(defn build-db-interceptor [database]
  {:name :database-interceptor
   :enter (fn [context]
            (update context :request assoc :database @database))
   :leave (fn [context]
            (if-let [[op & args] (:tx-data context)]
              (do
                (apply swap! database op args)
                (assoc-in context [:request :database] @database))
              context))})

(def entity-render
  {:name :entity-render
   :leave (fn [context]
            (if-let [item (:result context)]
              (assoc context :response (ok item))
              context))})

(def table-create
  {:name :table-create
   :enter (fn [context]
            (let [name (get-in context [:request :query-params :name] (util/random-name))
                  new-table (table/build name)
                  db-id (str (gensym "t"))
                  url (route/url-for :table-view :params {:table-id db-id})]
              (assoc context
                     :response (ok new-table "Location" url)
                     :tx-data [assoc db-id new-table])))})

(defn table-by-id [db db-id]
  (get db db-id))

(def table-view
  {:name :table-view
   :enter (fn [context]
            (let [db-id (get-in context [:request :path-params :table-id])
                  table (table-by-id (get-in context [:request :database]) db-id)]
              (if table
                (assoc context :response (ok table))
                context)))})

(defn routes [config]
  (let [database (:database config)
        db-interceptor (build-db-interceptor database)]
    (route/expand-routes
     #{["/table"           :post [db-interceptor table-create]]
       ["/table/:table-id" :get  [db-interceptor table-view]]})))

(defmethod ig/init-key ::routes [_ config] (routes config))