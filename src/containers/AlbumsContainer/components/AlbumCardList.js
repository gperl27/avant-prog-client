import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import AlbumCard from './AlbumCard';

const renderGrids = (albums) => {
  return albums.map((album) => {
    return (
      <AlbumCard key={album} album={album} />
    );
  });
};

const AlbumCardList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <Grid container justify="center" gutter={24}>
        {renderGrids(props.albums)}
      </Grid>
    </div>
  );
};

AlbumCardList.propTypes = {
  title: PropTypes.string.isRequired,
  albums: PropTypes.object.isRequired,
};

export default AlbumCardList;
