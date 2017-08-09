const Webpack = require('webpack');

module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: './src/index.js',
      common: ['react', 'react-dom']
    };
    config.plugins.push(new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
  }
  return config;
};
