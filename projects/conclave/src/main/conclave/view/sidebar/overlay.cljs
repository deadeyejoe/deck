(ns conclave.view.sidebar.overlay
  (:require  [conclave.components.signal :as signal]
             [conclave.handlers :as handlers]
             [conclave.map.serialization :as serialization]
             [conclave.subs :as subs]
             [conclave.view.icons :as icons]
             [conclave.view.heroicons :as hicons]
             [conclave.view.sidebar.screenshot :as screenshot]
             [conclave.view.tutorial.handlers :as tut-handlers]
             [conclave.utils.web :as web-util]
             [re-frame.core :as rf]))

(defn button-classes
  ([active] (button-classes active :large))
  ([active size]
   (concat
    ["cursor-pointer" "text-white"
     "border-2" "rounded"
     "bg-gradient-to-br"
     "transition-colors" "delay-100"
     "flex" "flex-wrap" "justify-center" "items-center"]
    (if active
      ["border-white"
       "from-blue-600" "to-blue-300"]
      ["border-blue-600"
       "from-blue-900" "to-blue-600"
       "hover:from-blue-800" "hover:to-blue-500" "hover:border-blue-500"])
    (case size
      :small ["w-8" "h-8"]
      :medium ["w-10" "h-10"]
      :large ["w-14" "h-14"]))))

(defn number []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :tile-number]))
         :title "Click to toggle tile number"
         :on-click #(rf/dispatch [handlers/set-overlay :tile-number])}
   "#"])

(defn ring []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :ring]))
         :title "Click to toggle ring number"
         :on-click #(rf/dispatch [handlers/set-overlay :ring])}
   [:div {:class ["w-8" "h-8" "border-4" "rounded-full" "border-gray-200" "bg-transparent"]}]])

(defn res-inf []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :res-inf]))
         :title "Click to toggle resource/influence values"
         :on-click #(rf/dispatch [handlers/set-overlay :res-inf])}
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} icons/resource]
   [:div {:class ["w-1/3" "flex" "justify-center" "items-center"]}]
   [:div {:class ["w-1/3" "flex" "justify-center" "items-center"]}]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mt-1"]} icons/influence]])

(defn tech []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :tech]))
         :title "Click to toggle tech specialties"
         :on-click #(rf/dispatch [handlers/set-overlay :tech])}
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/biotic "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/cybernetic "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/propulsion "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/warfare "18px"]]])

(defn traits []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :trait]))
         :title "Click to toggle planet traits"
         :on-click #(rf/dispatch [handlers/set-overlay :trait])}
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2" "-mb-1"]} [icons/cultural "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2" "-mb-1"]} [icons/hazardous "18px"]]
   [:div {:class ["flex" "justify-center" "items-center" "w-1/2"]} [icons/industrial "18px"]]])

(defn wormhole []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :wormhole]))
         :title "Click to toggle wormholes and legendaries"
         :on-click #(rf/dispatch [handlers/set-overlay :wormhole])}
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} [icons/alpha "22px"]]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center" "-mb-1"]} [icons/beta "22px"]]
   [:div {:class ["w-1/2" "flex" "justify-center" "items-center"]} [icons/legendary* "22px"]]])

(defn frontier []
  [:div {:class (button-classes @(rf/subscribe [subs/overlay-mode-is :frontier]))
         :title "Click to toggle frontier systems"
         :on-click #(rf/dispatch [handlers/set-overlay :frontier])}
   [:div {:class ["w-8" "h-8" "rounded-full" "bg-black" "border-2" "border-white" "flex" "justify-center" "items-center"]}
    icons/frontier]])

(defn share-button []
  (let [uid (random-uuid)]
    (fn []
      [:div {:class (concat (button-classes false :small)
                            ["text-xs"]
                            (when (signal/<set? uid) ["text-green-500"]))
             :on-click #(do (web-util/copy-to-clipboard (web-util/location))
                            (signal/>flash! uid true 2000))
             :title "Copy URL to clipboard"}
       (if (signal/<set? uid) hicons/check-circle hicons/share)])))

(defn tts-export-button []
  (let [uid (random-uuid)]
    (fn []
      (let [galaxy-map @(rf/subscribe [subs/galaxy-map])]
        [:div {:class (concat (button-classes false :small)
                              ["text-xs"]
                              (when (signal/<set? uid) ["text-green-500"]))
               :on-click #(do (web-util/copy-to-clipboard (serialization/serialize-tts galaxy-map))
                              (signal/>flash! uid true 2000))
               :title "Copy TTS String to clipboard"}
         (if (signal/<set? uid) hicons/check-circle hicons/upload-solid)]))))

(defn handle-tts-string [tts-str]
  (try
    (let [inferred-layout (serialization/infer-layout tts-str)
          deserialized (serialization/deserialize-tts tts-str inferred-layout)]
      (rf/dispatch [handlers/load-external-map {:layout inferred-layout :map deserialized}])
      deserialized)
    (catch js/Error e (js/console.log e))))

(defn tts-import-button []
  (let [uid (random-uuid)]
    (fn []
      [:div {:class (concat (button-classes false :small)
                            ["text-xs relative"]
                            (when (signal/<set? [uid :success]) ["text-green-500"]))
             :on-click #(when (signal/<unset? [uid :active]) (signal/>set! [uid :active]))
             :title "Import map from TTS String"}
       (when (signal/<set? [uid :active])
         [:div {:class ["absolute" "text-base" "right-10" "opacity-100" "transition-opacity"]}
          [:input {:class ["appearance-none"]
                   :type :text
                   :placeholder "Paste TTS string here"
                   :ref #(when % (.focus %))
                   :on-blur #(rf/dispatch [signal/toggle! [uid :active]])
                   :on-change #(do (when (handle-tts-string (-> % .-target .-value))
                                     (signal/>unset! [uid :active])
                                     (signal/>flash! [uid :success] true 2000)))}]])
       (if (signal/<set? [uid :success]) hicons/check-circle hicons/download-solid)])))

(defn screenshot-button []
  [:div {:class (concat (button-classes false :small)
                        ["text-xs relative"])
         :on-click screenshot/capture!
         :title "Take a screenshot of the map"}
   hicons/camera-solid])

(defn component []
  [:<>
   [:div {:class ["flex" "flex-row" "lg:flex-col" "justify-start" "items-end"
                  "w-full" "h-1/12" "pt-2"]}
    [:div {:class (concat (button-classes false :small))
           :title "View help"
           :on-click #(rf/dispatch [handlers/show-modal :tutorial])}
     hicons/question-circle]]
   [:div {:class ["flex" "flex-row" "lg:flex-col" "justify-around" 
                  "w-full" "h-2/3" "text-3xl"]}
    [number]
    [ring]
    [res-inf]
    [tech]
    [traits]
    [wormhole]
    [frontier]]
   [:div {:class ["flex" "flex-row" "lg:flex-col" "justify-end" "items-end"
                  "w-full" "h-1/4" "pb-2"]}
    [share-button]
    [:div {:class ["h-1"]}]
    [screenshot-button]
    [:div {:class ["h-3"]}]
    [tts-export-button]
    [:div {:class ["h-1"]}]
    [tts-import-button]]])
