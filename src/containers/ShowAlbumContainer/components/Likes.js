import React from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = {
  paper: {
    padding: '25px',
  },
};

const Likes = (props) => {
  return (
    <Paper style={styles.paper}>
      <Typography type="display1">
        877 Likes
      </Typography>
    </Paper>
  );
};

export default Likes;
