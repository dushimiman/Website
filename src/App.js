import React from 'react';
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';
import Team from './Views/Team';
import Media from './Views/Media';
import ContactUs from './Views/ContactUs';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Aboutus' element={<AboutUs />} />
      <Route path='/OurTeam' element={<Team />} />
      <Route path='/Media' element={<Media  />} />
      <Route path='/Contactus' element={<ContactUs  />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;