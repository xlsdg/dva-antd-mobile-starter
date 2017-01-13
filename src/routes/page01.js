import React, {PropTypes} from 'react';
import {connect} from 'dva';

import Main from '../components/layout/main';

import styles from './page01.less';

function Page01({location}) {
  return (
    <Main location={location}>
      <div className={styles.normal}>
        Route Component: Page01
      </div>
    </Main>
  );
}

Page01.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page01);
