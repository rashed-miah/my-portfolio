// Certifications.js
import React, { useState, useEffect } from 'react';


import "../css/certifications.css"

import ethicalHacking from "../images/certificates/ethicalHacking.png";
import nasa from "../images/certificates/nasa.jpg";
import volunteer from "../images/certificates/Volunteer-221002143-1.png";
import udemy from "../images/certificates/udemy.jpg";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';



// import required modules
import { EffectCards } from 'swiper/modules';


function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
    </div>
  );
}

function Certifications() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgress(50);
    }, 100);
  }, []);

  return (
    <div className="certification-carousel" id="certifications">
      <div className="container">
        <h3>Certifications</h3>
        <div className="progressBox mb-5">
          <ProgressBar progress={progress} />
        </div>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide><img src={udemy} alt="udemy" /></SwiperSlide>
          <SwiperSlide><img src={ethicalHacking} alt="ethicalHacking" /></SwiperSlide>
          <SwiperSlide><img src={volunteer} alt="volunteer" /></SwiperSlide>
          <SwiperSlide><img src={nasa} alt="nasa" /></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
}

export default Certifications;
