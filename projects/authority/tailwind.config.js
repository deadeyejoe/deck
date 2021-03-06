
function imgUrl() {
  process.env.NODE_ENV == 'production' ? "url('/galaxy.jpg')" :"url('/galaxy.jpg')"
}

module.exports = {
  mode: 'jit',
  purge: {
    // in prod look at shadow-cljs output file in dev look at runtime, which will change files that are actually compiled; postcss watch should be a whole lot faster
    content: process.env.NODE_ENV == 'production' ? ["./release/main.js"] : ["./public/assets/app/js/cljs-runtime/*.js"]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
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
      backgroundImage: theme => (
        {
          'galaxy': "url('/galaxy.jpg')"
        }
       )
    },
    variants: {},
  }
}