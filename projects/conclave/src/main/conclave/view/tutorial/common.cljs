(ns conclave.view.tutorial.common
  (:require [conclave.view.tutorial.subs :as subs]
            [re-frame.core :as rf]
            [medley.core :as medley]))

(defn tutorial-component [element content]
  (let [surfaced (rf/subscribe [subs/is-surfaced? element])
        highlighted (rf/subscribe [subs/is-highlighted? element])]
    (fn []
      (update-in content [1 :class] concat
                 (when @surfaced ["z-tutorial"])
                 (when @highlighted ["shadow-xl" "shadow-blue-700"])))))
