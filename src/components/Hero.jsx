import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext';
import { ComputersCanvas, StarsCanvas } from './'; // Assuming these components are exported from separate files

const Hero = () => {
  const { language } = useLanguage(); // Get the selected language from the context
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1090px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      
      <div className="absolute top-40 sm:top-1/4 left-1/2 transform -translate-x-1/2 sm:left-1/4 sm:-translate-x-10 md:left-0 md:translate-x-20 z-10 text-center md:text-left">


        <h1 className="font-bold text-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-7xl">
        {isMobile
            ? language === 'en'
              ? ''
              : ''
            : language === 'en'
              ? 'Hi, my name is'
              : 'Hei, nimeni on'}
          </h1>

      </div>

      <ComputersCanvas />
          
      {isMobile ? <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> : <> </>}
      

      

      
      <StarsCanvas />

    </section>
  );
};

export default Hero;




