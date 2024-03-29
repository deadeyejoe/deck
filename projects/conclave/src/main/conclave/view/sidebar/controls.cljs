(ns conclave.view.sidebar.controls
  (:require [conclave.handlers :as handlers]
            [conclave.subs :as subs]
            [conclave.view.common :as common]
            [conclave.view.heroicons :as hicons]
            [re-frame.core :as rf]))

(defn navigation []
  [:div {:class ["flex" "w-full" "justify-center"]}
   [:div {:title "Jump 10 Maps Backward"}
    [common/real-button {:dispatch [handlers/navigate-map :previous 10]} hicons/chevron-double-left]]
   [:div {:title "Previous Map"}
    [common/real-button {:dispatch [handlers/navigate-map :previous 1]} hicons/chevron-left]]
   [:div {:class ["flex" "justify-center" "items-center" "mx-4"]}
    (str (or @(rf/subscribe [subs/storage-index]) "?")
         " of "
         (or @(rf/subscribe [subs/storage-total]) "?"))]
   [:div {:title "Next Map"}
    [common/real-button {:dispatch [handlers/navigate-map :next 1]} hicons/chevron-right]]
   [:div {:title "Jump 10 Maps Forward"}
    [common/real-button {:dispatch [handlers/navigate-map :next 10]} hicons/chevron-double-right]]])

(defn component []
  [common/o-box {:class ["p-1" "mt-2"]}
   [common/o-box {:class ["p-2" "border" "border-gray-800" "rounded-lg"]}
    [common/v-box {:class ["w-full" "flex" "justify-center" "items-center"]}
     [navigation]]]])
