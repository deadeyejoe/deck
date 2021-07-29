(ns authority.constants)

(def initiatives (set (range 9)))

(comment
  (def raw-strategy-content {0 {:title "Naalu"
                                :colour "gray-400"}
                             1 {:title "Leadership"
                                :colour "red-600"}
                             2 {:title "Diplomacy"
                                :colour "yellow-600"}
                             3 {:title "Politics"
                                :colour "yellow-400"}
                             4 {:title "Construction"
                                :colour "green-600"}
                             5 {:title "Trade"
                                :colour "green-800"}
                             6 {:title "Warfare"
                                :colour "blue-600"}
                             7 {:title "Technology"
                                :colour "indigo-600"}
                             8 {:title "Imperial"
                                :colour "purple-600"}})
  (defn process [{colour :colour :as props}]
    (merge props
           {:bg-colour (str "bg-" colour)
            :text (str "text-" colour)
            :border (str "border-" colour)}))

  (reduce
   (fn [m [k v]] (assoc m k (process v)))
   {}
   raw-strategy-content))

(def strategy-content
  {0 {:title "Naalu"
      :colour "gray-400"
      :bg-colour "bg-gray-400"
      :text-colour "text-gray-400"
      :border-colour "border-gray-400"}
   1 {:title "Leadership"
      :colour "red-600"
      :bg-colour "bg-red-700"
      :text-colour "text-red-700"
      :border-colour "border-red-600"}
   2 {:title "Diplomacy"
      :colour "yellow-600"
      :bg-colour "bg-yellow-700"
      :text-colour "text-yellow-600"
      :border-colour "border-yellow-600"}
   3 {:title "Politics"
      :colour "yellow-300"
      :bg-colour "bg-yellow-400"
      :text-colour "text-yellow-400"
      :border-colour "border-yellow-300"}
   4 {:title "Construction"
      :colour "green-700"
      :bg-colour "bg-green-800"
      :text-colour "text-green-700"
      :border-colour "border-green-700"}
   5 {:title "Trade"
      :colour "green-500"
      :bg-colour "bg-green-600"
      :text-colour "text-green-500"
      :border-colour "border-green-500"}
   6 {:title "Warfare"
      :colour "blue-500"
      :bg-colour "bg-blue-600"
      :text-colour "text-blue-500"
      :border-colour "border-blue-500"}
   7 {:title "Technology"
      :colour "indigo-700"
      :bg-colour "bg-indigo-800"
      :text-colour "text-indigo-700"
      :border-colour "border-indigo-700"}
   8 {:title "Imperial"
      :colour "purple-700"
      :bg-colour "bg-purple-800"
      :text-colour "text-purple-800"
      :border-colour "border-purple-700"}})


(def strategy->title (comp :title strategy-content))
(def strategy->bg (comp :bg-colour strategy-content))
(def strategy->text (comp :text-colour strategy-content))
(def strategy->border (comp :border-colour strategy-content))

(def phase-title {:strategy-phase "Strategy"
                  :action-phase "Action"
                  :status-phase "Status"
                  :agenda-phase "Agenda"
                  :round-summary "Summary"})