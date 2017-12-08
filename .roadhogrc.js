// import Path from 'path';
import PxToRem from 'postcss-pxtorem';

export default {
  hash: true,
  entry: 'src/index.js',
  disableCSSModules: false,
  ignoreMomentLocale: true,
  autoprefixer: {
    browsers: [
      'iOS >= 8',
      'Android >= 4'
    ]
  },
  define: {
    'process.env.NODE_ENV': (process.env.NODE_ENV === 'production') ? 'production' : 'development'
  },
  // svgSpriteLoaderDirs: [
  //   require.resolve('antd-mobile').replace(/warn\.js$/, '') // antd-mobile 内置svg
  //   // path.resolve(__dirname, 'src/my-project-svg-foler') // 业务代码本地私有 svg 存放目录
  // ],
  // extraPostCSSPlugins: [
  //   PxToRem({
  //     rootValue: 100,
  //     propWhiteList: [],
  //   }),
  // ],
  extraBabelPlugins: [
    'transform-runtime',
    ['import', {
      libraryName: 'antd-mobile',
      style: true
    }]
  ],
  env: {
    production: {
      multipage: true,
      publicPath: '/dva-antd-mobile-starter/'
    },
    development: {
      multipage: false,
      publicPath: '/',
      extraBabelPlugins: [
        'dva-hmr'
      ]
    }
  }
};
