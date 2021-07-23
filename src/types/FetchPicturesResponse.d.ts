import { Photo } from "./Photo";

export type FetchPicturesResponse = {
    photos: {
        page: number;
        pages: number;
        photo: Photo[];
    };
};