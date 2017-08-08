const Webpack = require('webpack');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: './src/index.js',
      common: ['react', 'react-dom']
    };
    config.plugins.push(new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    // config.plugins.push(new BundleAnalyzerPlugin());
  }
  return config;
};
