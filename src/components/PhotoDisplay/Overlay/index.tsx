import './Overlay.css';

type Props = {
    title: string;
    ownername: string;
    isFavourite: boolean;
    onClick: () => void;
};

const Overlay: React.FC<Props> = ({ title, ownername, isFavourite, onClick }) => (
    <div className="picture-overlay">
        <div className="description">
            <h4>{title || 'Untitled'}</h4>
            <hr/>
            <i>{ownername}</i>
        </div>
        <button className={isFavourite ? 'selected' : ''} onClick={onClick}>{isFavourite ? 'Unfavour' : 'Favourite'}</button>
    </div>
);

export default Overlay;