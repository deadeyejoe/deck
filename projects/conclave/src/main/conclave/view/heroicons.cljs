(ns conclave.view.heroicons)

(defn ->svg [stroke]
  [:svg {:xmlns "http://www.w3.org/2000/svg"
         :class ["h-6 " "w-6"]
         :fill "none"
         :viewBox "0 0 24 24"
         :stroke "currentColor"
         :stroke-width 2}
   [:path (assoc {:stroke-linecap "round"
                  :stroke-linejoin "round"}
                 :d stroke)]])

(def library
  [->svg "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"])

(def refresh
  [->svg "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"])

(def arrow-right
  [->svg "M17 8l4 4m0 0l-4 4m4-4H3"])

(def question-circle
  [->svg "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"])

(def chevron-left
  [->svg "M15 19l-7-7 7-7"])

(def chevron-double-left
  [->svg "M11 19l-7-7 7-7m8 14l-7-7 7-7"])

(def chevron-right
  [->svg "M9 5l7 7-7 7"])

(def chevron-double-right
  [->svg "M13 5l7 7-7 7M5 5l7 7-7 7"])

(def share
  [->svg "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"])
