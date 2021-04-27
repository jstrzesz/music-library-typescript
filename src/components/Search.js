import { useState } from 'react'

const Search = (props) => {
    let [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Search