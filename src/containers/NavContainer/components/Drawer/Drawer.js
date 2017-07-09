import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';

class AppDrawer extends Component {
  render() {
    const { open, showNav, hideNav } = this.props;

    console.log(open, 'appdrawer');

    return (
      <Drawer
        open={open}
        onRequestClose={hideNav}
        onClick={hideNav}
      >
        test
      </Drawer>
    );
  }
}

export default AppDrawer;

// AppDrawer.propTypes = {
// };
