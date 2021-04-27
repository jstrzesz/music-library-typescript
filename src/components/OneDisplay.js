import { useState } from 'react'

const OneDisplay = (props) => {
    let [view, setView] = useState(true)

    const simpleView = () => {
        return (
            <div>
                <h3>{props.d.trackName}</h3>
                <h4>{props.d.collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div >
                <h2>{props.d.trackName}</h2>
                <h3>{props.d.collectionName}</h3>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)}
        style={{'display': 'inline-block', 'width': '25vw', 'height': '15vh', 'border': '1px solid black', 'margin' : '2px'}}>
            {view ? simpleView() : detailView()}
        </div>
    )
} 

export default OneDisplay