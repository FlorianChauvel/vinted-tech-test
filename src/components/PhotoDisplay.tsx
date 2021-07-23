import { Photo } from "../types/Photo";

type Props = {
    photo: Photo;
    isFavourite: boolean;
    onFavour: (id: string) => void;
    onUnfavour: (id: string) => void;
}
const PhotoDisplay: React.FC<Props> = ({ photo, isFavourite, onFavour, onUnfavour }) => {
    const handleClick = () => {
        isFavourite ? onUnfavour(photo.id) : onFavour(photo.id);
    };

    return (
        <div>
            <button onClick={handleClick}>{isFavourite ? 'Unfav' : 'fav' }</button>
            <img src={photo.url_l} alt={photo.title} />
        </div>
    );
};

export default PhotoDisplay;