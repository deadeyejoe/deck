
function imgUrl() {
  process.env.NODE_ENV == 'production' ? "url('/galaxy.jpg')" :"url('/galaxy.jpg')"
}

module.exports = {
  mode: 'jit',
  content: process.env.NODE_ENV == 'production' ? ["./release/main.js"] : ["./public/assets/app/js/cljs-runtime/*.js"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '1/12': "8.333333%"
      },
      gridTemplateRows: {
         '8': 'repeat(8, minmax(0, 1fr))',
         '9': 'repeat(9, minmax(0, 1fr))',
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-9': 'span 9 / span 9',
      },
      fontSize: {
        'hueg': '10rem',
      },
      rotate: {
        "60": "60deg",
        "120": "120deg",
        "240": "240deg",
        "300": "300deg",
        "-60": "-60deg"
      },
      zIndex: {
        "basement": -1,
        "base": 0,
        "border": 1,
        "highlight" : 2,
        "menu": 3,
        "overlay" : 4,
        "app-overlay": 5,
        "tutorial": 6,
      }
    },
    variants: {
      extend: {
        zIndex: ["hover"]
      }
    },
  }
}
