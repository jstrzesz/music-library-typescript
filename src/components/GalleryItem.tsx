import { useState, FC, ReactElement } from 'react'
import { MusicInformation } from '../types';

interface GalleryItemProps {
    item: MusicInformation;
}

const GalleryItem: FC<GalleryItemProps> = ({ item }): ReactElement => {
    let [ view, setView ] = useState<boolean>(false);

    const simpleView = (): ReactElement => {
        return (
            <div style={{
                'width': '25vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative'
            }}>
                <h3>{item.trackName}</h3>
                <h4>{item.collectionName}</h4>
            </div>
        )
    }

    const detailView = (): ReactElement => {
        return (
            <div style={{
                'width': '80vw',
                'height': '20vh',
                'border': '1px solid black',
                'margin' : '2px',
                'position': 'relative',
                'backgroundImage': `url(${item.artworkUrl100})`,
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'color': 'white'
            }}>
                <h2>{item.trackName}</h2>
                <h3>{item.collectionName}</h3>
                <h4>{item.primaryGenreName}</h4>
                <h4>{item.releaseDate}</h4>
            </div>
        )
    }

    return (
        <div onClick={(): void => setView(!view)}
        style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
};

export default GalleryItem;
