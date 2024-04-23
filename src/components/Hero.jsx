import React, { useEffect, useState } from 'react';
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
      
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 sm:left-1/4 sm:-translate-x-10 md:left-0 md:translate-x-20 z-10 text-center md:text-left">

        <h1 className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl">
        {isMobile
            ? language === 'en'
              ? 'Hi, my name is Anttoni'
              : 'Hei, nimeni on Anttoni'
            : language === 'en'
              ? 'Hi, my name is'
              : 'Hei, nimeni on'}
          </h1>
      </div>

      <ComputersCanvas />
      <StarsCanvas />

    </section>
  );
};

export default Hero;




