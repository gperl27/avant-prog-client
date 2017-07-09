import React from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const AppListItem = ({ title }) => {
  return (
    <ListItem button>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export { AppListItem as ListItem };

AppListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
