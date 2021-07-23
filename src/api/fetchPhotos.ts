import { FetchPhotosResponse } from "../types/FetchPhotosResponse";
import { API_KEY, API_URL } from "./constants";

export const fetchPhotos = async (page: number): Promise<FetchPhotosResponse> => {
    const perPage = 20;
    const extras = 'url_s,url_m,url_l,owner_name';
    const url = `${API_URL}/?method=flickr.photos.getRecent&api_key=${API_KEY}&format=json&nojsoncallback=1&extras=${extras}&per_page=${perPage}&page=${page}`;
    
    const response = await fetch(url);
    if (response.status !== 200) {
        throw Error('Something went wrong while fetching pictures');
    }

    return response.json();
};
