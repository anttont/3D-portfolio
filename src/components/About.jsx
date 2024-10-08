/* eslint-disable react/no-unknown-property */
import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook
import { styles } from "../styles";
import { services, introductions } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc/';

const ServiceCard = ({ index, title, icon, href }) => {
  
  return (
    <Tilt className='xs:w-[250px] w-full' >
      <a href={href}>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
         
        className='bg-[#0a0a0a] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
      </a>
    </Tilt>
  );
};

const About = () => {
  const { language } = useLanguage(); // Get the selected language from the context
  const introduction = introductions[0][language];

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-white`}>
        {language === 'en' ? 'Overview' : 'Tietoa minusta'}
        </h2>
      </motion.div>

      <motion.div className="mt-4 text-white text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}>
        <p>{introduction}</p> {/* Display the introduction text based on the selected language */}
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} href={service.href} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
