
module.exports = {
  //parser: 'sugarss',
  plugins: [
    require('postcss-clip-path-polyfill')(),
    require('autoprefixer')()
  ]
}