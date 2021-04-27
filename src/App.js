import './App.css';
import { useEffect, useState } from 'react'
import Display from './components/Display'
import Search from './components/Search'

function App() {
  let [search, setSearch] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for a Band')

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  useEffect(() => {
    if (search) {
      document.title=`${search} Music`
      fetch(`https://itunes.apple.com/search?term=${search}`)
      .then(response => response.json())
      .then(resData => {
        console.log(resData)
        if (resData.results.length > 0) {
          return setData(resData.results)
        } else {
          return setMessage('Not Found.')
        }
      })
      .catch(err => setMessage('An Error has Occurred!'))
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    term = toTitleCase(term)
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
