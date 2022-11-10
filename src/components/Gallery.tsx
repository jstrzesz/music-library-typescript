import { FC, ReactElement } from 'react';
import { MusicInformation } from '../types';
import GalleryItem from './GalleryItem'

interface GalleryProps {
    data: MusicInformation[];
}

const Gallery: FC<GalleryProps> = ({ data }): ReactElement => {

    const display: any[] = data.map((item: MusicInformation, index: number): ReactElement => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
};

export default Gallery;
