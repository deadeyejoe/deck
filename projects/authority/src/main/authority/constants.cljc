(ns authority.constants)

(def initiatives (set (range 9)))

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

(defn process-colour [colour]
  {:bg (str "bg-" colour)
   :text (str "text-" colour)
   :border (str "border-" colour)})

(comment (process-colour "purple-600"))

(defn process [{:keys [:colour] :as props}]
  (merge props
         {:bg-colour (process-colour colour)
          :text-colour (process-colour colour)
          :border-colour (process-colour colour)}))

(comment (process {:colour "purple-600"}))

(def strategy-content
  {0 {:title "Naalu"
      :colour        {:bg "bg-gray-400", :text "text-gray-400", :border "border-gray-400"}
      :bg-colour     {:bg "bg-gray-400", :text "text-gray-400", :border "border-gray-400"}
      :text-colour   {:bg "bg-gray-400", :text "text-gray-400", :border "border-gray-400"}
      :border-colour {:bg "bg-gray-400", :text "text-gray-400", :border "border-gray-400"}}
   1
   {:title "Leadership"
    :colour        {:bg "bg-red-600", :text "text-red-600", :border "border-red-600"}
    :bg-colour     {:bg "bg-red-700", :text "text-red-700", :border "border-red-700"}
    :text-colour   {:bg "bg-red-700", :text "text-red-700", :border "border-red-700"}
    :border-colour {:bg "bg-red-600", :text "text-red-600", :border "border-red-600"}}
   2
   {:title "Diplomacy"
    :colour        {:bg "bg-yellow-600", :text "text-yellow-600", :border "border-yellow-600"}
    :bg-colour     {:bg "bg-yellow-700", :text "text-yellow-700", :border "border-yellow-700"}
    :text-colour   {:bg "bg-yellow-600", :text "text-yellow-600", :border "border-yellow-600"}
    :border-colour {:bg "bg-yellow-600", :text "text-yellow-600", :border "border-yellow-600"}}
   3
   {:title "Politics"
    :colour        {:bg "bg-yellow-300", :text "text-yellow-300", :border "border-yellow-300"}
    :bg-colour     {:bg "bg-yellow-500", :text "text-yellow-500", :border "border-yellow-500"}
    :text-colour   {:bg "bg-yellow-400", :text "text-yellow-400", :border "border-yellow-400"}
    :border-colour {:bg "bg-yellow-300", :text "text-yellow-300", :border "border-yellow-300"}}
   4
   {:title "Construction"
    :colour        {:bg "bg-green-700", :text "text-green-700", :border "border-green-700"}
    :bg-colour     {:bg "bg-green-800", :text "text-green-800", :border "border-green-800"}
    :text-colour   {:bg "bg-green-700", :text "text-green-700", :border "border-green-700"}
    :border-colour {:bg "bg-green-700", :text "text-green-700", :border "border-green-700"}}
   5
   {:title "Trade"
    :colour        {:bg "bg-green-500", :text "text-green-500", :border "border-green-500"}
    :bg-colour     {:bg "bg-green-600", :text "text-green-600", :border "border-green-600"}
    :text-colour   {:bg "bg-green-500", :text "text-green-500", :border "border-green-500"}
    :border-colour {:bg "bg-green-500", :text "text-green-500", :border "border-green-500"}}
   6
   {:title "Warfare"
    :colour        {:bg "bg-blue-500", :text "text-blue-500", :border "border-blue-500"}
    :bg-colour     {:bg "bg-blue-600", :text "text-blue-600", :border "border-blue-600"}
    :text-colour   {:bg "bg-blue-500", :text "text-blue-500", :border "border-blue-500"}
    :border-colour {:bg "bg-blue-500", :text "text-blue-500", :border "border-blue-500"}}
   7
   {:title "Technology"
    :colour        {:bg "bg-indigo-700", :text "text-indigo-700", :border "border-indigo-700"}
    :bg-colour     {:bg "bg-indigo-800", :text "text-indigo-800", :border "border-indigo-800"}
    :text-colour   {:bg "bg-indigo-700", :text "text-indigo-700", :border "border-indigo-700"}
    :border-colour {:bg "bg-indigo-700", :text "text-indigo-700", :border "border-indigo-700"}}
   8
   {:title "Imperial"
    :colour        {:bg "bg-purple-700", :text "text-purple-700", :border "border-purple-700"}
    :bg-colour     {:bg "bg-purple-800", :text "text-purple-800", :border "border-purple-800"}
    :text-colour   {:bg "bg-purple-800", :text "text-purple-800", :border "border-purple-800"}
    :border-colour {:bg "bg-purple-700", :text "text-purple-700", :border "border-purple-700"}}})

(defn lookup [key default-component]
  (fn look-fn
    ([initiative] (look-fn initiative default-component))
    ([initiative component]
     (get-in (strategy-content initiative) [key component]))))

(def strategy->title (comp :title strategy-content))
(def strategy->bg (lookup :bg-colour :bg))
(def strategy->text (lookup :text-colour :text))
(def strategy->border (lookup :border-colour :border))

(comment
  (-> (strategy-content 4) :bg-colour :bg)
  (strategy->border 4)
  (strategy->border 4 "bg"))

(def phase-title {:strategy-phase "Strategy"
                  :action-phase "Action"
                  :status-phase "Status"
                  :agenda-phase "Agenda"
                  :round-summary "Summary"})

(def strategy-words
  {1
   {:name "Leadership"
    :primary ["Gain 3 command tokens."
              "Spend any amount of influence to gain 1 command token for every 3 influence spent."]
    :secondary ["Spend any amount of influence to gain 1 command token for every 3 influence spent."]}
   2
   {:name "Diplomacy"
    :primary ["Choose 1 system other than the Mecatol Rex system that contains a planet you control; each other player places a command token from his reinforcements in the chosen system. Then, ready up to two exhausted planets you control."]
    :secondary ["Spend 1 token from your strategy pool to ready up to 2 exhausted planets you control."]}
   3
   {:name "Politics"
    :primary ["Choose a player other than the speaker. That player gains the speaker token."
              "Draw 2 action cards."
              "Look at the top 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order."]
    :secondary ["Spend 1 token from your strategy pool to draw 2 action cards."]}
   4
   {:name "Construction"
    :primary ["Place 1 PDS or 1 space dock on a planet you control."
              "Place 1 PDS on a planet you control."]
    :secondary ["Spend 1 token from your strategy pool and place it in any system; you may place either 1 space dock or 1 PDS on a planet you control in that system."]}
   5
   {:name "Trade"
    :primary ["Gain 3 trade goods."
              "Replenish commodities."
              "Choose any number of other players. Those players use the secondary ability of this strategy card without spending a command token."]
    :secondary ["Spend 1 token from your strategy pool to replenish commodities."]}
   6
   {:name "Warfare"
    :primary ["Remove 1 of your command tokens from the game board; then, gain 1 command token."
              "Redistribute any number of the command tokens on your command sheet."]
    :secondary ["Spend 1 token from your strategy pool to use the Production ability of 1 of your space docks in your home system."]}
   7
   {:name "Technology"
    :primary ["Research 1 technology."
              "Spend 6 resources to research 1 technology."]
    :secondary ["Spend 1 token from your strategy pool and 4 resources to research 1 technology."]}
   8
   {:name "Imperial"
    :primary ["Immediately score 1 public objective if you fulfill its requirements."
              "Gain 1 victory point if you control Mecatol Rex; otherwise, draw 1 secret objective."]
    :secondary ["Spend 1 token from your strategy pool to draw 1 secret objective."]}})
