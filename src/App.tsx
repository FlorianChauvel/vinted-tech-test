import React, { useState } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import usePhotos from './hooks/usePhotos';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { photos, hasMore, isLoading } = usePhotos(currentPage);

  const handleLoadMore = () => {
    setCurrentPage(current => current + 1);
  };

  const images = photos.map(photo => <img key={photo.id} src={photo.url_l} alt={photo.title} />);

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
