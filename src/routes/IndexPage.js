import React from 'react';
import { connect } from 'dva';

import { Link } from 'dva/router';
import RoutePage from './AuthRoutePage';

import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><Link to="/PublicPage">PublicPage，公共页面</Link></li>
        <li><Link to="/RoutePage">RoutePage，需授权访问</Link></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
