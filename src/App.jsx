import { BrowserRouter } from "react-router-dom";
import React from "react";
import { LanguageProvider } from "./LanguageContext";


import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <LanguageProvider>
      <div className='relative z-0 bg-[#131314]'>
        <div className='bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
        <Footer/>
      </div>
      </LanguageProvider>
    </BrowserRouter>
    
  );
}

export default App;
