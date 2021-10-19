(ns conclave.view.icons)

(defn image-props [filename]
  {:src (str "images/" filename ".png")
   :height "20px"
   :width "20px"})

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

