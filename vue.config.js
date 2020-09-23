module.exports = {
  chainWebpack: config => {

    // or:
    // modify its options:
    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  },
  configureWebpack: {
    externals: {
      vue: "Vue"
    },
    output: {
      filename: 'vue-tooltip-lite.js',
      chunkFilename: 'vue-tooltip-lite.chunk.js',
    }
  },
  css: {
    extract: {
      filename: 'vue-tooltip-lite.css',
      chunkFilename: 'vue-tooltip-lite.chunk.css',
    },
  }
};
