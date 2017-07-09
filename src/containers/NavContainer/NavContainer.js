import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropTypes from 'prop-types';
import Radium from 'radium';

import AppBar from './components/AppBar/AppBar';
import Drawer from './components/Drawer/Drawer';

import styles from './NavContainerStyles';

class NavContainer extends Component {
  render() {
    console.log(this.props, 'NAV CONTAINER');

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

const mapStateToProps = state => ({
  sidebarIsShowing: state.interface.sidebarIsShowing,
});

export default connect(mapStateToProps, actions)(Radium(NavContainer));
