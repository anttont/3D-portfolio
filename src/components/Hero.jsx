import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { useLanguage } from '../LanguageContext';
import { About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from '../components';

const Hero = () => {
  const { language } = useLanguage(); // Get the selected language from the context

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Render Canvas component only for larger screens */}
      <ComputersCanvas />

      {/* Text on the left-top of the screen */}
      <div className="absolute top-20 left-20 sm:left md:left-20 lg:left-32 transform translate-x-10 translate-y-10 text-white text-center z-11">
        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>Hei, nimeni on</h1>
          <p className="text-lg"></p>
        </div>
      </div>

      {/* Render Canvas component only for smaller screens */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <StarsCanvas />
      </div>

      {/* Text on the right-center of the screen */}
      <div className="absolute top-1/2 right-20 md:right-20 lg:right-15 transform translate-y-[-40%] text-white text-center z-10">
        <div>
          <h1 className="text-4xl font-bold mb-8">Olen ohjelmisto-kehittäjä</h1>
          <p className="text-lg"></p>
        </div>
      </div>

      {/* Bottom arrow link */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
