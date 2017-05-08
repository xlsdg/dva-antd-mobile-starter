import React from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'dva';

import styles from './page03.less';

function Page03({
  location
}) {
  return (
    <div className={styles.normal}>
      Route Component: Page03
    </div>
  );
}

Page03.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page03);
