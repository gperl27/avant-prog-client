import React from 'react';
import Typography from 'material-ui/Typography';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';

const tempImgSrc = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dsotm30.jpg/220px-Dsotm30.jpg';

const styles = {
  divider: {
    marginBottom: '15px',
    marginTop: '15px',
  },
  img: {
    width: '100%',
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

const InfoCard = (props) => {
  return (
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
  );
};

export default InfoCard;
