import React from 'react';
import './App.css';
import {Navbar} from './components/navigation/navbar';
import {Products} from './components/products/products';
import Footer from './components/footer/footer';
import {Story} from './components/story/story'
//slider
import {Slider} from './components/2nd/slider'

function App() {
  return (
    <div className='App'>
      <div className='patch'>
        < Navbar/>
        < Story/>
        < Slider/>  
      </div>      
      < Products/>
      < Footer/>     
    </div>
  );
}

export default App;
