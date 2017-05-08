const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = function(config, env) {
  config.module.loaders[0].exclude.push(/\.ejs$/);    // 注 1
  if (env === 'production') {
    config.output.filename = '[name].[chunkhash].js';
    config.output.chunkFilename = '[chunkhash].async.js';
    config.plugins[3] = new ExtractTextPlugin('[contenthash:20].css');    // 注 2
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',    // 注 3
        inject: false,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false
        },
        production: true
      }),
      new WebpackMd5Hash()
    );
  } else {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',
        inject: true
      }),
    );
  }
  return config;
};
