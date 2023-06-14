(ns codex.content
  (:require [clojure.set :as set]
            [clojure.spec.alpha :as s]
            [codex.content.action-reference :as actions]
            [codex.content.sites :as sites]
            [codex.content.summaries :refer [player-turn round-steps]]
            [com.rpl.specter :as sr]
            [medley.core :as medley]
            [superstring.core :as str]))

(s/def ::title string?)
(s/def ::body string?)
(s/def ::style map?)

(s/def ::children (s/coll-of ::node))
;; Note this is spec is not valid for the 'raw' data as written, which can contain strings in place of nodes
(s/def ::node (s/keys :opt-un [::title
                               ::body
                               ::children
                               ::style]))

(defn node? [x]
  (s/valid? ::node x))

(def BARE-STRINGS
  "A path selecting all strings that are direct children of nodes."
  (sr/recursive-path [] p
                     (sr/cond-path
                      string? sr/STAY
                      map? [(sr/must :children) sr/ALL p])))

(def ALL-NODES (sr/recursive-path [] p
                                  (sr/continue-then-stay (sr/must :children) sr/ALL p)))

(def NODE-CONTENTS (sr/multi-path (sr/must :title)
                                  (sr/must :body)))

(def ALL-CONTENT
  "Path selecting all title/body strings of all nodes"
  (sr/comp-paths ALL-NODES NODE-CONTENTS))

(def all-raw {:children (-> []
                            (conj round-steps player-turn)
                            (into actions/all-content)
                            (conj sites/all))})

(defn indexizer
  "A hack because I can't into specter. 
   The output of ALL-NODES is each element in the collection, and I can't figure out how to path 'up' to the collection as a whole (to apply INDEXED-VALS)"
  []
  (let [idx (atom 0)]
    (fn [n] (assoc n :key (swap! idx inc)))))

(def all
  "The entire content tree, any bare strings in the raw are converted to nodes"
  (->> all-raw
       (sr/transform BARE-STRINGS (partial array-map :body))
       (sr/transform ALL-NODES (indexizer))))

(comment
  (sr/select BARE-STRINGS round-steps)
  (take 20 (sr/select ALL-NODES all))
  (sr/select ALL-CONTENT all)

  (keep :ref (sr/select ALL-NODES  all))

  (sr/transform ALL-CONTENT (partial str "Onion: ") all))

(defn- collect-ref [node acc ref]
  (assert (not (contains? acc ref)))
  (assoc acc ref node))

(defn ->ref-map [content]
  (reduce (fn [acc {:keys [refer-by] :as node}]
            (reduce (partial collect-ref node)
                    acc
                    refer-by))
          {}
          (sr/select ALL-NODES content)))

(def tag-capture #"(\[\[.+?\]\])")
(def tag-regex #"\[\[(.+?)\]\]")

(def extract-tags (partial re-seq tag-regex))

(defn ->tag-map [content]
  (->> (sr/select ALL-CONTENT content)
       (keep (comp not-empty extract-tags))
       (apply concat)
       (medley/index-by (comp keyword
                              str/lisp-case
                              second))
       (medley/map-vals first)))

(defn dangling-tags [content]
  (let [tags (->tag-map content)
        refs (->ref-map content)]
    (set/difference (set (keys tags))
                    (set (keys refs)))))

(defn dangling-refs [content]
  (let [tags (->tag-map content)
        refs (->ref-map content)]
    (set/difference (set (keys refs))
                    (set (keys tags)))))

(comment
  (dangling-tags all)
  (dangling-refs all))

(def TAGS (sr/filterer (partial re-matches tag-regex)))

(defn tag->ref [ref-map raw-tag]
  (let [[_ tag] (re-find tag-regex raw-tag)
        {[anchor & _] :refer-by
         ref-title :title
         :as _reffed-node} (get ref-map (-> tag str/lisp-case keyword))]
    (if anchor
      [:a {:href (str "#" (name anchor))
           :class ["font-bold" "text-blue-500"]}
       tag]
      [:span {:class ["text-red-500"]} raw-tag])))

(defn process-content-str [ref-map content-str]
  (->> (str/split content-str #"(\[\[.+?\]\])")
       (sr/transform [TAGS sr/ALL]  (partial tag->ref ref-map))
       (into [:div])))

(defn transform-content [content]
  (let [refmap (->ref-map content)]
    (->> content
         (sr/transform ALL-CONTENT (partial process-content-str refmap)))))

(def flat-nodes (sr/select ALL-NODES all))
(def transformed-content (transform-content all))

(comment
  (take 10 flat-nodes)
  (sr/transform ALL-CONTENT (partial process-content-str (->ref-map all)) round-steps))
