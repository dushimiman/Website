import React from 'react';
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Aboutus' element={<AboutUs />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;