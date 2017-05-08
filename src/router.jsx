import React from 'react';
import PropTypes from 'prop-types';
import {
  Router, Route
} from 'dva/router';

import Main from './components/layout/main.jsx';

import Index from './routes/index.jsx';
import Page01 from './routes/page01.jsx';
import Page02 from './routes/page02.jsx';
import Page03 from './routes/page03.jsx';

function RouterConfig({
  history
}) {
  return (
    <Router history={history}>
      <Route component={Main}>
        <Route path="/" component={Index} />
        <Route path="/page01" component={Page01} />
        <Route path="/page02" component={Page02} />
        <Route path="/page03" component={Page03} />
      </Route>
    </Router>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object.isRequired
};

export default RouterConfig;
