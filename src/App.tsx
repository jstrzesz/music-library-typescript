import './App.css';
import { useEffect, useState, FC, FormEvent, ReactElement } from 'react';
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { MusicInformation } from './types';

const App: FC = (): ReactElement => {
  let [searchTerm, setSearchTerm] = useState<string>('');
  let [data, setData] = useState<MusicInformation[]>([]);
  let [message, setMessage] = useState<string>('Search for Music!');

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`;
      const fetchData = async (): Promise<void> => {
        const response = await fetch(`https://itunes.apple.com/search?term=${searchTerm}`);
        const resData = await response.json();
        console.log(resData, 'line 17');
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
  }
  }, [ searchTerm ]);

  const handleSearch = (e: FormEvent<HTMLFormElement>, term: string): void => {
    e.preventDefault()
    setSearchTerm(term)
  }

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data} />
    </div>
  );
}

export default App;
