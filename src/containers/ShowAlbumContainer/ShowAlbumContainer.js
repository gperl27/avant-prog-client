import React from 'react';
import Grid from 'material-ui/Grid';

import InfoCard from './components/InfoCard';
import Tracks from './components/Tracks';
import Likes from './components/Likes';
import Tags from './components/Tags';

const ShowAlbumContainer = (props) => {
  return (
    <Grid container justify="center" gutter={24}>
      <Grid item md={4} xs={12}>
        <InfoCard />
      </Grid>
      <Grid item md={8} xs={12}>
        <Grid container>
          <Grid item xs={12}>
            <Tracks />
          </Grid>
          <Grid item md={6} xs={12}>
            <Likes />
          </Grid>
          <Grid item md={6} xs={12}>
            <Tags />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowAlbumContainer;
