(ns codex.search
  (:require [codex.content :as content :refer [flat-nodes]]
            [superstring.core :as str]
            ["fuse.js" :as Fuse]
            [com.rpl.specter :as sr]))

(def options
  {:includeScore true
   :includeMatches true
   :ignoreLocation true
   :threshold 0.1
   :keys ["title" "body"]})

(comment
  (count flat-nodes)
  (let [fooz (new Fuse (clj->js flat-nodes) (clj->js options))
        term "action"]
    (->> (-> (.search fooz term)
             (js->clj :keywordize-keys true))))

  (let [fooz (new Fuse (clj->js flat-nodes) (clj->js options))
        term "action"]
    [(->> (-> (.search fooz term)
              (js->clj :keywordize-keys true))
          count)
     (->> (filter (fn [{:keys [title body]}]
                    (or (some-> title (str/includes? term :ignore-case))
                        (some-> body (str/includes? term :ignore-case))))
                  flat-nodes)
          (count))]))

(defn contains-term? [term {:keys [title body] :as _node}]
  (or (some-> title (str/includes? term :ignore-case))
      (some-> body (str/includes? term :ignore-case))))

(def missing-term? (complement contains-term?))

(defn exact-search [term]
  (let [results
        (->> flat-nodes
             (filter (partial contains-term? term))
             (map :key)
             (set))]
    results))

(comment
  (contains? (exact-search "a") 2))

(defn filter-nodes
  "Filters nodes that don't match the predicate. Keeps parent nodes that have children that match the predicate."
  [pred root-node]
  (sr/transform content/ALL-NODES
                (fn [{:keys [children] :as node}]
                  (if (or (pred node) (not-empty children))
                    node
                    sr/NONE))
                root-node))

(defn hierarchical-search [term root-node]
  (->> root-node
       (filter-nodes (partial contains-term? term))
       (sr/select content/ALL-NODES)))

(comment
  (filter-nodes (partial contains-term? "adv") content/all)
  (hierarchical-search "adv" content/all))
