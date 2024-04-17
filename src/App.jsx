import { BrowserRouter } from "react-router-dom";
import React from "react";
import { LanguageProvider } from "./LanguageContext";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
      <div className='relative z-0 bg-black'>
        <div className=' bg-slate-150 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
         <StarsCanvas /> 
        </div>
        
        </div>
      </div>
      </LanguageProvider>
    </BrowserRouter>
    
  );
}

export default App;
