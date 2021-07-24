import getSrcSet from './getSrcSet';
import { Photo } from '../types/Photo';

describe('getSrcSet', () => {
    it('should return an srcSet to pass to an image from a Photo', () => {
        const photo: Photo = {
            id: '1',
            ownername: 'florian',
            title: 'pretty pic',
            url_s: 'http://my.image.url',
            width_s: 200,       
        };

        expect(getSrcSet(photo)).toEqual('http://my.image.url 200w, ');
        
        const photoWithMedium: Photo = {
            ...photo,
            url_m: 'http://my.medium.image.url',
            width_m: 500,
        };
        expect(getSrcSet(photoWithMedium)).toEqual('http://my.medium.image.url 500w, http://my.image.url 200w, ');

        const photoWithLarge: Photo = {
            ...photoWithMedium,
            url_l: 'http://my.large.image.url',
            width_l: 1000,
        };
        expect(getSrcSet(photoWithLarge)).toEqual('http://my.large.image.url 1000w, http://my.medium.image.url 500w, http://my.image.url 200w, ');
    });
});