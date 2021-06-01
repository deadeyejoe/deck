(ns dev.joe
  (:require [clojure.tools.namespace.repl :refer [refresh]]
            [integrant.repl :refer [go halt reset]]
            [integrant.repl.state :refer [system]]
            [deadeye.joe.twilight-imperium.core :as ti.core]
            [io.pedestal.test :as test]
            [clojure.edn :as edn]))

(integrant.repl/set-prep! (constantly ti.core/dev-config))

(defn body [response]
  (edn/read-string (:body response)))

(defn test-route [method route]
  (-> system
      (::ti.core/server)
      (:io.pedestal.http/service-fn)
      (test/response-for method route)))

(defn -main []
  (go))

(comment
  (body (test-route :get "/table/t41931"))
  (test-route :post "/table?name=test")
  system
  (go)
  (halt)
  (reset)
  (refresh))


