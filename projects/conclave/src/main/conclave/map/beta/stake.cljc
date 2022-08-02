(ns conclave.map.beta.stake
  (:require [conclave.map.core :as core]
            #?(:clj [taoensso.tufte :as tufte :refer [defnp]]
               :cljs [taoensso.tufte :as tufte :refer-macros (defnp)])
            [medley.core :as medley]))

(defn closest-homesystems [hs->distance]
  (let [[min-distance closest-entries] (->> hs->distance
                                            (group-by val)
                                            (apply min-key key))]
    [min-distance (map key closest-entries)]))

(defnp discrete-stakes [hs->distance]
  (let [[_min-distance closest-hss] (closest-homesystems hs->distance)]
    (select-keys hs->distance closest-hss)))

(defn inverse-square [n]
  (if (= n 0)
    0
    (/ 1.0 (Math/pow n 1))))

(defnp continuous-stakes [hs->distance]
  (medley/map-vals inverse-square hs->distance))

(defnp normalize-stakes [hs->stake]
  (let [total (->> hs->stake vals (apply +))]
    (medley/map-vals #(/ % total) hs->stake)))

(defn stake-for-system [coordinate->coordinate->distance stakeholders coordinate]
  (when-not (some #{coordinate} stakeholders)
    (-> coordinate->coordinate->distance
        (get coordinate)
        (select-keys stakeholders)
        (discrete-stakes)
        (normalize-stakes))))

(defn stakes-for-map [galaxy-map coordinate->coordinate->distance]
  (let [home-system-coordinates (core/home-coordinates galaxy-map)
        free-spaces (core/stakeable-coordinates galaxy-map)]
    (zipmap free-spaces
            (map (partial stake-for-system coordinate->coordinate->distance home-system-coordinates) free-spaces))))

(defn highest-stake [{:keys [stakes] :as galaxy-map} coordinate]
  (when-let [system->stake (get stakes coordinate)]
    (let [[highest-stake highest-entries] (some->> system->stake
                                                   (group-by val)
                                                   (apply max-key key))
          highest-entry-keys (mapv (comp :key (partial core/coordinate->tile galaxy-map) key)
                                   highest-entries)]
      [highest-stake highest-entry-keys])))
