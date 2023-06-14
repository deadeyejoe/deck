function imgUrl() {
  process.env.NODE_ENV == "production"
    ? "url('/galaxy.jpg')"
    : "url('/galaxy.jpg')";
}

module.exports = {
  mode: "jit",
  content:
    process.env.NODE_ENV == "production"
      ? ["./release/main.js"]
      : ["./public/assets/app/js/cljs-runtime/codex*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-9": "span 9 / span 9",
      },
      fontSize: {
        hueg: "10rem",
      },
    },
    variants: {},
  },
};
