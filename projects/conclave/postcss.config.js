
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ] 
    // cssnano: process.env.NODE_ENV == 'production' ? {} : false
}