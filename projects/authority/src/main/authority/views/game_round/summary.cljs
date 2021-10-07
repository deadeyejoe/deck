(ns authority.views.game-round.summary
  (:require [re-frame.core :as rf]
            [authority.timer.utils :as timer-utils]
            [authority.utils :as utils]))

(defn label-with-content [label content]
  [:div {:key label
         :class ["w-full" "flex" "justify-between" "my-2"]}
   [:div
    (str label ": ")]
   [:div content]])

(defn time-with-label [summary label accessor]
  (let [content (-> summary
                    (get-in accessor)
                    (timer-utils/seconds->display))]
    [label-with-content label content]))

(defn turn-with-label [summary label accessor]
  (let [turn (-> summary
                 (get-in accessor))
        player (-> turn :player/name)
        duration (-> turn :time/elapsed timer-utils/seconds->display)]
    [label-with-content label (str player " (" duration ")")]))

(defn player-row [name count average]
  [:div {:key name
         :class ["flex" "flex-row" "justify-between" "w-full" "my-1"]}
   [:div {:class ["w-1/3" "flex" "justify-start"]} name]
   [:div {:class ["w-1/3" "flex" "justify-center"]} count]
   [:div {:class ["w-1/3" "flex" "justify-end"]} average]])

(defn player-summary [summary position]
  (let [name (utils/listen [:player/name position])
        {:keys [:turn/count :turn/average]} (get-in summary [:players position])]
    [player-row name count (timer-utils/seconds->display average)]))

(defn component []
  (let [round-number (utils/listen [:round/number])
        summary (utils/listen [:round/summary])
        initiative (utils/listen [:player/initiative-order])]
    [:div {:class ["h-full" "w-screen" "flex" "flex-col" "justify-center" "items-center"]}
     [:div {:class ["w-2/3" "flex" "flex-col" "justify-center" "items-center" "border" "border-gray-700"
                    "rounded-lg" "p-8" "text-3xl" "bg-gray-800"]}
      [:div {:class ["text-6xl" "mb-10"]} (str "End of Round " round-number)]
      [:div {:class ["flex" "w-full"]}
       [:div {:class ["flex" "flex-col" "items-start" "w-1/2" "pr-3"]}
        [time-with-label summary "Strategy Phase" [:phases :strategy-phase]]
        [time-with-label summary "Action Phase"   [:phases :action-phase]]
        [time-with-label summary "Status Phase"   [:phases :status-phase]]
        [time-with-label summary "Agenda Phase"   [:phases :agenda-phase]]
        [:div {:class ["w-full" "border-b" "border-gray-700"]}]
        [time-with-label summary "Total Elapsed"  [:total-time]]
        [time-with-label summary "Total Round"    [:elapsed-time]]
        [:div {:class ["w-full" "border-b" "border-gray-700"]}]
        [turn-with-label summary "Shortest Turn" [:shortest-turn]]
        [turn-with-label summary "Longest Turn" [:longest-turn]]]

       [:div {:class ["flex" "flex-col" "items-start" "w-1/2" "pl-3" "border-l" "border-gray-700"]}
        [:div {:class ["w-full" "border-b" "border-gray-700" "m-t-2"]}]
        [:div {:class ["flex" "flex-col" "w-full" "h-full" "justify-between"]}
         [player-row "Name" "Turns" "Average"]
         [:div {:class ["w-full" "border-b" "border-gray-700"]}]
         (doall (map (partial player-summary summary) initiative))]]]


      [:input {:type "button"
               :value "Start Next Round"
               :on-click #(rf/dispatch [:round/start])
               :class (into utils/primary-button ["mt-10"])}]]]))

(comment
  {:total-time 71
   :elapsed-time 71
   :number-of-rounds 5
   :longest-turn
   {:player/position 1
    :player/name "Robot"
    :pass? nil
    :strategize? nil
    :time/total 8
    :time/offset 0
    :time/elapsed 8}
   :shortest-turn
   {:player/position 3
    :player/name "Andrew"
    :pass? nil
    :strategize? nil
    :time/total 0
    :time/offset 0
    :time/elapsed 0}
   :phases {:strategy-phase 6, :action-phase 61, :status-phase 1, :agenda-phase 0}
   :players
   {1 #:turn{:count 5, :total 12, :average 2, :min 0, :max 8}
    2 #:turn{:count 5, :total 4, :average 0, :min 0, :max 2}
    3 #:turn{:count 5, :total 2, :average 0, :min 0, :max 1}
    4 #:turn{:count 3, :total 2, :average 0, :min 0, :max 2}
    5 #:turn{:count 5, :total 6, :average 1, :min 0, :max 4}
    6 #:turn{:count 3, :total 4, :average 1, :min 1, :max 3}
    7 #:turn{:count 3, :total 7, :average 2, :min 2, :max 5}
    8 #:turn{:count 3, :total 4, :average 1, :min 1, :max 3}}})