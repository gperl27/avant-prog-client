import React from 'react';
import PropTypes from 'prop-types';

import List from 'material-ui/List';

const AppList = (props) => {
  return (
    <List>
      {props.children}
    </List>
  );
};

export { AppList as List };
