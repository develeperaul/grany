const { defineConfig } = require('@vue/cli-service');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: chain => {
    chain
      .plugin('html')
      .tap(args => {
        args[0].title = 'Черника паркинг';
        return args;
      });

    chain
      .plugin('SVGSpritemapPlugin')
      .use(
        require('svg-spritemap-webpack-plugin'),
        [
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
        ]
      );

    chain.plugin('copy').tap(args => {
      delete args[0].patterns[0].info
      return args;
    });

    const imageminOpts = {
      plugins: [
        ["mozjpeg", { quality: 60 }],
        ["pngquant", { quality: [0.5, 0.8] }],
      ],
    };

    chain.optimization
    .minimizer('imagemin')
    .use(ImageMinimizerPlugin, [
        {
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: imageminOpts
          },
          generator: [
            {
              type: "asset",
              implementation: ImageMinimizerPlugin.imageminGenerate,
              options: imageminOpts
            },
          ],
          loader: false,
        },
      ]
    );
  }
})
