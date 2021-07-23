import { useCallback } from "react";
import { useEffect, useRef } from "react";

/**
 * Helper hook that implements infinite scroll behavior
 * @param hasMore has more results, prevents callback if false
 * @param isLoading is loading results, prevents callback if true
 * @param onLoadMore callback triggered when ref element becomes visible
 * @returns ref to pass to the element that triggers onLoadMore when becomes visible
 */
const useInfiniteScroll = (hasMore: boolean, isLoading: boolean, onLoadMore: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    const observeCallback = useCallback(() => {
        if (!hasMore || isLoading) {
            return;
        }

        onLoadMore();
    }, [hasMore, isLoading]);

    useEffect(() => {
        const { current } = ref;
        const observer = new IntersectionObserver(observeCallback);

        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        }
    }, [ref, observeCallback]);

    return ref;
};

export default useInfiniteScroll;