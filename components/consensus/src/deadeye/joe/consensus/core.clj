(ns deadeye.joe.consensus.core
  (:require [clojure.core.async :as async]
            [deadeye.joe.user.interface :as user]))

(defn build-state [name]
  (atom
   {:consensus/name name
    :consensus/users {}
    :consensus/reset-channel (async/chan)
    :consensus/decision-channel (async/chan)
    :consensus/subject-channel (async/chan)}))

(defn reset [consensus])

(defn unaninimity [consensus])

(defn create [name on-push]
  (async/go-loop [state (build-state name)]
    (let [{reset-ch :consensus/reset-channel
           decision-ch :consensus/decision-channel
           users :consensus/users} @state
          unaninimity (->> users
                           (map :user/vote-channel)
                           (async/map vec))
          [[value chan]] (async/alts! reset-ch
                                      unaninimity)]
      (if (= reset-ch chan)
        (reset state)
        (async/put! decision-ch value))
      (recur state))))

(defn join [consensus user]
  (let [{user-id :user/id} user
        user-vote (async/chan) ;; could be conditional on the vote?
        user-notify (async/sliding-buffer 1)
        aug-user (merge user {:user/vote-channel user-vote
                              :user/notify-channel user-notify})]
    (swap! consensus assoc-in [:consensus/users user-id] aug-user)
    [user-vote user-notify]))

(defn propose [consensus vote])

