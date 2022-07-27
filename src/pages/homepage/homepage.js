import React from 'react';
import './homepage.css';
import Navbar from '../../components/navigation/navbar';
import {Products} from '../../components/products/products';
import Footer from '../../components/footer/footer';
import {Story} from '../../components/story/story'
import {Slider} from '../../components/2nd/slider'

function Homepage() {
  return (
    <div>
      <div className='patch'>
        
        < Story/>
        < Slider/>  
      </div>      
      < Products/>
          
    </div>
  );
}

export default Homepage;
