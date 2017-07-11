import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Grid from 'material-ui/Grid';

import MainPageContainer from '../MainPageContainer/MainPageContainer';
import AlbumsContainer from '../AlbumsContainer/AlbumsContainer';
import ShowAlbumContainer from '../ShowAlbumContainer/ShowAlbumContainer';
import ArtistsContainer from '../ArtistsContainer/ArtistsContainer';

import NavContainer from '../NavContainer/NavContainer';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const App = (props) => {
  return (
    <Router>
      <Grid container justify="center" style={styles.root}>
        <Grid item xs={12}>
          <NavContainer />
        </Grid>
        <Grid item xs={8}>
          <Route exact path="/" component={MainPageContainer} />
          <Route path="/albums" component={AlbumsContainer} />
          <Route path="/album/:id" component={ShowAlbumContainer} />
          <Route path="/artists" component={ArtistsContainer} />
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
