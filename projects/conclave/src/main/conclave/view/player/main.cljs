(ns conclave.view.player.main
  (:require [conclave.subs :as subs]
            [conclave.handlers :as handlers]
            [re-frame.core :as rf]))

(comment
  (rf/dispatch [handlers/start-player-edit]))
