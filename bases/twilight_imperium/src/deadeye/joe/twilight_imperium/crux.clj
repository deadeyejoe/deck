(ns deadeye.joe.twilight-imperium.crux
  (:require [integrant.core :as ig]
            [deadeye.joe.crux.interface :as crux-store]))

(defmethod ig/init-key ::crux [_ opts] (crux-store/create-node opts))

(defmethod ig/halt-key! ::crux [_ node] (crux-store/destroy-node node))