import { useState } from 'react';
import './App.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


function App() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (<>
    <Header onSearch={handleSearch} />
    <Main searchValue={searchValue} />
  </>
  );
}

export default App;
