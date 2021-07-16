(ns deadeye.joe.consensus.core
  (:require [clojure.core.async :as async :refer [>! <! chan go go-loop]]
            [deadeye.joe.consensus.channel :as channel]
            [deadeye.joe.user.interface :as user]))

(def modes [:anarchy
            :democracy
            :dictatorship])

(defn running-tally []
  (let [tally (atom {})]
    (fn [{:keys [:user/id] :as vote}]
      (swap! tally assoc id vote))))

(defn tally-ch []
  (chan 1 (map (running-tally))))

(defn quorum-achieved [quorum user-count]
  (let [target (int (* quorum user-count))]
    (fn [tally]
      (<= target (count tally)))))

(defn democracy-timeout [agenda intermediate-ch]
  (let [{:keys [:timeout :default]} agenda]
    (cond
      (and timeout default) (channel/timeout-val default timeout)
      timeout               (channel/timeout-delayed intermediate-ch timeout)
      :else                 (chan))))

(defn democracy
  "Creates a channel that accepts votes and produces a result when a quorum is reached.
   Returns a vector containing the input channel, the result channel, and a channel that outputs the intermediate vote
   tally as votes come in.
   Accepts Options
   Expects votes to be maps containing :user/id"
  [agenda]
  (let [{:keys [:quorum]
         :or {quorum 1}} agenda
        tally-ch (tally-ch)
        [result-ch intermediate-ch] (async/split (quorum-achieved quorum 6)
                                                 tally-ch
                                                 (async/sliding-buffer 1)
                                                 (async/sliding-buffer 1))
        timeout-ch (democracy-timeout agenda intermediate-ch)]
    [tally-ch
     (go
       (first (async/alts! [result-ch timeout-ch] :priority true)))
     intermediate-ch]))

(defn build [name]
  (let [vote-channel (async/chan 1)
        notify-channel (async/chan 1)]
    {:consensus/name name
     :consensus/users {}
     :consensus/vote-channel vote-channel
     :consensus/vote-mix (async/mix vote-channel)
    ;;  :consensus/vote-mult (async/mult vote-channel)
     :consensus/notify-channel notify-channel
    ;;  :consensus/notify-mix (async/mix notify-channel)
     :consensus/notify-mult (async/mult notify-channel)}))

(defn tag-message [user]
  (let [to-merge (select-keys user [:user/id])]
    (fn [message] (merge message to-merge))))

(defn join! [consensus user]
  (let [{:keys [:consensus/vote-mix
                :consensus/notify-mult]} consensus
        {user-id :user/id} user
        user-vote (chan 1 (map (tag-message user)))
        user-notify (chan (async/sliding-buffer 1))
        aug-user (merge user {:user/vote-channel user-vote
                              :user/notify-channel user-notify})]
    (async/toggle vote-mix {user-vote :mute})
    (async/tap notify-mult user-notify)
    (assoc-in consensus [:consensus/users user-id] aug-user)
    [user-vote user-notify]))

(defn leave! [consensus user]
  (let [{user-id :user/id} user
        {:keys [:user/vote-channel
                :user/notify-channel]} (get-in @consensus [:consensus/users user-id])]
    (async/close! vote-channel)
    (async/close! notify-channel)
    (update consensus :consensus/users #(dissoc % user-id))))

(defn user-vote-channels [consensus]
  (->> consensus
       (:consensus/users)
       (vals)
       (map :user/vote-channel)))

(defn democratic [consensus decision-channel]
  (let [{:keys [:consensus/vote-channel
                :consensus/notify-channel
                :consensus/agenda]} consensus
        [in out inter] (democracy agenda)]
    (->> (channel/connect vote-channel in)
         (channel/connect inter notify-channel)
         (channel/connect-once out decision-channel))))

(defn anarchic [consensus decision-channel]
  (let [{:keys [:consensus/vote-channel]} consensus]
    (channel/connect-once vote-channel decision-channel)))

(defn procedure
  ([consensus decision-channel]
   (procedure consensus decision-channel {:mode :anarchy}))
  ([consensus decision-channel agenda]
   (case (:mode agenda)
     :democracy (democratic consensus decision-channel)
     :anarchy (anarchic consensus decision-channel))))

(defn toggle-votes [consensus mode]
  (let [{:keys [:consensus/vote-mix]} consensus
        user-vote->state (-> consensus
                             (user-vote-channels)
                             (zipmap (repeat mode)))]
    (async/toggle vote-mix user-vote->state)))

(defn start! [consensus decision-channel agenda-channel]
  (let [state (atom (merge consensus {:running true}))]
    (go-loop [procedure-handle (procedure consensus decision-channel)]
      (when (:running consensus)
        (toggle-votes consensus {:solo false :mute false :pause false})
        (let [agenda (<! agenda-channel)
              {:keys [:consensus/notify-channel]} consensus]
          (toggle-votes consensus {:mute true})
          (async/close! procedure-handle)  ;; cancel the current procedure if it's still running
          (when agenda
            (>! notify-channel agenda)
            (recur (procedure consensus decision-channel agenda))))))
    (fn [] (swap! state dissoc :running))))

