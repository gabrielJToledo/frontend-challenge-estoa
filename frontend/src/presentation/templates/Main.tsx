import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../home/Home';

function Main() {
  return (
    <main className="bg-secondary-200 flex justify-center p-4">
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  );
}

export default Main;
