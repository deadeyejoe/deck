(ns conclave.view.sidebar.main
  (:require [conclave.view.sidebar.controls :as controls]
            [conclave.view.sidebar.summary :as summary]
            [conclave.view.sidebar.overlay :as overlay]
            [conclave.maker-ui :as mui]
            [re-frame.core :as rf]))

(defn content []
  [:div {:class ["h-full" "w-full"
                 "flex" "flex-col" "justify-start"]}
   [:div {:class ["h-1/12"]}
    [controls/component]]
   [:div {:class ["h-1/2" "w-full" "flex"]}
    [summary/component]]
   [:div {:class ["h-3/12" "w-full" "flex"]}
    [overlay/component]]])

(defn component []
  [:div {:class ["w-full " "h-full" "flex"]}
   [:div {:class ["w-2" "bg-blue-900"]}]
   [content]])
