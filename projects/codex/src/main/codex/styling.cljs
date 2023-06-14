(ns codex.styling)

(def root-level-depth 0)

(def top-level-depth
  "Top level nodes are themselves nested in a node (the root)"
  1)

(defn section? [{:keys [style] :as _context}]
  (:section style))

(defn top-level-section? [{:keys [depth] :as context}]
  (and (= top-level-depth depth) (section? context)))

(def depth->flare {0 "bg-yellow-100"
                   1 "bg-yellow-200"
                   2 "bg-yellow-300"
                   3 "bg-yellow-400"
                   4 "bg-yellow-500"
                   5 "bg-yellow-600"
                   6 "bg-yellow-700"})

(def default-node-classes ["w-full" "flex" "flex-col"])

(defn node [{:keys [depth flare] :as context} _node]
  (cond-> default-node-classes
    flare (conj (get depth->flare depth "bg-yellow-800"))
    (section? context) (conj "my-2")
    (top-level-section? context) (conj "m-1" "p-1" "border")))

(def default-title-classes ["font-bold" "w-full" "pl-1"])

(def depth->title-size {1 "text-2xl"
                        2 "text-xl"})
(def depth->title-bg {1 "bg-orange-500"
                      2 "bg-orange-300"})

(defn title [{:keys [depth] :as context} _node]
  (cond-> default-title-classes
    :always (conj (get depth->title-size depth "text-base"))
    (section? context) (conj (get depth->title-bg depth) "mb-1")))

(def ordinal-width "w-8")
(def ordinal-height "h-8")
(def ordinal-default-classes [ordinal-width
                              "flex" "justify-center"
                              "absolute" "top-0" "-left-8"])

(defn ordinal
  [{:keys [depth] :as _context}]
  (-> ordinal-default-classes
      (conj (get depth->title-size depth "text-base"))))

(def default-body-classes ["w-full" "pl-1"])

(defn body [_context {:keys [title] :as _node}]
  (cond-> default-body-classes))
