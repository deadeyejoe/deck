(ns codex.db
  (:require [re-frame.db :refer [app-db]]
            [superstring.core :as str]))

(comment
  @app-db)

(defn init []
  {:entries []
   :content ""
   :lexicon []})

(def content :content)
(def entries :entries)
(def lexicon :lexicon)
(def current-token :current-token)

(defn update-current [db content]
  (assoc db :content content))

(defn clear-current [db]
  (assoc db :content ""))

(defn entry->tokens [entry]
  (-> entry
      (str/replace #"[^a-zA-Z0-9]+" " ")
      (str/split #"\W+")))

(defn compute-lexicon [{:keys [entries] :as _db}]
  (let [all-tokens (->> entries
                        (mapcat entry->tokens)
                        (filter str/some?))
        token->count (frequencies all-tokens)]
    (->> token->count
         (sort-by second >)
         (map first)
         (take 50)
         (vec))))

(defn update-lexicon [db]
  (assoc db :lexicon (compute-lexicon db)))

(defn select-token [db idx]
  (assoc db :current-token idx))

(defn clear-token [db]
  (dissoc db :current-token))

(defn add-entry [db entry]
  (update db :entries conj entry))

(defn clear-entries [db]
  (assoc db :entries []))
