import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Filial from './Components/Filial/Filial';
import Home from './Components/Home';
import Nas from './Components/Nas/Nas';
import Contac from './Components/Contac/Contac';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />}/>
        <Route path="/filial" element={< Filial/>}/>
        <Route path='/nas'  element={<Nas />}/>
        <Route path='/contac' element={<Contac />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;