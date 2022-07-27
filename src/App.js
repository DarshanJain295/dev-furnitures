import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop-page/shop-page';
import {Routes,Route } from 'react-router-dom'
import Navbar from './components/navigation/navbar';
import Footer from './components/footer/footer';



function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/shop' element={<ShopPage/>}/>
        <Route path='/about_us' element={<ShopPage/>}/>
        <Route path='/preview' element={<ShopPage/>}/>    
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
