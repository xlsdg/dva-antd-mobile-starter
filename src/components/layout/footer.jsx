import React from 'react';
import PropTypes from 'prop-types';
import {
  TabBar
} from 'antd-mobile';
import {
  connect
} from 'dva';
import {
  routerRedux
} from 'dva/router';

import styles from './footer.less';

function Footer({
  dispatch, childrens, location
}) {
  return (
    <div className={styles.normal}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={false}
      >
        <TabBar.Item
          title="生活"
          key="生活"
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png'}}
          selected={location.pathname === '/'}
          badge={1}
          onPress={() => dispatch(routerRedux.push('/'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="口碑"
          key="口碑"
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/UNQhIatjpNZHjVf.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/HLkBvJOKnmOfBPO.png'}}
          selected={location.pathname === '/page01'}
          onPress={() => dispatch(routerRedux.push('/page01'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="朋友"
          key="朋友"
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/WdEuTLJOVzeABZlKYLmJ.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/sRkvMgIGXERtyRVyAsXP.png'}}
          selected={location.pathname === '/page02'}
          onPress={() => dispatch(routerRedux.push('/page02'))}
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="我的"
          icon={{uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png'}}
          selectedIcon={{uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png'}}
          selected={location.pathname === '/page03'}
          onPress={() => dispatch(routerRedux.push('/page03'))}
        >
          {childrens}
        </TabBar.Item>
      </TabBar>
    </div>
  );
}

Footer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  childrens: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Footer);
