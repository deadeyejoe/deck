(ns authority.views.game-round.action
  (:require [re-frame.core :as rf]
            [authority.utils :as utils :refer [listen]]
            [authority.views.common :as common]
            [authority.constants :as const]))

(defn player-order [position]
  (let [name (listen [:player/name position])
        initiative (listen [:player/initiative position])
        ready? (listen [:player/ready? position])
        strategized? (listen [:player/strategized? position])
        current? (listen [:action/is-current position])]
    [:div {:key position
           :class (concat ["flex" "flex-row" "justify-between" "items-center" "p-1" "ml-2" "w-11/12"])}
     [:div {:class (concat (if current?
                             ["text-6xl"]
                             ["text-3xl"])
                           (when-not ready? ["text-gray-700" "line-through"]))} name]
     (common/initiative-badge {:initiative initiative
                               :state (if current?
                                        (if strategized? :disabled :selected)
                                        (if strategized? :exhausted :unselected))
                               :content initiative})]))

(defn initiative-order []
  (let [ordering (rf/subscribe [:player/initiative-order])]
    [:div {:class ["absolute" "left-0" "inset-y-0" "flex" "flex-col" "justify-center"
                   "w-1/6" "h-screen"]}
     [:div {:class ["bg-gray-800" "w-full" "border-gray-700" "py-5"
                    "border-r-2" "border-t-2" "border-b-2" "rounded-r-xl"
                    "flex" "flex-col" "justify-center" "items-start"]}
      (doall
       (map player-order @ordering))]]))

(defn timer-control []
  (let [paused? (listen [:timer/paused])]
    [:div
     (if paused?
       [common/primary-button {:label "Resume" :dispatch [:timer/resume-all]}]
       [common/primary-button {:label "Pause" :dispatch [:timer/pause-all]}])]))

(defn time-display []
  (let [elapsed (listen [:timer/elapsed :player])
        display (listen [:timer/display :player])
        warning? (listen [:timer/elapsed-in-range :player 90 120])
        danger? (listen [:timer/elapsed-in-range :player 120])]
    [:div {:class (into ["flex" "justify-center" "items-center" "text-hueg" "transition-colors"
                         "duration-1000" "ease-in" "min-h-full" "h-36"]
                        (cond warning? ["text-yellow-500"]
                              (and danger? (even? elapsed)) ["text-red-600"]
                              (and danger? (odd? elapsed)) ["text-red-900"]))}
     display]))

(defn strategy-instruction [s]
  [:div {:class ["m-1" "py-1" "px-2" "bg-gray-700"]
         :style {:clip-path (utils/polygon-px 5)}} s])

(defn strategy-name []
  (let [initiative (listen [:player/initiative :current])
        strategizing? (listen [:action/strategizing?])]
    [:div {:class ["flex" "flex-col" "items-center" "text-5xl"
                   (if strategizing?
                     "text-black"
                     (const/strategy->text initiative))]}
     [common/poly-badge {:poly-outer (utils/polygon-px 10)
                         :border-padding "p-1"
                         :border (when strategizing? (const/strategy->border initiative :bg))
                         :fill   (if strategizing?
                                   (const/strategy->bg initiative)
                                   "bg-gray-800")
                         :content [:div {:class ["p-2"]} (const/strategy->title initiative)]}]
     (when strategizing?
       [:div {:class ["w-1/2" "m-5" "text-xl" "text-gray-200"
                      "bg-gray-800" "border" "rounded" "border-gray-400" "p-5"]}
        [:div {:class ["font-bold" "m-2"]} "Primary"]
        (doall (map strategy-instruction (get-in const/strategy-words [initiative :primary])))
        [:div {:class ["font-bold" "m-2"]} "Secondary"]
        (doall (map strategy-instruction (get-in const/strategy-words [initiative :secondary])))])]))

(defn spacer-h [w]
  [:div {:class ["flex-shrink-0" w]}])

(defn spacer-v [h]
  [:div {:class ["flex-shrink-0" "min-height-full" h]}])

(defn player-name []
  (let [name (listen [:player/name :current])]
    [:div {:class ["text-7xl"]} name]))

(defn big-timer []
  [:div {:class ["flex" "justify-center" "items-center"]}
   [spacer-h "w-1/6"]
   [spacer-h "w-1/12"]
   [time-display]
   [spacer-h "w-1/12"]
   [:div {:class ["flex-shrink-0" "w-1/6"]}
    [timer-control]]])

(defn turn-controls []
  (let [strategized? (listen [:player/strategized? :current])
        strategizing? (listen [:action/strategizing?])]
    [:div {:class ["flex" "w-1/3" "justify-between"]}
     [common/primary-button {:label "Next Turn" :dispatch [:action/next-turn]}]
     (when-not strategizing?
       (if strategized?
         [common/primary-button {:label "Pass" :dispatch [:action/pass]}]
         [common/primary-button {:label "Strategic Action" :dispatch [:action/strategize]}]))
     [common/primary-button {:label "End Action Phase" :dispatch [:status/start]}]]))

(defn component []
  [:div {:class ["w-screen" "h-full" "flex" "flex-col" "justify-center" "items-center"]}
   [initiative-order]
   [player-name]
   [spacer-v "h-10"]
   [big-timer]
   [spacer-v "h-10"]
   [strategy-name]
   [spacer-v "h-10"]
   [turn-controls]])