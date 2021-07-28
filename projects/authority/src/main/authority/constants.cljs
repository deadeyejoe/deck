(ns authority.constants)

(def initiatives (set (range 9)))

(def strategy-content {0 {:title "Naalu"}
                       1 {:title "Leadership"}
                       2 {:title "Diplomacy"}
                       3 {:title "Politics"}
                       4 {:title "Construction"}
                       5 {:title "Trade"}
                       6 {:title "Warfare"}
                       7 {:title "Technology"}
                       8 {:title "Imperial"}})

(def strategy->title (comp :title strategy-content))

(def phase-title {:strategy-phase "Strategy"
                  :action-phase "Action"
                  :status-phase "Status"
                  :agenda-phase "Agenda"
                  :round-summary "Summary"})