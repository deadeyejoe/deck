(ns conclave.generate.executor)

(defn perform-step? [when options]
  (cond
    (nil? when) true
    (map? when) (= when (select-keys options (keys when)))
    (set? when) (every? identity ((apply juxt when) options))
    (vector? when) (some identity ((apply juxt when) options))))

(comment
  (perform-step? [:foo] {:foo true})
  (perform-step? [:a] {:a true})
  (perform-step? [:a :b] {:a true})
  (perform-step? #{:a :b} {:a true}))

(defn step [{:keys [options] :as context} {:keys [when exec] :as step}]
  (if (perform-step? when options)
    (exec context)
    context))



(defn executions [context steps]
  (reductions step
              context
              steps))

(defn execute [context steps]
  (last (executions context steps)))