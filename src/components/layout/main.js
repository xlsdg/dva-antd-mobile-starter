import React, {PropTypes} from 'react';

import Header from './header.js';
import Footer from './footer.js';

import styles from './main.less';

function Main({children, location}) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <Footer location={location} childrens={children} />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
