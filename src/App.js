import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Footer from './Footer';


function App() {
  return (
    
    <div className="min-h-screen flex flex-col font-sans">
      
      
      <Navbar />
      
     
      <div className="flex-grow">
        <Hero />
      </div>
      
      
      <Footer />
      
    </div>
  );
}

export default App;