(ns conclave.view.icons)

(defn image-props
  ([filename] (image-props filename "20px"))
  ([filename size]
   {:src (str "images/" filename ".png")
    :height size
    :width size}))

(def trait-cultural [:img (image-props "general/trait-cultural")])
(def trait-hazardous [:img (image-props "general/trait-hazardous")])
(def trait-industrial [:img (image-props "general/trait-industrial")])

(def trait->img {:cultural trait-cultural
                 :hazardous trait-hazardous
                 :industrial trait-industrial})

(def specialty-biotic [:img (image-props "general/specialty-biotic-dark")])
(def specialty-cybernetic [:img (image-props "general/specialty-cybernetic-dark")])
(def specialty-propulsion [:img (image-props "general/specialty-propulsion-dark")])
(def specialty-warfare [:img (image-props "general/specialty-warfare-dark")])

(def specialty->img {:biotic specialty-biotic
                     :cybernetic specialty-cybernetic
                     :propulsion specialty-propulsion
                     :warfare specialty-warfare})

(def wormhole-alpha [:img (image-props "wormhole-alpha" "30px")])
(def wormhole-beta [:img (image-props "wormhole-beta" "30px")])

(def wormhole->img {:alpha wormhole-alpha
                    :beta wormhole-beta})

(def legendary [:img (image-props "general/legendary-complete" "25px")])

(def resource [:img (image-props "general/resource-bg")])
(def influence [:img (image-props "general/influence-bg")])

(defn race [code]
  [:img (image-props (str "race/" (name code)))])
