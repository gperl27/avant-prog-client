import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemText } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router-dom';

import styles from './DrawerStyles';

class AppDrawer extends Component {
  render() {
    const { open, showNav, hideNav } = this.props;

    return (
      <Drawer
        open={open}
        onRequestClose={hideNav}
        onClick={hideNav}
      >
        <TextField
          marginForm
        />
        <List style={styles.list}>
          <Link to="/">
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link to="/albums">
            <ListItem button>
              <ListItemText primary="Albums" />
            </ListItem>
          </Link>
          <Link to="artists">
            <ListItem button>
              <ListItemText primary="Artists" />
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemText primary="Contribute" />
          </ListItem>
        </List>
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
