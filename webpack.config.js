module.exports = function(config, env) {
  if (env === 'production') {
    config.entry = {
      index: './src/index.js',
      common: ['react', 'react-dom']
    };
  }
  return config;
};
