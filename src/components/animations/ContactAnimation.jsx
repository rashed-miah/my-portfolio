import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../animations/E-mail worldwide delivery.json';

const ContactAnimaiton = () => {
  return (
    <div style={{ width: '300px', height: '280px' }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default ContactAnimaiton;
