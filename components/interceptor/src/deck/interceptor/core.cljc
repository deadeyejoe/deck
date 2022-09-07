(ns deck.interceptor.core)

(defn init-context [context interceptors]
  (assoc context
         ::phase :enter
         ::interceptors interceptors
         ::queue interceptors
         ::stack '()))

(defn fn-for-phase [key interceptor]
  (or (get interceptor key)
      identity))

(defn terminate [context]
  (assoc context ::phase :leave))

(defn halt [context]
  (assoc context ::phase :halt))

(defn error [context error]
  (assoc context
         ::error error
         ::phase :error))

(defn enter-step [context]
  (let [[next-interceptor & rest] (::queue context)]
    (if next-interceptor
      (-> context
          (assoc ::queue rest)
          ((fn-for-phase :enter next-interceptor))
          (update ::stack (partial cons next-interceptor)))
      (terminate context))))

(defn leave-step [context]
  (let [[next-interceptor & rest] (::stack context)]
    (if next-interceptor
      (-> context
          (assoc ::stack rest)
          ((fn-for-phase :leave next-interceptor)))
      (halt context))))

(defn error-step [context]
  (let [[next-interceptor & rest] (::stack context)]
    (if next-interceptor
      (-> context
          (assoc ::stack rest)
          ((fn-for-phase :error next-interceptor)))
      (halt context))))

(defn step [{:keys [::phase] :as context}]
  (case phase
    :enter (enter-step context)
    :leave (leave-step context)
    :error (error-step context)
    :halt nil
    context))

(defn executions [context interceptors]
  (loop [context (init-context context interceptors)
         collect []]
    (tap> context)
    (if-let [next-context (step context)]
      (recur next-context (conj collect context))
      collect)))

(defn strip [context]
  (dissoc context
          ::phase
          ::interceptors
          ::queue
          ::stack))

(defn execute [context interceptors]
  (-> (executions context interceptors)
      (last)
      (strip)))
