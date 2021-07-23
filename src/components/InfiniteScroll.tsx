import React from 'react';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

type Props = {
    hasMore: boolean;
    isLoading: boolean;
    onLoadMore: () => void;
    loader: () => React.ReactNode;
};

const InfiniteScroll: React.FC<Props> = ({ hasMore, isLoading, onLoadMore, loader, children }) => {

    const ref = useInfiniteScroll(hasMore, isLoading, onLoadMore);

    return (
        <div>
            {children}
            <div ref={ref}>{loader()}</div>
        </div>
    );
};

export default InfiniteScroll;