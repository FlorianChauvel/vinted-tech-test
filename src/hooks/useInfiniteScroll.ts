import { useEffect, useRef, useCallback } from "react";

/**
 * Helper hook that implements infinite scroll behavior
 * @param hasMore has more results, prevents callback if false
 * @param isLoading is loading results, prevents callback if true
 * @param onLoadMore callback triggered when ref element becomes visible
 * @returns ref to pass to the element that triggers onLoadMore when becomes visible
 */
const useInfiniteScroll = (hasMore: boolean, isLoading: boolean, onLoadMore: () => void) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver>(null) as React.MutableRefObject<IntersectionObserver>;
    const shouldLoadMore = hasMore && !isLoading;

    const observeCallback = useCallback(([{ isIntersecting }]) => {
        if (!shouldLoadMore || !isIntersecting) {
            return;
        }

        onLoadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldLoadMore]);

    useEffect(() => {
        const node = triggerRef.current;
        if (node) {
            const observer = new IntersectionObserver(observeCallback, {
                rootMargin: '1500px',
            });
            observer.observe(node);
            observerRef.current = observer;
        }

        return () => {
            if (node) {
                observerRef.current.unobserve(node);
            }
        }
    }, [observeCallback]);

    return triggerRef;
};

export default useInfiniteScroll;