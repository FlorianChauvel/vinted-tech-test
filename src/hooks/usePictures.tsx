import { useEffect, useState } from "react";
import { fetchPictures } from "../api/fetchPictures";
import { Photo } from "../types/Photo";

const usePictures = (currentPage: number) => {
    const [data, setData] = useState<{ pictures: Photo[], pagesCount: number }>({
        pictures: [],
        pagesCount: 0,
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async (page: number) => {
            setIsLoading(true);
            const json = await fetchPictures(page);
            setData(data => ({
                pagesCount: json.photos.pages,
                pictures: data.pictures.concat(json.photos.photo),
            }));
            setIsLoading(false);
        };

        fetchData(currentPage);
    }, [currentPage]);

    return {
        isLoading,
        hasMore: currentPage < data.pagesCount,
        pictures: data.pictures,
    };
};

export default usePictures;