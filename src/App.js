import React from 'react';
import './App.css';
import Search from './Components/Search By Breed Component/SearchByBreed'
import Header from "./Components/HeaderComponent/Header.js"

function App() {
  return (
    <div className="App">
      <Header />
      <hr/>
      <Search />
    </div>
  );
}

export default App;
