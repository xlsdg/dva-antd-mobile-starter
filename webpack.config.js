const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(config, env) {
  config.module.loaders[0].exclude.push(/\.ejs$/);    // 注 1
  if (env === 'production') {
    config.entry = {
      index: './src/index.js',
      common: ['react', 'react-dom']
    };
    config.output.filename = '[name].[chunkhash].js';
    config.output.chunkFilename = '[chunkhash].async.js';
    config.plugins[3] = new ExtractTextPlugin('[contenthash:20].css');    // 注 2
    for (let plugin, i = 0, l = config.plugins.length; i < l; i++) {
      plugin = config.plugins[i];
      if (plugin instanceof Webpack.optimize.CommonsChunkPlugin) {
        config.plugins[i] = new Webpack.optimize.CommonsChunkPlugin({
          name: 'common',
          filename: 'common.[chunkhash].js',
          minChunks: 2
        });
        break;
      }
    }
    config.plugins.push(new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    // config.plugins.push(new BundleAnalyzerPlugin());
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',    // 注 3
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: false
        },
        production: true,
      }),
      new WebpackChunkHash({
        algorithm: 'md5'
      })
    );
  } else {
    config.plugins.push(
      new HtmlWebpackPlugin({
        template: 'ejs!src/index.ejs',
        inject: true,
      })
    );
  }
  return config;
};
