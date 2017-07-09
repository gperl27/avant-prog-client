import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';

class AppDrawer extends Component {
  state = {
    open: {
      left: false,
    }
  }

  toggleDrawer = (side, open) => {
    const drawerState = {};
    drawerState[side] = open;
    this.setState({ open: drawerState });
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);

  render() {
    return (
      <Drawer
        open={this.state.open.left}
        onRequestClose={this.handleLeftClose}
        onClick={this.handleLeftClose}
      >
        test
      </Drawer>
    );
  }
}

export default AppDrawer;

// AppDrawer.propTypes = {
// };
