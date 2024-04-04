import React from 'react';
import './About.css'; 

import profileImg from './picture1.png';

function About() {
  return (
    <div className="about-section">
      <div className="about-image">
       
        {/* Beddel URL-ka sawirkaaga meesha 'path_to_your_image.jpg' ku taal */}
        <img className="About" src={profileImg} alt="About Us" width="80" height="80" />
      </div>
      <div className="about-content">
        <h2>About us.</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eaque dignissimos voluptate esse, dolor quisquam? Facilis incidunt ipsam, totam fugiat libero perspiciatis quaerat debitis ab ad voluptate ratione consequuntur veritatis quibusdam eius unde maxime optio, illo ipsum soluta, nostrum sint at dolorem deserunt repudiandae? Dignissimos!</p>
      </div>
    </div>
  );
}

export default About;
