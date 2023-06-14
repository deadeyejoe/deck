(ns codex.render)



(declare render-content)

(def ordinal-width "w-8")
(def ordinal-height "h-8")

(defn render-title [title-str]
  (when title-str
    [:div {:class ["text-lg" "font-bold" "mt-0.5"]}
     title-str]))

(defn render-card [{:keys [title content] :as _card-content}]
  [:div {:class ["flex" "flex-col" "hover:bg-gray-200"]}
   [render-title title]
   (when content [:div {:class ["mt-1"]} content])])

(defn ordinal [content]
  [:div {:class [ordinal-width ordinal-height "flex" "justify-center" "items-center" "flex-shrink-0"]}
   content])

(defn render-bulleted [list-item]
  [:div {:class ["flex"]}
   [ordinal "•"]
   [render-content list-item]])

(defn render-itemized [idx list-item]
  [:div {:class ["flex"]}
   [ordinal (str (inc idx) ".")]
   [render-content list-item]])

(defn render-list [{:keys [title style content] :as _list-content}]
  [:div {:class []}
   [render-title title]
   (if (= style :none)
     (->> content
          (map (partial vector render-content))
          (into [:div {:class ["ml-2"]}]))
     (->> (if (= style :bullet)
            (map render-bulleted content)
            (map-indexed render-itemized content))
          (into [:div {:class ["flex" "flex-col"]}])))])

(defn render-section [{:keys [title content] :as _section-content}]
  [:div {:class ["flex" "flex-col"]}
   [render-title title]
   (->> content
        (map (partial vector render-content))
        (into [:div {:class ["ml-2"]}]))])

(defn render-content [{:keys [type] :as content}]
  (case type
    :list (render-list content)
    :card (render-card content)
    :section (render-section content)
    nil (if (string? content)
          (render-card {:content content})
          "Unknown content type")))
