(ns conclave.process.executor)

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
  (perform-step? #{:a :b} {:a true})
  (perform-step? {:a true} {:a true :b false})
  (perform-step? {:a true} {:a false :b true}))

(defn do-step [{:keys [options] :as context} {:keys [exec name when] :as _step}]
  (when (:debug options)
    #?(:cljs (.log js/console (str "Performing step: " name))
       :clj (println (str "Performing step: " name))))

  (if (perform-step? when options)
    (exec context)
    context))

(defn executions [context steps]
  (reductions do-step context steps))

(defn execute [context steps]
  (reduce do-step context steps))
