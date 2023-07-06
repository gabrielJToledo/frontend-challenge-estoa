import React from 'react';
import './App.css';

import Header from './presentation/templates/Header';
import Main from './presentation/templates/Main';

import { useGetCharactersStarWarsFromAPI } from './services/charactersStarWars.service';

function App() {
  useGetCharactersStarWarsFromAPI()
  
  return (
    <div className="app">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
