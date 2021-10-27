(ns conclave.worker.core
  (:require [cljs.core.async :refer [chan sliding-buffer <! >! put!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn supported? []
  (-> js/self
      .-Worker
      undefined?
      not))

(defn worker? []
  (-> js/self
      .-document
      undefined?))

(def main?
  (complement worker?))

(defn create [script]
  (js/Worker. script))

(defn unwrap [event]
  (-> event
      .-data
      (js->clj :keywordize-keys true)))

(defn post-message
  ([data] (.postMessage js/self (clj->js data)))
  ([target data] (.postMessage target (clj->js data))))