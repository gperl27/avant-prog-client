import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Radium from 'radium';

import styles from './AppBarStyles';

const NavAppBar = ({ title, buttonText, clickIcon }) =>
  (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={clickIcon} color="contrast" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit" style={styles.flex}>
          {title}
        </Typography>
        <Button color="contrast">{buttonText}</Button>
      </Toolbar>
    </AppBar>
  );

export default Radium(NavAppBar);

NavAppBar.propTypes = {
  clickIcon: PropTypes.func,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
