import GalleryItem from './GalleryItem'

const Gallery = (props) => {

    const display = props.data.map((d, i) => {
        return (
            <GalleryItem d={d} key={i} />
        )
    })

    return (
        <div>
            {display}
            {/* <GalleryItem /> */}
        </div>
    )
}

export default Gallery