import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../home/Home';
import Character from '../character/Character';

function Main() {
  return (
    <main className="bg-secondary-200 flex justify-center p-4">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/personagem/:id' element={<Character/>}/>
      </Routes>
    </main>
  );
}

export default Main;
