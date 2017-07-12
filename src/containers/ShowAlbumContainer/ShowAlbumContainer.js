import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, {
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction
} from 'material-ui/List';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const tempImgSrc = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dsotm30.jpg/220px-Dsotm30.jpg';

const styles = {
  divider: {
    marginBottom: '15px',
    marginTop: '15px',
  },
  paper: {
    padding: '25px',
  },
  img: {
    width: '100%',
  },
  noFlex: {
    flex: 'none',
  },
};

const ShowAlbumContainer = (props) => {
  return (
    <Grid container justify="center" gutter={24}>
      <Grid item md={4} xs={12}>
        <Card>
          <CardMedia>
            <img style={styles.img} src={tempImgSrc} alt="tempImgSrc" />
          </CardMedia>
          <CardContent>
            <Typography type="headline" component="h3">
              Dark Side of the Moon
            </Typography>
            <Typography type="subheading">
              Pink Floyd
            </Typography>
            <Divider style={styles.divider} />
            <Typography component="p">
              The Dark Side of the Moon is the eighth album by English rock band Pink Floyd, released on 1 March 1973 by Harvest Records.
            </Typography>
            <Divider style={styles.divider} />
            <Typography type="subheading">
              Release: 1973
            </Typography>
            <Typography type="subheading">
              Genre: Psychedelic/Space Rock
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item md={8} xs={12}>
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
      </Grid>
    </Grid>
  );
};

ShowAlbumContainer.propTypes = {
  ShowAlbumContainerProps: PropTypes.obj
};

export default ShowAlbumContainer;
