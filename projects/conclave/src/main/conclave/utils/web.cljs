(ns conclave.utils.web)

(defn location []
  (.-href js/window.location))

(defn copy-to-clipboard
  [text]
  (let [el (.createElement js/document "textarea")]
    (set! (.-value el) text)
    (set! (-> el .-style .-position) "absolute")
    (set! (-> el .-style .-left) "-9999px")
    (.appendChild (.-body js/document) el)
    (.select el)
    (.execCommand js/document "copy")
    (.removeChild (.-body js/document) el)))

(defn dimension-observer [callback]
  (new js/ResizeObserver
       (fn [[^js/ResizeObserverEntry entry]]
         (callback {:height (-> entry .-contentRect .-height)
                    :width (-> entry .-contentRect .-width)}))))
