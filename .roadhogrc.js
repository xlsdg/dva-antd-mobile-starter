// import Path from 'path';
import PxToRem from 'postcss-pxtorem';

export default {
  entry: 'src/index.js',
  multipage: true,
  disableCSSModules: false,
  publicPath: '/',
  autoprefixer: {
    browsers: [
      'iOS >= 8',
      'Android >= 4'
    ]
  },
  proxy: null,
  svgSpriteLoaderDirs: [
    require.resolve('antd-mobile').replace(/warn\.js$/, '') // antd-mobile 内置svg
    // path.resolve(__dirname, 'src/my-project-svg-foler') // 业务代码本地私有 svg 存放目录
  ],
  extraPostCSSPlugins: [
    PxToRem({
      rootValue: 100,
      propWhiteList: [],
    }),
  ],
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd-mobile',
      style: true
    }]
  ],
  env: {
    production: {
      publicPath: '/dva-antd-mobile-starter/'
    },
    development: {
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};
