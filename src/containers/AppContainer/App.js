import React from 'react';

import Grid from 'material-ui/Grid';

import NavContainer from '../NavContainer/NavContainer';

const App = () =>
  (
    <Grid container>
      <Grid item xs={12}>
        <NavContainer />
      </Grid>
    </Grid>
  );

export default App;
