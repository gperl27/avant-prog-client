import React from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

const AppListItem = (props) => {
  return (
    <ListItem button>
      {props.chidlren}
    </ListItem>
  );
};

export { AppListItem as ListItem };
