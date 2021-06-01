(ns imperium.app
  (:require-macros [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [reagent.dom]
            [reagent.core :as reagent]
            [re-frame.core :as rf]
            [akiroz.re-frame.storage :as storage]
            [imperium.client-beta :as client]))

;; Coeffects ====================================================

(storage/reg-co-fx! :imperium {:fx :local :cofx :local})

(rf/reg-cofx
 :uuid
 (fn [cofx _]
   (assoc cofx :uuid (random-uuid))))

;; Effect =======================================================

(rf/reg-fx
 :websocket
 (fn [[action value]]
   (case action
     :ws/start (client/start! value)
     :ws/send (client/send!  value)
     (println (str "Unrecognized action: " action)))))

;; Event Dispatch ====================================================

;; Interceptors ==========================================

;; Event Handlers ====================================================

(rf/reg-event-fx
 :initialize
 [(rf/inject-cofx :local) (rf/inject-cofx :uuid)]
 (fn [cofx _]
   (if-let [user (get-in cofx [:local :user])]
     {:db {:user user}
      :dispatch [:connect nil]}
     (let [user {:uuid (:uuid cofx)}]
       {:db {:user user}
        :local {:user user}
        :dispatch [:connect nil]}))))

(rf/reg-event-fx
 :connect
 (fn [cofx _]
   (if-let [user (get-in cofx [:db :user])]
     {:websocket [:ws/start (:uuid user)]}
     {})))

(rf/reg-event-fx
 :send
 (fn [cofx _]
   {:websocket [:ws/send {:type :ws :content "blah"}]}))

(rf/reg-event-fx
 :save-name
 [(rf/inject-cofx :local)]
 (fn [cofx [_ new-name]]
   (let [{:keys [db local]} cofx
         update #(assoc-in % [:user :name] new-name)]
     {:db (update db)
      :local (update local)})))

(rf/reg-event-db
 :connected
 (fn [db [_ _]]
   (assoc db :connected true)))

(rf/reg-event-db
 :disconnected
 (fn [db [_ _]]
   (dissoc db :connected)))

;; Query ====================================================

(rf/reg-sub
 :user/uuid
 (fn [db _] (get-in db [:user :uuid])))

(rf/reg-sub
 :user/name
 (fn [db _] (get-in db [:user :name])))

;; View ====================================================

(defn text-input [atom]
  [:input {:type "text" :value @atom :on-change #(reset! atom (-> % .-target .-value))}])

(defn user-input []
  (let [atom (reagent/atom "")]
    [:div
     [:label "Name: "]
     [text-input atom]
     [:input {:type "button" :value "Set" :on-click #(rf/dispatch [:save-name @atom])}]]))

(defn ui []
  [:div
   [:div (str "Uuid: " @(rf/subscribe [:user/uuid]))]
   (if-let [name @(rf/subscribe [:user/name])]
     [:div "Name: " name]
     [user-input])
   [:input {:type "button" :value "Connect" :on-click #(rf/dispatch [:connect])}]
   [:input {:type "button" :value "send" :on-click #(rf/dispatch [:send])}]])

(defn render []
  (reagent.dom/render [ui]
                      (js/document.getElementById "app")))

;; Init ====================================================

(defn ^:dev/before-load stop [])

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (render))

(defn init []
  (rf/dispatch-sync [:initialize])
  (render))