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
    const { sidebarIsShowing, showNav, hideNav } = this.props;

    return (
      <div style={styles.base}>
        <Drawer
          open={sidebarIsShowing}
          showNav={() => showNav()}
          hideNav={() => hideNav()}
        />
        <AppBar
          clickIcon={() => showNav()}
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
