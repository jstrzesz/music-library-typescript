import { useState, FC, ReactElement, FormEvent } from 'react'

interface SearchBarProps {
    handleSearch: (e: FormEvent<HTMLFormElement>, term: string) => void; 
}

const SearchBar: FC<SearchBarProps> = ({ handleSearch }): ReactElement => {
    let [searchTerm, setSearchTerm] = useState('')

    return (
            <form onSubmit={(e: FormEvent<HTMLFormElement>): void => handleSearch(e, searchTerm)}>
                <input type="text" placeholder="Search Here" onChange={(e) => setSearchTerm(e.target.value)} />
                <input type="submit" />
            </form>
    )
}

export default SearchBar
