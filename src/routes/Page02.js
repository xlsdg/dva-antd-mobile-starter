import React, {PropTypes} from 'react';
import {connect} from 'dva';

import Main from '../components/Layout/Main';

import styles from './Page02.less';

function Page02({location}) {
  return (
    <Main location={location}>
      <div className={styles.normal}>
        Route Component: Page02
      </div>
    </Main>
  );
}

Page02.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page02);
