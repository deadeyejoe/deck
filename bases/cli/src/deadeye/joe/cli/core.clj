(ns deadeye.joe.cli.core
  (:require [deadeye.joe.user.interface :as user])
  (:gen-class))

(defn -main [& args]
  (println (user/hello (first args)))
  (System/exit 0))

