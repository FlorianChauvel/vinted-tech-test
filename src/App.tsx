import React, { useState } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import PhotoGrid from './components/PhotoGrid';
import Loader from './components/Loader';
import usePersistedState from './hooks/usePersistedState';
import usePhotos from './hooks/usePhotos';

import './App.css';
import SplashScreen from './components/SplashScreen';


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

  return (
    <div className="main">
      {currentPage === 1 && isLoading && <SplashScreen />}
      <InfiniteScroll
        onLoadMore={handleLoadMore}
        loader={() => <Loader />}
        isLoading={isLoading}
        hasMore={hasMore}
      >
        <PhotoGrid photos={photos} favourites={favourites} onFavour={handleFavour} onUnfavour={handleUnfavour} />
      </InfiniteScroll>
    </div>
  );
};

export default App;
