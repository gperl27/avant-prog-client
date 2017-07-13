import React from 'react';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';

const styles = {
  paper: {
    padding: '25px',
  },
  noFlex: {
    flex: 'none',
  },
};

const Tracks = (props) => {
  return (
    <Paper style={styles.paper} elevation={4}>
      <List subheader={<ListSubheader>Tracks - 1hr 34 min</ListSubheader>}>
        <ListItem button>
          <ListItemText
            style={styles.noFlex}
            primary="1"
          />
          <ListItemText
            primary="Single-line item"
            secondary="3:34"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            style={styles.noFlex}
            primary="2"
          />
          <ListItemText
            primary="Single-line item"
            secondary="1:44"
          />
        </ListItem>
        <ListItem button>
          <ListItemText
            style={styles.noFlex}
            primary="3"
          />
          <ListItemText
            primary="Single-line item"
            secondary="3:34"
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default Tracks;
