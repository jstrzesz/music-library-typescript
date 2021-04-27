import OneDisplay from './OneDisplay'

const Display = (props) => {

    const display = props.data.map((d, i) => {
        return (
            <OneDisplay d={d} key={i} />
        )
    })

    return (
        <div>
            <p>Tha big container</p>
            {display}
        </div>
    )
}

export default Display