import { Photo } from "../types/Photo";

const getSrcSet = (photo: Photo): string => {
    let srcSet = '';
    if (photo.url_l && photo.width_l) {
        srcSet += `${photo.url_l} ${photo.width_l}w, `;
    }
    if (photo.url_m && photo.width_m) {
        srcSet += `${photo.url_m} ${photo.width_m}w, `;
    }
    srcSet += `${photo.url_s} ${photo.width_s}w, `;
    return srcSet;
};

export default getSrcSet;