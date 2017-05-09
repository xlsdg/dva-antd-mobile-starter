import 'babel-polyfill';
import dva from 'dva';
import Loading from 'dva-loading';

import './index.less';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(Loading({
  namespace: 'loading'
  // effects: enable effects level loading state
}));

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router.jsx'));

// 5. Start
app.start('#root');
