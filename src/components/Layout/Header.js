import React, {PropTypes} from 'react';
import {NavBar, Icon} from 'antd-mobile';

import styles from './Header.less';

function Header({location}) {
  return (
    <div className={styles.normal}>
      <NavBar
        leftContent="返回"
        mode="light"
        onLeftClick={() => console.log('onLeftClick')}
        rightContent={[<Icon key="0" type="search" />, <Icon key="1" type="ellipsis" />]}
      >
        首页
      </NavBar>
    </div>
  );
}

Header.propTypes = {
  location: PropTypes.object.isRequired
};

export default Header;
