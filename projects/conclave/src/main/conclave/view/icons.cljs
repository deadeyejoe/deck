(ns conclave.view.icons)

(defn image-props
  ([filename] (image-props filename "20px"))
  ([filename size]
   {:src (str "images/" filename ".png")
    :height size
    :width size}))

(defn cultural [size] [:img (image-props "general/trait-cultural" size)])
(defn hazardous [size] [:img (image-props "general/trait-hazardous" size)])
(defn industrial [size] [:img (image-props "general/trait-industrial" size)])
(def trait->img {:cultural   [cultural   "20px"]
                 :hazardous  [hazardous  "20px"]
                 :industrial [industrial "20px"]})

(defn biotic     [size] [:img (image-props "general/specialty-biotic-dark" size)])
(defn cybernetic [size] [:img (image-props "general/specialty-cybernetic-dark" size)])
(defn propulsion [size] [:img (image-props "general/specialty-propulsion-dark" size)])
(defn warfare    [size] [:img (image-props "general/specialty-warfare-dark" size)])
(def specialty->img {:biotic [biotic "20px"]
                     :cybernetic [cybernetic "20px"]
                     :propulsion [propulsion "20px"]
                     :warfare [warfare "20px"]})

(defn alpha [size] [:img (image-props "wormhole-alpha" size)])
(def wormhole-alpha [alpha "30px"])

(defn beta [size] [:img (image-props "wormhole-beta" size)])
(def wormhole-beta [beta "30px"])

(def wormhole->img {:alpha wormhole-alpha
                    :beta wormhole-beta})

(defn legendary* [size]
  [:img (image-props "general/legendary-complete" size)])
(def legendary [legendary* "25px"])

(defn resource* [size]
  [:img (image-props "general/resource-bg" size)])
(def resource  [resource* "20px"])

(defn influence* [size]
  [:img (image-props "general/influence-bg" size)])
(def influence [influence* "20px"])

(defn frontier* [size]
  [:img (image-props "general/frontier" size)])
(def frontier  [frontier* "20px"])

(defn race [code]
  [:img (image-props (str "race/" (name code)))])

(def green-tile
  [:img (image-props "tile/ST_0" "35px")])
(def blue-tile
  [:img (image-props "tile/ST_18_Back" "35px")])
(def red-tile
  [:img (image-props "tile/ST_39_Back" "35px")])
(def grey-tile
  [:img (merge (image-props "tile/ST_18_Back" "35px") {:class ["grayscale"]})])
