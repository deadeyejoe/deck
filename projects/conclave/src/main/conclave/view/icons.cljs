(ns conclave.view.icons)

(defn image-props
  ([filename] (image-props filename "20px"))
  ([filename size]
   {:src (str "images/" filename ".png")
    :height size
    :width size}))

(def trait-cultural [:img (image-props "trait-cultural")])
(def trait-hazardous [:img (image-props "trait-hazardous")])
(def trait-industrial [:img (image-props "trait-industrial")])

(def trait->img {:cultural trait-cultural
                 :hazardous trait-hazardous
                 :industrial trait-industrial})

(def specialty-biotic [:img (image-props "specialty-biotic")])
(def specialty-cybernetic [:img (image-props "specialty-cybernetic")])
(def specialty-propulsion [:img (image-props "specialty-propulsion")])
(def specialty-warfare [:img (image-props "specialty-warfare")])

(def specialty->img {:biotic specialty-biotic
                     :cybernetic specialty-cybernetic
                     :propulsion specialty-propulsion
                     :warfare specialty-warfare})

(def wormhole-alpha [:img (image-props "wormhole-alpha" "30px")])
(def wormhole-beta [:img (image-props "wormhole-beta" "30px")])

(def wormhole->img {:alpha wormhole-alpha
                    :beta wormhole-beta})

(def legendary [:img (image-props "legendary" "25px")])
