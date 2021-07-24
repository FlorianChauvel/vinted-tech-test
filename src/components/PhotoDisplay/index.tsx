import { Photo } from "../../types/Photo";
import Backdrop from "./Backdrop";
import Overlay from "./Overlay";
import './PhotoDisplay.css';

type Props = {
    photo: Photo;
    isFavourite: boolean;
    onFavour: (id: string) => void;
    onUnfavour: (id: string) => void;
}
const PhotoDisplay: React.FC<Props> = ({ photo, isFavourite, onFavour, onUnfavour }) => {
    if (!photo.url_l) {
        return null;
    }

    const handleClick = () => {
        isFavourite ? onUnfavour(photo.id) : onFavour(photo.id);
    };

    const { title, ownername } = photo;

    return (
        <div className="photo-display">
            <Backdrop />
            <Overlay title={title} ownername={ownername} isFavourite={isFavourite} onClick={handleClick} />
            <img src={photo.url_l} alt={photo.title} />
        </div>
    );
};

export default PhotoDisplay;