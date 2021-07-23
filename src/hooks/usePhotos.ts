import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/fetchPhotos";
import { Photo } from "../types/Photo";

const concatWithoutDuplicates = (currentPhotos: Photo[], incomingPhotos: Photo[]): Photo[] => {
    const currentIds = currentPhotos.map(photo => photo.id);
    const nonDuplicates = incomingPhotos.filter(photo => !currentIds.includes(photo.id));
    return currentPhotos.concat(nonDuplicates);
};

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
                photos: concatWithoutDuplicates(data.photos, json.photos.photo),
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