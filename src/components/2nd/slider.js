import React from "react";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './slider.css'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'
import image4 from './img/image4.jpg'
import image5 from './img/image5.jpg'
import image6 from './img/image6.jpg'

export const Slider = () => {
  const index = [ image1,image2,image3,image4,image5,image6];
    return (
    <div className="contain">
    <AliceCarousel autoPlay autoPlayInterval="2000" playButtonEnabled="true" infinite disableButtonsControls>
     {index.map((idx)=>{
        return (
          <div className="description">
          <div class="bottom-right">Price: Bahut jyada</div>
          <img src={idx} className="sliderimg" alt=""/></div>
        )
     })} 
      </AliceCarousel>
    </div>
    )
  }