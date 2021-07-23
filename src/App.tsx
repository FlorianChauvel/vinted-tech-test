import React, { useState } from 'react';
import InfiniteScroll from './components/InfiniteScroll';
import usePictures from './hooks/usePictures';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pictures, hasMore, isLoading } = usePictures(currentPage);

  const handleLoadMore = () => {
    setCurrentPage(current => current + 1);
  };

  const images = pictures.map(picture => <img key={picture.id} src={picture.url_l} alt={picture.title} />);

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
