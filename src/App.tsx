import React, { useState } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import PhotoDisplay from './components/PhotoDisplay';
import usePersistedState from './hooks/usePersistedState';
import usePhotos from './hooks/usePhotos';

const getIsFavourite = (photoId: string, favourites: string[]) => favourites.includes(photoId);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [favourites, setFavourites] = usePersistedState<string[]>([], 'favourites');

  const { photos, hasMore, isLoading } = usePhotos(currentPage);

  const handleLoadMore = () => {
    setCurrentPage(current => current + 1);
  };

  const handleFavour = (favouriteId: string) => {
    setFavourites(current => current.concat(favouriteId));
  };

  const handleUnfavour = (unfavouriteId: string) => {
    setFavourites(current => current.filter(favourite => favourite !== unfavouriteId));
  };

  const images = photos.map(photo => (
    <PhotoDisplay
      key={photo.id}
      photo={photo}
      isFavourite={getIsFavourite(photo.id, favourites)}
      onFavour={handleFavour}
      onUnfavour={handleUnfavour}
    />
  ));

  return (
    <div>
      <InfiniteScroll
        onLoadMore={handleLoadMore}
        loader={() => <>Loading...</>}
        isLoading={isLoading}
        hasMore={hasMore}
      >
        {images}
      </InfiniteScroll>
    </div>
  );
};

export default App;
