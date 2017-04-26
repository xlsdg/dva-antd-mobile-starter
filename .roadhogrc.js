import pxtorem from 'postcss-pxtorem';

export default {
  'entry': 'src/index.js',
  'disableCSSModules': false,
  'publicPath': '/',
  'autoprefixer': {
    'browsers': [
      'iOS >= 8',
      'Android >= 4'
    ]
  },
  'proxy': null,
  'extraPostCSSPlugins': [
    pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  'extraBabelPlugins': [
    'transform-runtime',
    ['import', {
      'libraryName': 'antd-mobile',
      'style': true
    }]
  ],
  'env': {
    'development': {
      'extraBabelPlugins': [
        'dva-hmr'
      ]
    }
  }
};
