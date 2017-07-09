import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';
import { ListItem } from './ListItem';


function renderListItems(listItems) {
  return listItems.map((listItem) => {
    return <ListItem key={listItem.title} title={listItem.title} />
  });
}


const AppList = ({ listItems }) => {
  return (
    <List>
      {renderListItems(listItems)}
    </List>
  );
};

export { AppList as List };
