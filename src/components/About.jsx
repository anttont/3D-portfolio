import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useLanguage } from '../LanguageContext'; // Import the useLanguage hook
import { styles } from "../styles";
import { services, introductions } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc/';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-slate-200 rounded-[20px] py-5 px-12 min-h-[280px]
         flex justify-evenly items-center flex-col'>
          <img src={icon} alt="title" className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { language } = useLanguage(); // Get the selected language from the context

  const introduction = introductions[0][language];
  console.log(introduction, language)
  

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-black`}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <motion.div className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}>
        <p>{introduction}</p> {/* Display the introduction text based on the selected language */}
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
