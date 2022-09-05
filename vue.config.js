const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: chain => {
    chain.plugin('SVGSpritemapPlugin').use(require('svg-spritemap-webpack-plugin'), [
      './src/assets/icons/**/*.svg',
      {
        output: {
          filename: './sprite.svg',
          svg4everybody: true,
          svgo: {
            removeTitle: true,
            removeStyleElement: true,
            cleanupNumericValue: true,
          },
        },
        sprite: {
          prefix: false,
        },
      }
    ])
  }
})
