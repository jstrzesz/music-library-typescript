import './App.css';
import { useEffect, useState } from 'react'
import Display from './components/Display'
import Search from './components/Search'

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for a Band')

  useEffect(() => {
    if (search) {
      fetch(`https://itunes.apple.com/search?term=${search}`)
      .then(response => response.json())
      .then(resData => {
        console.log(resData)
        if (resData) {
          return setData(resData.results)
        } else {
          return setMessage('An error has occured!')
        }
      })
      .catch(err => console.log(err))
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    console.log(term)
    setSearch(term)
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      {message}
      <Display data={data} />
    </div>
  );
}

export default App;
