import React, { useState } from 'react';
import Block from './components/Block';
import InfiniteScroll from './components/InfiniteScroll';

const App: React.FC = () => {
  const [step, setStep] = useState(10);

  const handleLoadMore = () => {
    setStep(current => current + 10);
  };

  const blocks = Array(step).fill(<Block />);

  return (
    <div>
      <InfiniteScroll
        onLoadMore={handleLoadMore}
        loader={() => <>Loading...</>}
        isLoading={false}
        hasMore
      >
        {blocks}
      </InfiniteScroll>
    </div>
  );
};

export default App;
