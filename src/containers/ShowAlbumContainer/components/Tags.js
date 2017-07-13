import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Chip from 'material-ui/Chip';

const styles = {
  chipRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: '2px',
  },
  paper: {
    padding: '25px',
  },
};

const Tags = (props) => {
  return (
    <Paper style={styles.paper}>
      <Typography type="subheading">
        Popular Tags
      </Typography>
      <div style={styles.chipRow}>
        <Chip style={styles.chip} label="Basic Chip" />
        <Chip style={styles.chip} label="Basic 2" />
        <Chip style={styles.chip} label="Basic 3" />
        <Chip style={styles.chip} label="Basic 4" />
      </div>
    </Paper>
  );
};

export default Tags;
