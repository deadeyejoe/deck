(ns deadeye.joe.crux.core
  (:require [crux.api :as crux]))

(def node (atom nil))

(def increment-counter-txfn
  '(fn increment-counter
     ([ctx counter-name]
      (increment-counter ctx counter-name 1))
     ([ctx counter-name amount]
      (let [db (crux.api/db ctx)
            counter (crux.api/entity db counter-name)]
        (if counter
          [[:crux.tx/put (update counter :count #(+ % amount))]]
          [[:crux.tx/put {:crux.db/id counter-name :count amount}]])))))

(def create-txfn
  '(fn [ctx type & docs]
     (let [db (crux.api/db ctx)
           {current-value :count :or {current-value 1}} (crux.api/entity db type)
           new-count-doc [:crux.tx/put {:crux.db/id type :count (+ current-value (count docs))}]]
       (->> docs
            (map-indexed (fn [index doc]
                           (let [generated-key (str (name type) "-" (+ index current-value))]
                             [:crux.tx/put (assoc doc :crux.db/id generated-key)])))
            (into [new-count-doc])))))

(comment
  ((eval create-txfn) @node :user {} {}))

(defn create-node
  ([] (create-node {}))
  ([opts] (let [new-node (crux/start-node opts)]
            (crux/submit-tx new-node [[:crux.tx/put {:crux.db/id :increment-counter
                                                     :crux.db/fn increment-counter-txfn}]
                                      [:crux.tx/put {:crux.db/id :create-records
                                                     :crux.db/fn create-txfn}]])
            new-node)))

(defn destroy-node [node]
  (.close node))

(defn start-node []
  (when-not @node
    (reset! node (create-node))))

(defn stop-node []
  (when @node
    (destroy-node @node)
    (reset! node nil)))

(comment
  @node
  (start-node)
  (stop-node))