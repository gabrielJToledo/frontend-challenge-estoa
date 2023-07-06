import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../home/Home';
import Character from '../character/Character';

const starfieldBackground = require('../../assets/starfield.jpg')

function Main() {
  return (
    <main className=" flex justify-center p-4" style={{backgroundImage: `url(${starfieldBackground})`}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/personagem/:id' element={<Character/>}/>
      </Routes>
    </main>
  );
}

export default Main;
