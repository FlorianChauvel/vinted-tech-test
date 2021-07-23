import { Photo } from "./Photo";

export type FetchPhotosResponse = {
    photos: {
        page: number;
        pages: number;
        photo: Photo[];
    };
};