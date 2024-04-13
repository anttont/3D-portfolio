import { BrowserRouter } from "react-router-dom";
import React from "react";
import { LanguageProvider } from "./LanguageContext";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, ComputersCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
      <div className='relative z-0 bg-black'>
        <div className=' bg-slate-150 bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          
        </div>
        <About />
        
        {/*<Experience />*/}
        <Tech />
        
        {/*<Works />*/}
        {/*<Feedbacks />*/}
        <div className='relative z-0 bg-black'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      </LanguageProvider>
    </BrowserRouter>
    
  );
}

export default App;
