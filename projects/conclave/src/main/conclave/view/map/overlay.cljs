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

(defn distance-content [coordinate]
  (when-let [selected @(rf/subscribe [subs/selected-tile])]
    [:div (get-in @(rf/subscribe [subs/distance-map]) [selected coordinate])]))

(defn ring->bg-colour [ring]
  (case ring
    1 "bg-yellow-200"
    2 "bg-yellow-500"
    3 "bg-orange-500"
    4 "bg-red-500"
    "bg-black"))

(defn ring-content [coordinate]
  (let [ring @(rf/subscribe [subs/distance-from-origin coordinate])]
    (when (pos-int? ring)
      [:div {:class [(ring->bg-colour ring) "text-black"
                     "w-10" "h-10" "rounded-full"
                     "flex" "justify-center" "items-center"]}
       ring])))

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

(defn trait-content [{{:keys [traits]} :total :as _tile}]
  (when (seq traits)
    (->> traits
         (map-indexed (fn [i t] [:div {:key i :class ["w-1/2" "h-1/2" "p-1" "flex" "justify-center" "items-center"]} (icons/trait->img t "19px")]))
         (into [:div {:class ["flex" "flex-wrap" "justify-center" "items-center" "w-2/3" "h-2/3"]}]))))

(defn wormhole-content [{:keys [wormhole legendary] :as _tile}]
  (or (when wormhole
        [:div (icons/wormhole->img wormhole)])
      (when legendary
        [:div icons/legendary])))

(defn frontier-content [tile]
  (when (tile/frontier? tile)
    [:div icons/frontier]))

(defn content [coordinate tile]
  (let [overlay-mode @(rf/subscribe [subs/overlay-mode])]
    (case overlay-mode
      :tile-number (tile-number-content tile)
      :coordinate (coordinate-content coordinate)
      :distance-score (distance-content coordinate)
      :ring (ring-content coordinate)
      :legendary (legendary-content tile)
      :res-inf (res-inf-content tile)
      :tech (tech-content tile)
      :trait (trait-content tile)
      :wormhole (wormhole-content tile)
      :frontier (frontier-content tile)
      nil)))

(defn home-content [{player-key :key :as _tile}]
  (let [player-name @(rf/subscribe [subs/player-name player-key])]
    [:div (or player-name
              (-> player-key name str/upper-case))]))

(defn component [coordinate]
  (let [tile @(rf/subscribe [subs/tile coordinate])
        content (content coordinate tile)]
    (cond
      (tile/home? tile)
      [:div {:class ["flex" "justify-center" "items-center" "h-full" "w-full" "text-white" "text-4xl"]}
       [home-content tile]]

      content
      [:div {:class ["flex" "justify-center" "items-center" "h-full" "w-full" "bg-black"]}
       content])))
