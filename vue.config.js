module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    performance: {
      maxAssetSize: 5000000,
      maxEntrypointSize: 7000000,
    }
  } 
}