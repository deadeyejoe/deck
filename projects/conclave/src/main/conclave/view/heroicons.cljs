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

(def x-circle
  [->svg "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"])

(def check-circle
  [->svg "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"])

(def upload
  [->svg "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"])

(def download
  [->svg "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"])

;; Solid

(defn ->svg-solid [& strokes]
  (into [:svg {:xmlns "http://www.w3.org/2000/svg"
               :class ["h-5 " "w-5"]
               :fill "currentColor"
               :viewBox "0 0 20 20"}
         (map-indexed (fn [idx stroke] [:path (assoc {:key idx
                                                      :fill-rule "evenodd"
                                                      :clip-rule "evenodd"}
                                                     :d stroke)])
                      strokes)]))

(def arrow-narrow-down-solid
  [->svg-solid "M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"])

(def arrow-narrow-up-solid
  [->svg-solid "M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"])

(def cloud-upload-solid
  [->svg-solid
   "M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
   "M9 13h2v5a1 1 0 11-2 0v-5z"])

(def upload-solid
  [->svg-solid "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"])

(def download-solid
  [->svg-solid "M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"])
