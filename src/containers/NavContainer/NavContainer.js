import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import AppBar from './components/AppBar/AppBar';
import Drawer from './components/Drawer/Drawer';

import styles from './NavContainerStyles';

class NavContainer extends Component {
  render() {
    return (
      <div style={styles.base}>
        <Drawer />
        <AppBar
          title="Avant Prog"
          buttonText="Login"
        />
      </div>
    );
  }
}

export default Radium(NavContainer);

NavContainer.PropTypes = {
  styles: PropTypes.obj,
};
