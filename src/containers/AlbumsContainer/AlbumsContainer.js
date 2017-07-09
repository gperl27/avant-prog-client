import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
    minHeight: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}

function renderGrids() {
  const arr = [1, 2, 3, 4, 5, 6, 7];

  return arr.map((x) => {
    return (
      <Grid item key={x}>
        <Card style={styles.card}>
          <CardContent>
            <Typography type="body1">
              {x}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });
}

const AlbumsContainer = props => {
  return (
    <Grid container justify="center" gutter={24}>
      {renderGrids()}
    </Grid>
  )
};


export default AlbumsContainer;
