import 'babel-polyfill';
import dva from 'dva';

import './index.less';

// 1. Initialize
const app = dva({
  onError(err, dispatch) {
    console.error(err);
  }
});

// 2. Plugins
// app.use();

// 3. Model
// Moved to router.js

// 4. Router
app.router(require('./router.jsx'));

// 5. Start
app.start('#root');
