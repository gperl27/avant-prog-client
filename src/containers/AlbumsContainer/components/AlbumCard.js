import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    minWidth: 275,
    minHeight: 275,
  },
};

const AlbumCard = props => {
  return (
    <Grid item>
      <Card style={styles.card}>
        <CardContent>
          <Typography type="body1">
            {props.album}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AlbumCard;
