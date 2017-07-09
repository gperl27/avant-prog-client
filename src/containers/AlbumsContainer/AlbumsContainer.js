import React from 'react';

import AlbumCardList from './components/AlbumCardList';

const AlbumsContainer = props => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <AlbumCardList title="Test" albums={arr} />
      <AlbumCardList title="Test 2" albums={arr} />
      <AlbumCardList title="Test 3" albums={arr} />
      <AlbumCardList title="Test 4" albums={arr} />
    </div>
  );
};


export default AlbumsContainer;
