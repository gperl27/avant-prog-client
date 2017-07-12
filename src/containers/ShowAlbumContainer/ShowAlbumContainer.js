import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, {
  ListItem,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';

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
  chipRow: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: '2px',
  },
  likeButton: {
    position: 'absolute',
    left: '5px',
    top: '5px',
    color: 'pink',
  },
  cardMediaContainer: {
    position: 'relative',
  },
};

const ShowAlbumContainer = (props) => {
  return (
    <Grid container justify="center" gutter={24}>
      <Grid item md={4} xs={12}>
        <Card>
          <CardMedia style={styles.cardMediaContainer}>
            <img style={styles.img} src={tempImgSrc} alt="tempImgSrc" />
            <IconButton style={styles.likeButton} aria-label="Like">
              <FavoriteBorderIcon />
            </IconButton>
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
        <Grid container>
          <Grid item xs={12}>
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
          <Grid item md={6} xs={12}>
            <Paper style={styles.paper}>
              <Typography type="display1">
                877 Likes
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={6} xs={12}>
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

ShowAlbumContainer.propTypes = {
  ShowAlbumContainerProps: PropTypes.obj
};

export default ShowAlbumContainer;
