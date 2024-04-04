import React from 'react';

import './App.css';
import Navbar from './Componenet/Nava/Navbar';
import InfoSection from './Componenet/Infor-section/Section-two';
import ProfilePicture from './Componenet/Porfile/Picture';
import ActionsSection from './Componenet/Action/Section';
import About from './Componenet/About/About';


// import Cantact from './Componenet/Contact/Contact';


function App() {
  return (
    <div className="portfolio">
      <Navbar />
    
        <ProfilePicture />
       <InfoSection />
       <ActionsSection />
         <About />
       
         

      
    </div>
  );
}

export default App;