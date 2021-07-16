(ns deadeye.joe.consensus.channel
  (:require [clojure.core.async :as as :refer [>! <! chan go timeout]]))

(defn uchan [] (chan 1))
(defn drop [] (as/dropping-buffer 1))
(defn slide [] (as/sliding-buffer 1))

(defn timeout-val
  "Returns a channel that contains a value after a delay."
  [val ms]
  (go
    (<! (timeout ms))
    val))

(defn timeout-chan
  "Returns a channel that contains a value from the supplied channel after a delay.
   Contains nil if the channel contains nothing."
  [ch ms]
  (go
    (<! (timeout ms))
    (as/poll! ch)))

(defn timeout-delayed
  "Returns a channel that contains a value from the supplied channel after a delay.
   The timer does not start until a value is put on the channel, and the output contains
   a fresh value from the channel, or the initial value if nothing has been put in the interim."
  [ch ms]
  (go
    (let [initial (<! ch)
          latest (<! (timeout-chan ch ms))]
      (or latest initial))))

(defn copy
  "Copies the source channel n times using mult.
   Accepts an opts map with the following keys:

   - `:buf-fn` a function that returns a buffer for the copied channels, (sliding-buffer 1) by default
   - `:control-ch` a channel that will be tapped into the mult

   When a control channel is provided, it can be used to control consumption of the source channel. 
   Note that the mult effectively increases the size of the buffer on the source channel by 1, and 
   the control channel may increase this further."
  ([ch] (copy ch 2))
  ([ch n] (copy ch n slide))
  ([ch n opts]
   (let [{:keys [:buf-fn
                 :control-ch]} opts
         mult (as/mult ch)]
     (when control-ch (as/tap mult control-ch))
     (->> (range n)
          (map (fn [_] (chan (buf-fn))))
          (run! #(as/tap mult %))))))

(defn connect
  "Takes values from the `from` channel and passes them to the `to` channel.
   Returns a handle channel that can be closed to break the connection, any values 
   put on the handle will also cause the connection to break.
   
   When called with a from and to channel returns the handle.
   When called with 3 arguments the last argument is the handle.
   "
  ([from to]
   (connect from to (chan 1)))
  ([from to handle]
   (as/go-loop []
     (when
      (as/alt!
        handle    nil
        from      ([v] (>! to v))
        :priority true)
       (recur)))
   handle))

(defn connect-once
  "Connects a from and to channel like connect, but after the first value is transferred closes the handle."
  ([from to]
   (connect-once from to (chan 1)))
  ([from to handle]
   (go (as/alt!
         handle    nil
         from      ([v] (>! to v))
         :priority true)
       (as/close! handle))
   handle))