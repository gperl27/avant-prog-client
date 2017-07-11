import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import FavoriteBorderIcon from 'material-ui-icons/FavoriteBorder';
import CommentIcon from 'material-ui-icons/Comment';
import BottomNavigation, { BottomNavigationButton } from 'material-ui/BottomNavigation';
import IconButton from 'material-ui/IconButton';

const tempImgSrc = 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Dsotm30.jpg/220px-Dsotm30.jpg';

const styles = {
  card: {
    // minWidth: 250,
    // minHeight: 250,
  },
  img: {
    width: '100%',
  },
  // action: {
  //   textAlign: 'center',
  //   display: 'inherit',
  // },
};

const AlbumCard = (props) => {
  const avatar = <Avatar>32</Avatar>;

  const CommentBtn = (
    <Link to={`album/${props.album}`}>
      <CommentIcon />
    </Link>
  );

  return (
    <Grid item>
      <Card style={styles.card}>
        <CardHeader
          avatar={avatar}
          title='Dark Side of the Moon'
          subheader="Pink Floyd - 1973"
        />
        <CardMedia>
          <img style={styles.img} src={tempImgSrc} alt="tempImgSrc" />
        </CardMedia>
        <CardContent>
          <CardActions>
            <BottomNavigation showLabels>
              <BottomNavigationButton label="Like" icon={<FavoriteBorderIcon />} />
              <BottomNavigationButton label="Discuss" icon={CommentBtn} />
            </BottomNavigation>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AlbumCard;
