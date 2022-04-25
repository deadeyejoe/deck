(ns conclave.view.sidebar.overlay
  (:require  [conclave.handlers :as handlers]
             [conclave.tiles.core :as tile]
             [conclave.view.icons :as icons]
             [re-frame.core :as rf]))

(defn number []
  [:div {:class ["cursor-pointer" "border-2" "rounded" "bg-blue-900"
                 "border-blue-700" "active:border-blue-400"
                 "w-12" "h-12"
                 "flex" "flex-col" "justify-around" "items-center"]
         :on-click #(rf/dispatch [handlers/set-overlay :tile-number])}
   "#"])

(defn res-inf []
  [:div {:class ["cursor-pointer" "border-2" "rounded" "bg-blue-900"
                 "border-blue-700" "active:border-blue-400"
                 "w-12" "h-12"
                 "flex" "flex-col" "justify-around" "items-center"]
         :on-click #(rf/dispatch [handlers/set-overlay :res-inf])}
   [:div {:class ["w-1/2"]} icons/resource]
   [:div {:class ["w-1/2" "mt-1"]} icons/influence]])

(defn tech []
  (->> tile/specialties
       (map (fn [s] [:div {:key s} (icons/specialty->img s)]))
       (doall)
       (into
        [:div {:class ["cursor-pointer" "border-2" "rounded" "bg-blue-900"
                       "border-blue-700" "active:border-blue-400"
                       "w-12" "h-12"
                       "flex" "flex-row" "justify-center" "items-center" "flex-wrap"]
               :on-click #(rf/dispatch [handlers/set-overlay :tech])}])))

(defn traits []
  (->> tile/traits
       (map (fn [t] [:div {:key t} (icons/trait->img t)]))
       (doall)
       (into
        [:div {:class ["cursor-pointer" "border-2" "rounded" "bg-blue-900"
                       "border-blue-700" "active:border-blue-400"
                       "w-12" "h-12"
                       "flex" "flex-row" "justify-center" "items-center" "flex-wrap"]
               :on-click #(rf/dispatch [handlers/set-overlay :trait])}])))

(defn wormhole []
  [:div {:class ["cursor-pointer" "border-2" "rounded" "bg-blue-900"
                 "border-blue-700" "active:border-blue-400"
                 "w-12" "h-12"
                 "flex" "flex-row" "justify-center" "items-center" "flex-wrap"]
         :on-click #(rf/dispatch [handlers/set-overlay :wormhole])}
   [:div {:class ["w-1/2"]} icons/legendary]
   [:div {:class ["w-1/2"]} icons/wormhole-alpha]
   [:div {:class ["w-1/2"]} icons/wormhole-beta]])

(defn component []
  [:div {:class ["flex" "justify-around" "w-full"]}
   [number]
   [res-inf]
   [tech]
   [traits]
   [wormhole]])
