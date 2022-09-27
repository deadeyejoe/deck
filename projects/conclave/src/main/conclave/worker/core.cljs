(ns conclave.worker.core
  (:require [cognitect.transit :as t]))

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
  (let [reader (t/reader :json)]
    (->> event
         .-data
         (t/read reader))))

(defn post-message
  ([data] (post-message js/self data))
  ([target data]
   (let [writer (t/writer :json)]
     (->> data
          (t/write writer)
          (.postMessage target)))))
