import { Photo } from "../../types/Photo";
import PhotoDisplay from "../PhotoDisplay";
import './PhotoGrid.css';

type Props = {
    photos: Photo[];
    favourites: string[];
    onFavour: (id: string) => void;
    onUnfavour: (id: string) => void;
};

const getIsFavourite = (photoId: string, favourites: string[]) => favourites.includes(photoId);

const PhotoList: React.FC<Props> = ({ photos, favourites, onFavour, onUnfavour }) => {

    const images = photos.map(photo => (
      <PhotoDisplay
        key={photo.id}
        photo={photo}
        isFavourite={getIsFavourite(photo.id, favourites)}
        onFavour={onFavour}
        onUnfavour={onUnfavour}
      />
    ));

    return (
        <div className="photo-grid">
          <div>{images}</div>
        </div>
    );
};

export default PhotoList;