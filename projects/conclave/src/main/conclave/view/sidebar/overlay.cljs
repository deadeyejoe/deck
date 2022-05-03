(ns conclave.view.sidebar.overlay
  (:require  [conclave.handlers :as handlers]
             [conclave.subs :as subs]
             [conclave.tiles.core :as tile]
             [conclave.view.icons :as icons]
             [re-frame.core :as rf]))

(defn button-classes [active]
  (into
   ["cursor-pointer" "text-3xl" "text-white"
    "border-2" "rounded"
    "bg-gradient-to-br"
    "transition-colors" "delay-100"
    "w-14" "h-14"
    "flex" "flex-wrap" "justify-center" "items-center"]
   (if active
     ["border-white"
      "from-blue-600" "to-blue-300"]
     ["border-blue-600"
      "from-blue-900" "to-blue-600"
      "hover:from-blue-800" "hover:to-blue-500" "hover:border-blue-500"])))

(defn number []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :tile-number]))
         :title "Click to toggle tile number"
         :on-click #(rf/dispatch [handlers/set-overlay :tile-number])}
   "#"])

(defn ring []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :ring]))
         :title "Click to toggle ring number"
         :on-click #(rf/dispatch [handlers/set-overlay :ring])}
   [:div {:class ["w-8" "h-8" "border-4" "rounded-full" "border-gray-200" "bg-transparent"]}]])

(defn res-inf []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :res-inf]))
         :title "Click to toggle resource/influence values"
         :on-click #(rf/dispatch [handlers/set-overlay :res-inf])}
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} icons/resource]
   [:div {:class ["w-1/3" "flex" "justify-center" "items-center"]}]
   [:div {:class ["w-1/3" "flex" "justify-center" "items-center"]}]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mt-1"]} icons/influence]])

(defn tech []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :tech]))
         :title "Click to toggle tech specialties"
         :on-click #(rf/dispatch [handlers/set-overlay :tech])}
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/biotic "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/cybernetic "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/propulsion "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/warfare "18px"]]])

(defn traits []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :trait]))
         :title "Click to toggle planet traits"
         :on-click #(rf/dispatch [handlers/set-overlay :trait])}
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2" "-mb-1"]} [icons/cultural "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2" "-mb-1"]} [icons/hazardous "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/industrial "18px"]]])

(defn wormhole []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :wormhole]))
         :title "Click to toggle wormholes and legendaries"
         :on-click #(rf/dispatch [handlers/set-overlay :wormhole])}
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} [icons/alpha "22px"]]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} [icons/beta "22px"]]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center"]} [icons/legendary* "22px"]]])

(defn frontier []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :frontier]))
         :title "Click to toggle frontier systems"
         :on-click #(rf/dispatch [handlers/set-overlay :frontier])}
   [:div {:class ["w-8" "h-8" "rounded-full" "bg-black" "border-2" "border-white" "flex" "justify-center" "items-center"]}
    icons/frontier]])

(defn component []
  [:div {:class ["flex" "flex-col" "justify-around" "w-full" "h-2/3" "my-5"]}
   [number]
   [ring]
   [res-inf]
   [tech]
   [traits]
   [wormhole]
   [frontier]])
