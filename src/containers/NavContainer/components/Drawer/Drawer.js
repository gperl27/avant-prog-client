import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import { List } from '../../../../components';

class AppDrawer extends Component {
  render() {
    const { open, showNav, hideNav } = this.props;

    const listItemData = [{
      title: 'Test',
    }];

    return (
      <Drawer
        open={open}
        onRequestClose={hideNav}
        onClick={hideNav}
      >
        <List
          listItems={listItemData}
        />
      </Drawer>
    );
  }
}

export default AppDrawer;

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  showNav: PropTypes.func,
  hideNav: PropTypes.func,
}
