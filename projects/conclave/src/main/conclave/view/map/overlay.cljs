(ns conclave.view.map.overlay
  (:require [conclave.subs :as subs]
            [conclave.tiles.core :as tile]
            [conclave.view.icons :as icons]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(defn tile-number-content [tile]
  (when-not (tile/home? tile)
    [:div {:class ["text-3xl"]} (-> tile :key name)]))

(defn coordinate-content [coordinate]
  [:div (->> coordinate
             (interpose ", ")
             (apply str))])

(defn legendary-content [{:keys [legendary] :as _tile}]
  (when legendary
    [:div icons/legendary]))

(defn res-inf-content [{{:keys [resources
                                influence
                                optimal-resources
                                optimal-influence]} :total :as _tile}]
  (when (or (pos-int? resources) (pos-int? influence))
    [:div {:class ["flex" "text-sm" "flex-wrap"]}
     [:div {:class ["text-center" "w-1/2" "text-amber-400"]} optimal-resources]
     [:div {:class ["text-center" "w-1/2" "text-amber-800"]} resources]
     [:div {:class ["text-center" "w-1/2" "text-cyan-400"]} optimal-influence]
     [:div {:class ["text-center" "w-1/2" "text-cyan-800"]} influence]]))

(defn tech-content [{{:keys [specialties]} :total :as _tile}]
  (when (seq specialties)
    (->> specialties
         (map (fn [s] [:div {:key s} (icons/specialty->img s)]))
         (doall)
         (into [:div]))))

(defn wormhole-content [{:keys [wormhole legendary] :as _tile}]
  (or (when wormhole
        [:div (icons/wormhole->img wormhole)])
      (when legendary
        [:div icons/legendary])))

(defn trait-content [{{:keys [traits]} :total :as _tile}]
  (when (seq traits)
    (->> traits
         (map-indexed (fn [i t] [:div {:key i :class ["w-1/2"]} (icons/trait->img t)]))
         (into [:div {:class ["flex" "flex-wrap" "justify-center"]}]))))

(defn content [coordinate tile]
  (let [overlay-mode @(rf/subscribe [subs/overlay-mode])]
    (case overlay-mode
      :tile-number (tile-number-content tile)
      :coordinate (coordinate-content coordinate)
      :legendary (legendary-content tile)
      :res-inf (res-inf-content tile)
      :tech (tech-content tile)
      :trait (trait-content tile)
      :wormhole (wormhole-content tile)
      nil)))

(defn component [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])
        content (content coordinate tile)]
    (when (or content (tile/home? tile))
      [:div {:class ["flex" "flex-col" "items-center"]}
       (when (tile/home? tile)
         [:div (-> tile :key str str/upper-case)])
       content])))
