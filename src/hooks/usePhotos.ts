import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/fetchPhotos";
import { Photo } from "../types/Photo";

const usePhotos = (currentPage: number) => {
    const [data, setData] = useState<{ photos: Photo[], pagesCount: number }>({
        photos: [],
        pagesCount: 0,
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (page: number) => {
            setIsLoading(true);
            const json = await fetchPhotos(page);
            setData(data => ({
                pagesCount: json.photos.pages,
                photos: data.photos.concat(json.photos.photo),
            }));
            setIsLoading(false);
        };

        fetchData(currentPage);
    }, [currentPage]);

    return {
        isLoading,
        hasMore: currentPage < data.pagesCount,
        photos: data.photos,
    };
};

export default usePhotos;