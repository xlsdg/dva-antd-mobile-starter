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
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={location.pathname === '/'}
          badge={1}
          onPress={() => dispatch(routerRedux.push('/'))}
          data-seed="shenghuo"
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="口碑"
          key="口碑"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={location.pathname === '/page01'}
          onPress={() => dispatch(routerRedux.push('/page01'))}
          data-seed="koubei"
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="朋友"
          key="朋友"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={location.pathname === '/page02'}
          onPress={() => dispatch(routerRedux.push('/page02'))}
          dot
          data-seed="pengyou"
        >
          {childrens}
        </TabBar.Item>
        <TabBar.Item
          title="我的"
          key="我的"
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selected={location.pathname === '/page03'}
          onPress={() => dispatch(routerRedux.push('/page03'))}
          data-seed="wode"
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
